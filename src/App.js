import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() { 
   // Declare a new state variable, which we'll call "count"
const [count, setCount] = useState(0);
const hantdleClick =() => setCount(count+1);
  
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          牡蠣クリッカー
        </h1>
        <p>牡蠣の数{count}</p>
        <img onClick={
            ()=>{hantdleClick()}
          } src="/kaki.png" />


      </header>

    </div>
  );
}

export default App;