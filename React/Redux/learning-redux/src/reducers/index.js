import {combineReducers} from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';

const reducersPack = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})

export default reducersPack;