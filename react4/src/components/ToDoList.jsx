import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItems from './ToDoItems';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [showList, setShowList] = useState(false);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Новая функция удаления
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleSubmit = () => {
    if (tasks.length > 0) setShowList(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">My ToDo List</h1>
          <p className="opacity-90">Организуй свои задачи легко и красиво!</p>
        </div>

        <div className="p-8">
          <ToDoForm onAddTask={addTask} />

          <div className="flex justify-center my-8">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
                         text-white font-semibold px-12 py-4 rounded-2xl text-lg shadow-lg 
                         transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Submit
            </button>
          </div>

          {showList && (
            <>
              {/* Фильтры */}
              <div className="flex justify-center gap-2 mb-8 bg-gray-100 p-2 rounded-2xl">
                {[
                  { label: 'Все', value: 'all' },
                  { label: 'Невыполненные', value: 'active' },
                  { label: 'Выполненные', value: 'completed' }
                ].map(({ label, value }) => (
                  <button
                    key={value}
                    onClick={() => setFilter(value)}
                    className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
                      filter === value
                        ? 'bg-white shadow-md text-blue-600 scale-105'
                        : 'text-gray-600 hover:bg-white/60'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <ToDoItems 
                tasks={tasks} 
                onToggleTask={toggleTask} 
                onDeleteTask={deleteTask}   
                filter={filter} 
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;