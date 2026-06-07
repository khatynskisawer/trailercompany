import React from 'react';
import { menuData } from '../data/professions';

export const JobMenu = ({ professionId }) => {
  const items = menuData[professionId] || [];

  return (
    <div className="job-menu">
      <h2>Полезные ссылки</h2>
      <div className="menu-grid">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="menu-card"
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="link-hint">Перейти →</span>
          </a>
        ))}
      </div>
    </div>
  );
};