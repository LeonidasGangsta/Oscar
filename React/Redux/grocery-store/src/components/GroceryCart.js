import './styles/css/GroceryList.css'

export default function ItemsTable({items, removeFromCart}) {

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
            {items.map(item =>
            <tbody key={item.id}>
                <tr>
                    <td>{item.name}</td>
                    <td>$ {item.price}</td>
                    <td>
                        <button onClick={() => removeFromCart(item.id)}>
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