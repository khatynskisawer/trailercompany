'use client';
import React, { useState, useMemo } from 'react';

const initialProducts = [
  { id: 1, name: 'Ноутбук Lenovo', price: 75000, quantity: 5 },
  { id: 2, name: 'Смартфон Xiaomi', price: 32000, quantity: 12 },
  { id: 3, name: 'Монитор Samsung', price: 28000, quantity: 0 },
  { id: 4, name: 'Принтер HP', price: 18500, quantity: 3 },
  { id: 5, name: 'Мышь Razer', price: 6500, quantity: 2 },
  { id: 6, name: 'Клавиатура Logitech', price: 4500, quantity: 8 },
];

const ProductCatalog = () => {
  const [products] = useState(initialProducts);
  const [sortField, setSortField] = useState('row');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection(field === 'row' ? 'asc' : 'desc');
    }
  };

  const sortedProducts = useMemo(() => {
    const sorted = [...products].sort((a, b) => {
      if (sortField === 'name') {
        return sortDirection === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sortField === 'price') {
        return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
      }
      if (sortField === 'quantity') {
        return sortDirection === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity;
      }
      return a.id - b.id;
    });
    return sorted;
  }, [products, sortField, sortDirection]);

  const totalQuantity = sortedProducts.reduce((sum, p) => sum + p.quantity, 0);
  const totalCost = sortedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);

  // Функция возвращает стиль для строки
  const getRowStyle = (quantity) => {
    if (quantity === 0) {
      return { backgroundColor: '#fee2e2', fontWeight: '500' };     // Красный
    }
    if (quantity < 3) {
      return { backgroundColor: '#fef9c3', fontWeight: '500' };     // Жёлтый
    }
    return {};
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return '↕';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Каталог товаров</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-4 text-left cursor-pointer hover:bg-gray-200" onClick={() => handleSort('row')}>
                № {getSortIcon('row')}
              </th>
              <th className="px-6 py-4 text-left cursor-pointer hover:bg-gray-200" onClick={() => handleSort('name')}>
                Название товара {getSortIcon('name')}
              </th>
              <th className="px-6 py-4 text-right cursor-pointer hover:bg-gray-200" onClick={() => handleSort('price')}>
                Цена (₽) {getSortIcon('price')}
              </th>
              <th className="px-6 py-4 text-right cursor-pointer hover:bg-gray-200" onClick={() => handleSort('quantity')}>
                Количество {getSortIcon('quantity')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product, index) => (
              <tr 
                key={product.id}
                style={getRowStyle(product.quantity)}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4 text-right font-medium">
                  {product.price.toLocaleString('ru-RU')} ₽
                </td>
                <td className="px-6 py-4 text-right font-semibold">
                  {product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Итоги */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow flex justify-between items-center text-lg">
        <div>
          <span className="font-medium">Всего товаров: </span>
          <span className="font-bold text-blue-600">{totalQuantity} шт.</span>
        </div>
        <div>
          <span className="font-medium">Общая стоимость: </span>
          <span className="font-bold text-green-600">
            {totalCost.toLocaleString('ru-RU')} ₽
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;