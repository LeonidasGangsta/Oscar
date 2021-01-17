import './styles/css/GroceryList.css'

//Redux imports
import {useDispatch, useSelector} from 'react-redux';
import { removeFromCart } from '../actions/storeActions';

export default function ItemsTable() {

    const items = useSelector(state => state.items)
    const dispatch = useDispatch();

    if (!items.length) {
        return <h4>There are no items on your cart!</h4>
    }
    
    const total = items.reduce((accumulator, current) => accumulator + current.price, 0)

    return (
        <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {items.map( (item, id) =>
            <tbody key={id}>
                <tr>
                    <td>{item.name}</td>
                    <td>$ {item.price}</td>
                    <td>
                        <button onClick={() => dispatch(removeFromCart(id))}>
                            Remove
                        </button>
                    </td>
                </tr>
            </tbody>
            )}
            <tfoot>
                <tr>
                    <th>Total:</th>
                    <th>$ {total} </th>
                </tr>
            </tfoot>
        </table>
  )
}