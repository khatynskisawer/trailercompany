import React from 'react';

const ToDoItems = ({ tasks, onToggleTask, onDeleteTask, filter }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-2xl mb-2">📭</p>
        <p>Нет задач в этой категории</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          className="group flex items-center gap-4 bg-white border border-gray-200 hover:border-red-200 
                     rounded-2xl p-5 transition-all hover:shadow-md"
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
            className="w-6 h-6 accent-blue-600 cursor-pointer"
          />
          
          <span
            className={`flex-1 text-lg transition-all ${
              task.completed 
                ? 'line-through text-gray-400' 
                : 'text-gray-800'
            }`}
          >
            {task.text}
          </span>

          {/* Кнопка удаления */}
          <button
            onClick={() => onDeleteTask(task.id)}
            className="opacity-0 group-hover:opacity-100 w-9 h-9 flex items-center justify-center 
                       text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
            title="Удалить задачу"
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoItems;