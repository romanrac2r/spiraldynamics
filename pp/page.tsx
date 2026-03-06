"use client";
import React, { useState } from 'react';

const BRAND = {
  dark: '#1e1a34',
  accent: '#c7a1f7',
  white: '#ffffff'
};

// Dáta z tvojho Excelu namapované na Spiral Dynamics (Príklad)
const SPIRAL_DATA = [
  { name: "PORIADOK", level: "Blue" }, { name: "HARMÓNIA", level: "Green" },
  { name: "STABILITA", level: "Blue" }, { name: "SÚDRŽNOSŤ", level: "Green" },
  { name: "MORÁLKA", level: "Blue" }, { name: "SPRAVODLIVOSŤ", level: "Green" },
  { name: "DISCIPLÍNA", level: "Blue" }, { name: "ROVNOSŤ", level: "Green" },
  { name: "PRESNOSŤ", level: "Blue" }, { name: "KONSENZUS", level: "Green" },
  { name: "ŠTRUKTÚRA", level: "Blue" }, { name: "SPOLUPATRIČNOSŤ", level: "Green" },
  { name: "LOGIKA", level: "Orange" }, { name: "EMPATIA", level: "Green" },
  { name: "ÚSPECH", level: "Orange" }, { name: "SPOLUPRÁCA", level: "Green" },
  { name: "AMBICIÓZNOSŤ", level: "Orange" }, { name: "TOLERANCIA", level: "Green" },
  { name: "KREATIVITA", level: "Yellow" }, { name: "INTEGRITA", level: "Yellow" }
];

export default function AssessmentPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');

  const toggleValue = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter(v => v !== name));
    } else if (selected.length < 7) {
      setSelected([...selected, name]);
    }
  };

  return (
    <div style={{ backgroundColor: BRAND.dark, minHeight: '100vh', color: BRAND.white, fontFamily: 'sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px', borderBottom: `1px solid ${BRAND.accent}33`, paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' }}>
          FORBES <span style={{ color: BRAND.accent }}>GROWCLUB</span>
        </h1>
      </header>

      {step === 'intro' && (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Hodnotový Assessment</h2>
          <p style={{ marginBottom: '30px', opacity: 0.8 }}>Identifikujte svoje kľúčové hodnotové rámce podľa metodiky Spiral Dynamics.</p>
          <button 
            onClick={() => setStep('quiz')}
            style={{ backgroundColor: BRAND.accent, color: BRAND.dark, padding: '15px 40px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
            ZAČAŤ TEST
          </button>
        </div>
      )}

      {step === 'quiz' && (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ marginBottom: '20px' }}>Vyberte 7 hodnôt, ktoré sú pre vás najdôležitejšie ({selected.length}/7):</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px' }}>
            {SPIRAL_DATA.map(val => (
              <div 
                key={val.name}
                onClick={() => toggleValue(val.name)}
                style={{
                  padding: '15px',
                  border: `1px solid ${selected.includes(val.name) ? BRAND.accent : '#333'}`,
                  backgroundColor: selected.includes(val.name) ? BRAND.accent : 'transparent',
                  color: selected.includes(val.name) ? BRAND.dark : BRAND.white,
                  cursor: 'pointer',
                  transition: '0.2s',
                  fontSize: '14px',
                  textAlign: 'center'
                }}
              >
                {val.name}
              </div>
            ))}
          </div>
          {selected.length === 7 && (
            <button 
              onClick={() => setStep('result')}
              style={{ width: '100%', marginTop: '30px', padding: '20px', backgroundColor: BRAND.accent, color: BRAND.dark, border: 'none', fontWeight: 'bold' }}>
              ZOBRAZIŤ VÝSLEDOK
            </button>
          )}
        </div>
      )}

      {step === 'result' && (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: BRAND.accent }}>Váš profil je pripravený</h2>
          <p>Tu by sa zobrazil graf Spiral Dynamics na základe vašich 7 hodnôt.</p>
          <button onClick={() => setStep('intro')} style={{ marginTop: '20px', background: 'none', border: `1px solid ${BRAND.accent}`, color: BRAND.accent, padding: '10px 20px' }}>Spustiť znova</button>
        </div>
      )}
    </div>
  );
}
