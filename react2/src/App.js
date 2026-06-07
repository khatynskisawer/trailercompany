import React, { useState } from 'react';
import { Clock } from './components/Clock';
import { ProfessionSelector } from './components/ProfessionSelector';
import { JobMenu } from './components/JobMenu';
import './App.css';

function App() {
  const [selectedProfession, setSelectedProfession] = useState('developer');

  return (
    <div className="app">
      <header>
        <h1>🚀 JobHub — Полезные ресурсы для IT и не только</h1>
        <Clock format="24" timezone="+3:00" />
      </header>

      <main>
        <ProfessionSelector
          selected={selectedProfession}
          onSelect={setSelectedProfession}
        />

        <JobMenu professionId={selectedProfession} />
      </main>
    </div>
  );
}

export default App;