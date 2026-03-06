"use client";
import React, { useState } from 'react';

// Farby z logomanuálu Forbes Growclub [cite: 65, 66]
const BRAND = { dark: '#1e1a34', accent: '#c7a1f7', white: '#ffffff' };

// Hodnoty extrahované z vášho Excelu 
const VALUES = [
  "PORIADOK", "HARMÓNIA", "STABILITA", "SÚDRŽNOSŤ", "MORÁLKA", "SPRAVODLIVOSŤ", 
  "DISCIPLÍNA", "ROVNOSŤ", "PRESNOSŤ", "KONSENZUS", "ŠTRUKTÚRA", "SPOLUPATRIČNOSŤ", 
  "SOLIDARITA", "ŠŤASTIE", "LOJÁLNOSŤ", "MINDFULNESS/VŠÍMAVOSŤ", "PRACOVITOSŤ", "REŠPEKT", 
  "PLNENIE POVINNOSTÍ", "ZDIEĽANIE", "PODPORA", "SEBA-VYJADRENIE", "FÉROVOSŤ", "LOGIKA", 
  "EMPATIA", "SPOLUPRÁCA", "SYNERGIA", "KOMPLEXNOSŤ", "PARTNERSTVO", "TOLERANCIA", 
  "PREPOJENOSŤ", "POKORA", "INŠPIRATÍVNOSŤ", "INTEGRITA", "MAJSTROVSTVO", 
  "SPONTÁNNOSŤ", "SEBA-UVEDOMOVANIE", "ZHODA"
];

export default function Assessment() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");

  const toggle = (v: string) => {
    if (selected.includes(v)) setSelected(selected.filter(i => i !== v));
    else if (selected.length < 7) setSelected([...selected, v]);
  };

  return (
    <div style={{ backgroundColor: BRAND.dark, minHeight: '100vh', color: BRAND.white, padding: '40px' }}>
      {/* Header s rešpektovaním ochrannej zóny [cite: 31, 34] */}
      <header style={{ textAlign: 'center', marginBottom: '50px', borderBottom: `2px solid ${BRAND.accent}`, paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          FORBES <span style={{ color: BRAND.accent }}>GROWCLUB</span>
        </h1>
        <p style={{ opacity: 0.6, fontSize: '14px' }}>
          HODNOTOVÝ ASSESSMENT (SPIRAL DYNAMICS)
          {/* Písmeno "w" v názve Growclub symbolizuje rast [cite: 14] */}
        </p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <input 
          placeholder="Tvoje meno / Názov tímu" 
          onChange={(e) => setName(e.target.value)}
          style={{ 
            width: '100%', padding: '15px', marginBottom: '30px', 
            background: 'transparent', border: `1px solid ${BRAND.accent}`, 
            color: BRAND.white, borderRadius: '4px', fontSize: '16px'
          }}
        />
        
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Vyberte presne 7 kľúčových hodnôt ({selected.length}/7)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px' }}>
          {VALUES.map(v => (
            <button key={v} onClick={() => toggle(v)} style={{
              padding: '15px', border: `1px solid ${selected.includes(v) ? BRAND.accent : '#333'}`, 
              backgroundColor: selected.includes(v) ? BRAND.accent : 'transparent',
              color: selected.includes(v) ? BRAND.dark : BRAND.white,
              cursor: 'pointer', transition: '0.3s', fontWeight: 'bold', borderRadius: '4px'
            }}>{v}</button>
          ))}
        </div>

        {selected.length === 7 && (
          <button style={{ 
            width: '100%', marginTop: '40px', padding: '20px', 
            backgroundColor: BRAND.accent, color: BRAND.dark, 
            fontWeight: 'bold', fontSize: '18px', border: 'none', 
            cursor: 'pointer', borderRadius: '4px' 
          }}>
            ODOSLAŤ VÝSLEDKY
          </button>
        )}
      </div>
    </div>
  );
}
