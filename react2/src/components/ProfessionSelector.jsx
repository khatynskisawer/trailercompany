import React from 'react';
import { professions } from '../data/professions';

export const ProfessionSelector = ({ selected, onSelect }) => {
  return (
    <div className="profession-selector">
      <h2>Выберите профессию</h2>
      <div className="professions-grid">
        {professions.map((prof) => (
          <button
            key={prof.id}
            className={`profession-btn ${selected === prof.id ? 'active' : ''}`}
            onClick={() => onSelect(prof.id)}
          >
            <span className="emoji">{prof.emoji}</span>
            <span>{prof.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};