"use client";
import React, { useState } from 'react';

// Farby z logomanuálu Forbes Growclub
const BRAND = {
  dark: '#1e1a34', // HEX z manuálu 
  accent: '#c7a1f7', // HEX z manuálu 
  white: '#ffffff'
};

// Dáta z Excelu [cite: 116] namapované na Spiral Dynamics úrovne
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
  { name: "KREATIVITA", level: "Yellow" }, { name: "INTEGRITA", level: "Yellow" },
  { name: "DOKONALOSŤ", level: "Orange" }, { name: "POKORA", level: "Yellow" }
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
    <div style={{ backgroundColor: BRAND.dark, minHeight: '100vh', color: BRAND.white, fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px', borderBottom: `2px solid ${BRAND.accent}`, paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          FORBES <span style={{ color: BRAND.accent }}>GROWCLUB</span>
        </h1>
        <div style={{ fontSize: '12px', opacity: 0.7 }}>LOGOMANUÁL 2.4 / FAREBNOSŤ [cite: 62]</div>
      </header>

      {step === 'intro' && (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Hodnotový rámec</h2>
          <p style={{ marginBottom: '40px', lineHeight: '1.6' }}>
            Zistite, v ktorej úrovni Spiral Dynamics sa nachádzate na základe vašich priorít.
          </p>
          <button 
            onClick={() => setStep('quiz')}
            style={{ backgroundColor: BRAND.accent, color: BRAND.dark, padding: '18px 50px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '18px' }}>
            ZAČAŤ HODNOTENIE
          </button>
        </div>
      )}

      {step === 'quiz' && (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '20px', marginBottom: '30px', textAlign: 'center' }}>
            Vyberte presne 7 hodnôt z vášho zoznamu [cite: 116] ({selected.length}/7):
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
            {SPIRAL_DATA.map(val => (
              <div 
                key={val.name}
                onClick={() => toggleValue(val.name)}
                style={{
                  padding: '20px',
                  border: `2px solid ${selected.includes(val.name) ? BRAND.accent : '#3e3a54'}`,
                  backgroundColor: selected.includes(val.name) ? BRAND.accent : 'rgba(255,255,255,0.05)',
                  color: selected.includes(val.name) ? BRAND.dark : BRAND.white,
                  cursor: 'pointer',
                  fontWeight: selected.includes(val.name) ? 'bold' : 'normal',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                {val.name}
              </div>
            ))}
          </div>
          {selected.length === 7 && (
            <button 
              onClick={() => setStep('result')}
              style={{ width: '100%', marginTop: '40px', padding: '25px', backgroundColor: BRAND.accent, color: BRAND.dark, border: 'none', fontWeight: 'bold', fontSize: '20px', cursor: 'pointer' }}>
              VYGENEROVAŤ VÝSLEDOK
            </button>
          )}
        </div>
      )}

      {step === 'result' && (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '40px', border: `1px solid ${BRAND.accent}` }}>
          <h2 style={{ color: BRAND.accent, fontSize: '32px' }}>Váš profil je pripravený!</h2>
          <p style={{ margin: '20px 0' }}>Vybrali ste: {selected.join(', ')}</p>
          <div style={{ background: BRAND.accent, color: BRAND.dark, padding: '20px', marginTop: '20px' }}>
             Tu v ďalšom kroku prepojíme databázu pre tímové porovnanie.
          </div>
          <button onClick={() => setStep('intro')} style={{ marginTop: '30px', background: 'none', border: `1px solid ${BRAND.white}`, color: BRAND.white, padding: '10px 20px', cursor: 'pointer' }}>Spustiť znova</button>
        </div>
      )}
    </div>
  );
}
