import GroceryData from '../data/GroceryItems';
import './styles/css/GroceryList.css'

//Redux Imports
import {useDispatch} from 'react-redux'
import {addToCart} from '../actions/storeActions'

export default function ItemsTable() {

    const dispatch = useDispatch();

    return (
    <table>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        {GroceryData.map( (item, index) =>
        <tbody key={index}>
            <tr>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>
                    <button onClick={() => dispatch(addToCart(item))}>
                        Add to cart
                    </button>
                </td>
            </tr>
        </tbody>
        )}
    </table>
  )
}