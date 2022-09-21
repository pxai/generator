import { React, useState } from 'react';
import './App.css';
import generator from './generator';

function App() {
  const [result, setResult] = useState('');
  const [length, setLength] = useState(8);

  const generate = () => {
    setResult(generator(length));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generator</h1>
      </header>
      <main>
        <div>
          {
          [4, 8, 12, 15, 20].map((value, i) => {
            return <button key={i} onClick={() => setLength(value)}>{value}</button>
          })
          }
          <button onClick={generate}>Generate</button>
        </div>
        <div data-testid="settings">Length: {length}</div>
        <div data-testid="result">
          {result}
        </div>
      </main>
    </div>
  );
}

export default App;
