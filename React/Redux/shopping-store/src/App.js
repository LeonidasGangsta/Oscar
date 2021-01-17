import './App.css';
import GroceryItems from './features/ProductsList'
import MyCartList from './features/MyCartList'

function App() {
  return (
    <div className="App">
      <h1>Hi there!</h1>
      <GroceryItems/>
      <MyCartList/>
    </div>
  );
}

export default App;
