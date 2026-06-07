import React from 'react';

const stocks = [
  { stock_name: "EFX", company_name: "Equifax Inc", price: 163.55, currency: "USD", change: "+9.03" },
  { stock_name: "IRM", company_name: "Iron Mountain Inc", price: 33.21, currency: "USD", change: "+1.42" },
  { stock_name: "NTAP", company_name: "NetApp Inc", price: 54.81, currency: "USD", change: "-6.01" },
  { stock_name: "CTL", company_name: "Centurylink Inc", price: 13.79, currency: "USD", change: "-1.37" }
];

const StockTable = () => {   
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Котировки акций</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Тикер</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Компания</th>
            <th style={{ padding: '12px', textAlign: 'right', border: '1px solid #ddd' }}>Цена</th>
            <th style={{ padding: '12px', textAlign: 'right', border: '1px solid #ddd' }}>Изменение</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => {
            const changeValue = parseFloat(stock.change);
            const isPositive = changeValue > 0;

            return (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>
                  {stock.stock_name}
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  {stock.company_name}
                </td>
                <td style={{ 
                  padding: '12px', 
                  border: '1px solid #ddd', 
                  textAlign: 'right',
                  fontWeight: '500'
                }}>
                  {stock.price.toFixed(2)} {stock.currency}
                </td>
                <td style={{ 
                  padding: '12px', 
                  border: '1px solid #ddd', 
                  textAlign: 'right',
                  fontWeight: 'bold',
                  color: isPositive ? '#0b8b3d' : '#d32f2f'
                }}>
                  {stock.change}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;