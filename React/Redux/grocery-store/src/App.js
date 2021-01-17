import './App.css';
import GroceryList from './components/GroceryList';
import GroceryCart from './components/GroceryCart'

function App() {  
  return (
    <div className='App'>
      <h1>Hi there!</h1>
      <div className='TablesContainers'>
        <GroceryList/>
        <GroceryCart/>
      </div>
    </div>
  );
}

export default App;
