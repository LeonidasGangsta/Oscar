import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signIn} from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.logged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hi there!</h1>
      <p>The current counter is {counter} </p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(10))}>-</button>

      <h1>Log {!logged ? 'in' : 'out'}</h1>
      <p>Click on the button to log {!logged ? 'in' : 'out'}.</p>
      <button onClick={() => dispatch(signIn())}>{!logged ? 'Log in' : 'Log out'} </button>

      {logged ? <h3>Sensitive Information</h3> : <h3>You are not allowed to see this Information</h3>}
    </div>
  );
}

export default App;
