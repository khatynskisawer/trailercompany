import EmailForm from './components/EmailForm';
import ProductCatalog from './components/ProductCatalog';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Задание 1 */}
        <div>
          <h1 className="text-3xl font-bold text-center mb-8">Задание 1 — Форма Email</h1>
          <EmailForm />
        </div>

        {/* Задание 2 */}
        <div>
          <h1 className="text-3xl font-bold text-center mb-8">Задание 2 — Каталог товаров</h1>
          <ProductCatalog />
        </div>

      </div>
    </div>
  );
}

export default App;   