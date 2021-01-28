import Nav from './components/Nav'
import Card from './components/Card'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route path='/'>
        <div className="App">
          <header>
            <Nav/>
          </header>
          <div>
            <Card/>
          </div>
        </div>
      </Route>
    </Router>
  );
}

export default App;
