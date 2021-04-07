import logo from './logo.svg';
import './App.css';
import Parent from './component/parent.component';
import User from './typescipt/user';
// import classes from '*.module.css';
const increaseNum = () => {
  console.log("You clicked");
}

function App() {
  return (
    <div className="App">
      <button onClick={() => increaseNum()}>Click me</button>
      <Parent />
      <User />
      {/* <header className="App-header">
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
      </header>  */}
    </div>
  );
}

export default App;
