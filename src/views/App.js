import logo from './logo.svg';
import './App.scss';
import MyComponet from './Example/MyComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit reactjs with MrBlowJob
        </p>
        <MyComponet />

      </header>
    </div>
  );
}

export default App;
