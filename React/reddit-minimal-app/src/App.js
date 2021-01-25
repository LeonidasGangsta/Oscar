import './App.css';
import Nav from './components/Nav'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <div>
        <Card/>
      </div>
    </div>
  );
}

export default App;
