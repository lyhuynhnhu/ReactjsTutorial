import logo from './logo.svg';
import './App.css';
// import classes from '*.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      {/* <p>Number: {number} - Previous state: {previousState.current}</p>
      <button onClick={() => increaseNum()}>Click</button>
  <button>Click hre</button>*/}
    </div>
  );
}

export default App;
