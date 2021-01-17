import './App.css';
import GroceryList from './components/GroceryList';
import GroceryCart from './components/GroceryCart'
import {useState} from 'react'

function App() {

  const [cart, setCart] = useState([])
  // const [total, setTotal] = useState(0)
  
  // const cartTotal = () => {
  //   let accu = 0;
  //   cart.forEach(item => accu += item.price)
  //   setTotal(accu)
  // }

  const addToCart = (item) => {

    if(cart.filter(product => product.id === item.id).length) {
      return alert('The product was already added to your cart in the past...')
    }

    //Receives an object called item and add it to the list
    setCart([...cart, item])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id))
  }
  
  return (
    <div className='App'>
      <h1>Hi there!</h1>
      <div className='TablesContainers'>
        <GroceryList addToCart={addToCart}/>
        <GroceryCart items={cart} removeFromCart={removeFromCart}/>
      </div>
    </div>
  );
}

export default App;
