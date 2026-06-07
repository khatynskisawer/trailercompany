import React from 'react';
import './Chessboard.css';

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

const Chessboard = () => {
  const getSquareColor = (fileIndex, rankIndex) => {
    return (fileIndex + rankIndex) % 2 === 0 ? 'black' : 'white';
  };

  return (
    <div className="chessboard-container">
      {/* Верхние буквы a-h */}
      <div className="file-labels">
        {files.map((file) => (
          <div key={file} className="file-label">{file}</div>
        ))}
      </div>

      <div className="board-wrapper">
        {/* Левая нумерация */}
        <div className="rank-labels">
          {ranks.map((rank) => (
            <div key={rank} className="rank-label">{rank}</div>
          ))}
        </div>

        {/* Основная доска */}
        <div className="chessboard">
          {ranks.map((rank, rankIndex) => (
            <div key={rank} className="row">
              {files.map((file, fileIndex) => (
                <div
                  key={`${file}${rank}`}
                  className={`square ${getSquareColor(fileIndex, rankIndex)}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Правая нумерация */}
        <div className="rank-labels">
          {ranks.map((rank) => (
            <div key={rank} className="rank-label">{rank}</div>
          ))}
        </div>
      </div>

      {/* Нижние буквы a-h */}
      <div className="file-labels">
        {files.map((file) => (
          <div key={file} className="file-label">{file}</div>
        ))}
      </div>
    </div>
  );
};

export default Chessboard;