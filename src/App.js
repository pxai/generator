import { React, useState } from 'react';
import './App.css';
import generator from './generator';

function App() {
  const [result, setResult] = useState('');
  const [length, setLength] = useState(8);
  const [customLength, setCustomLength] = useState('');
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);

  const generate = () => {
    setResult(generator(length, useNumbers, useSymbols));
  };

  const changeLength = (event) => {
    console.log('Event: ', event.target.value);
    const value = +event.target.value;
    setCustomLength(value);
    setLength(value);
  };

  const changeNumbers = () => {
    setUseNumbers(!useNumbers);
  };

  const changeSymbols = () => {
    setUseSymbols(!useSymbols);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generator</h1>
      </header>
      <main>
        <div>
          <input type="checkbox" id="numbers" checked={useNumbers}  onChange={changeNumbers}/>
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div>
          <input type="checkbox" id="symbols" checked={useSymbols}  onChange={changeSymbols}/>
          <label htmlFor="symbols">Symbols</label>
        </div>
        <div>
          {
          [4, 8, 12, 15, 20].map((value, i) => {
            return <button key={i} onClick={() => setLength(value)}>{value}</button>
          })
          }
          <input type="number"placeholder='Custom length' onChange={changeLength} value={customLength}/>
          <div>
            <button onClick={generate}>Generate</button>
          </div>
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
