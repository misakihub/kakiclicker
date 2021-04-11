import logo from './logo.svg';
import './App.css';

function App() {
  const hantdleClick =()=>{console.log("!!!!")}
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          牡蠣クリッカー
        </p>
        <img onClick={
            ()=>{hantdleClick()}
          } src="/kaki.png" />



      </header>

    </div>
  );
}

export default App;
