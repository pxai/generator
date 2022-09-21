import { React, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import generator from './generator';

function App() {
  const [result, setResult] = useState('');

  const generate = () => {
    setResult(generator());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generator</h1>
      </header>
      <main>
        <div>
          <button onClick={generate}>Generate!</button>
        </div>
        <div role="result">
          {result}
        </div>
      </main>
    </div>
  );
}

export default App;
