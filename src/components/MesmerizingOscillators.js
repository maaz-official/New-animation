// src/MesmerizingOscillators.js
import React from 'react';
import './MesmerizingOscillators.css'; // Import the custom CSS

const MesmerizingOscillators = () => {
  return (
    <div className="scene">
      <h1>PENDULUM</h1>
      <div className="right">
        {Array.from({ length: 40 }, (_, i) => (
          <i key={i} style={{ '--i': i + 1 }}></i>
        ))}
      </div>
      <div className="left">
        {Array.from({ length: 40 }, (_, i) => (
          <i key={i} style={{ '--i': i + 1 }}></i>
        ))}
      </div>
    </div>
  );
};

export default MesmerizingOscillators;
