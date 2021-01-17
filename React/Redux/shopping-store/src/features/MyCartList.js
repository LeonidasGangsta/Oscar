import {useSelector, useDispatch} from 'react-redux';

export default function Products () {

    const myCart = useSelector(state => state)
    const dispatch = useDispatch();

    const removeFromCart = (index) => {
        dispatch({
            type: 'removeItem',
            payload: index
        })
    }

    if (!myCart.length) {
        return <h4>There are no items added to your cart...</h4>
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
                    {myCart.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => removeFromCart(index)}>Remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}