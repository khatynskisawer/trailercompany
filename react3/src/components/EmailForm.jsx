'use client';

import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ text: 'Пожалуйста, введите email', type: 'error' });
      return;
    }

    if (!validateEmail(email)) {
      setMessage({ text: 'Некорректный формат email', type: 'error' });
      return;
    }

    setMessage({ text: `Email ${email} успешно отправлен!`, type: 'success' });
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Отправка email</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email адрес</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@domain.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          Отправить
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 rounded-lg text-center font-medium ${
            message.type === 'success'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default EmailForm;