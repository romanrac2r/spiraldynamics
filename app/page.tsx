"use client";
import React, { useState } from 'react';

// Definícia farieb podľa logomanuálu
const BRAND = {
  dark: '#1e1a34',   // Primárna tmavá 
  accent: '#c7a1f7', // Svetlofialová 
  white: '#ffffff'
};

// Dáta z tvojho Excelu 
const VALUES = [
  "PORIADOK", "HARMÓNIA", "STABILITA", "SÚDRŽNOSŤ", "MORÁLKA", 
  "SPRAVODLIVOSŤ", "DISCIPLÍNA", "ROVNOSŤ", "PRESNOSŤ", "KONSENZUS",
  "ŠTRUKTÚRA", "SPOLUPATRIČNOSŤ", "SOLIDARITA", "ŠŤASTIE", "LOJÁLNOSŤ",
  "MINDFULNESS", "PRACOVITOSŤ", "REŠPEKT", "PLNENIE POVINNOSTÍ", "ZDIEĽANIE",
  "SKROMNOSŤ", "FÉROVOSŤ", "LOGIKA", "EMPATIA", "ÚSPECH", "SPOLUPRÁCA"
];

export default function Assessment() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (val: string) => {
    if (selected.includes(val)) setSelected(selected.filter(i => i !== val));
    else if (selected.length < 7) setSelected([...selected, val]);
  };

  return (
    <div style={{ backgroundColor: BRAND.dark, minHeight: '100vh', color: BRAND.white, padding: '40px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px', borderBottom: `2px solid ${BRAND.accent}` }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
          FORBES <span style={{ color: BRAND.accent }}>GROWCLUB</span>
        </h1>
        <p style={{ opacity: 0.6, fontSize: '12px' }}>SPIRAL DYNAMICS ASSESSMENT</p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Vyberte top 7 hodnôt ({selected.length}/7)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px' }}>
          {VALUES.map(v => (
            <button key={v} onClick={() => toggle(v)} style={{
              padding: '15px',
              cursor: 'pointer',
              border: `1px solid ${BRAND.accent}`,
              backgroundColor: selected.includes(v) ? BRAND.accent : 'transparent',
              color: selected.includes(v) ? BRAND.dark : BRAND.white,
              transition: '0.3s'
            }}>{v}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
