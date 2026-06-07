import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Form
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;