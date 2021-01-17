import products from '../data/GroceryItems';
import {useDispatch} from 'react-redux';

const ListTable = () => {

    const dispatch = useDispatch();

    const addToCart = (product) => {
        return {
            type: 'addItem',
            payload: product
        }
    }

    return (
        <div className='ProductsContainer'>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListTable;