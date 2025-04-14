
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => setShowResults(true);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', backgroundColor: '#fff0f5', minHeight: '100vh' }}>
      <h1 style={{ color: '#d63384' }}>PattyBeauty AI</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleAnalyze} style={{ marginTop: 10 }}>Analisar e Sugerir Cores</button>
      {showResults && (
        <div style={{ marginTop: 20 }}>
          <h2>Sugestões de Cores</h2>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ backgroundColor: '#f87171', width: 50, height: 50, borderRadius: '50%' }}></div>
            <div style={{ backgroundColor: '#f9a8d4', width: 50, height: 50, borderRadius: '50%' }}></div>
            <div style={{ backgroundColor: '#d8b4fe', width: 50, height: 50, borderRadius: '50%' }}></div>
          </div>
          {image && <img src={image} alt="unha" style={{ marginTop: 20, maxWidth: '100%' }} />}
        </div>
      )}
    </div>
  );
}

export default App;
