import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    gender: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedContacts, setSubmittedContacts] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очистка ошибки при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    if (!formData.message.trim()) newErrors.message = 'Сообщение обязательно';
    if (!formData.gender) newErrors.gender = 'Выберите пол';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newContact = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleString('ru-RU')
    };

    setSubmittedContacts(prev => [...prev, newContact]);
    
    setSuccessMessage('Форма успешно отправлена!');
    
    // Очистка формы
    setFormData({
      name: '',
      email: '',
      message: '',
      gender: ''
    });
    setErrors({});

    // Скрыть сообщение через 4 секунды
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Заголовок */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 text-center">
        <h2 className="text-3xl font-bold">Контактная форма</h2>
        <p className="mt-2 opacity-90">Заполните данные и отправьте сообщение</p>
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Имя */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              placeholder="Введите ваше имя"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Электронная почта</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              placeholder="example@mail.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Пол */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Пол</label>
            <div className="flex gap-6">
              {[
                { value: 'male', label: 'Мужской' },
                { value: 'female', label: 'Женский' }
              ].map(({ value, label }) => (
                <label key={value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={value}
                    checked={formData.gender === value}
                    onChange={handleChange}
                    className="w-5 h-5 accent-purple-600"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>

          {/* Сообщение */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 resize-y"
              placeholder="Введите ваше сообщение..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-2xl text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
          >
            Submit
          </button>
        </form>

        {successMessage && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-2xl text-center font-medium">
            {successMessage}
          </div>
        )}
      </div>

      {/* Таблица отправленных данных */}
      {submittedContacts.length > 0 && (
        <div className="px-8 pb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Отправленные сообщения</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left">Дата</th>
                  <th className="px-4 py-3 text-left">Имя</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Пол</th>
                  <th className="px-4 py-3 text-left">Сообщение</th>
                </tr>
              </thead>
              <tbody>
                {submittedContacts.map((contact) => (
                  <tr key={contact.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-500">{contact.date}</td>
                    <td className="px-4 py-3 font-medium">{contact.name}</td>
                    <td className="px-4 py-3 text-gray-600">{contact.email}</td>
                    <td className="px-4 py-3">
                      {contact.gender === 'male' ? 'Мужской' : 'Женский'}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{contact.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;