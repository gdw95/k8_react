import logo from './logo.svg';
import './App.css';
import MyClock from './02/MyClock';
// import Hello from './01/Hello';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Hello /> */}
        {<MyClock />}
      </header>
    </div>
  );
}

export default App;
