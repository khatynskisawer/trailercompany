

import React from 'react';


function App() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const shortDate = today.toLocaleDateString('ru-RU');
  const time = today.toLocaleTimeString('ru-RU');

  return (
    <div>
      <h1>Сегодняшняя дата</h1>
      
      <div>
        <p><strong>{formattedDate}</strong></p>
        <p>{time}</p>
        <p>Короткий формат: {shortDate}</p>
      </div>

      <button onClick={() => window.location.reload()}>
        Обновить дату
      </button>
    </div>
  );
}

export default App;
