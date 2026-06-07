import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          ToDo List
        </h1>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
