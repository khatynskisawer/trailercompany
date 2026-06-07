import React, { useState } from 'react';

const ToDoForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    
    onAddTask(taskText.trim());
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Что нужно сделать сегодня?"
        className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95"
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;