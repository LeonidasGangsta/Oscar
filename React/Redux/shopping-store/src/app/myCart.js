const myCart = (state = [], action) => {
    switch (action.type) {
        case 'addItem': {
            return [...state, action.payload];
        }
        case 'removeItem': {
            const cart = [...state]
            cart.splice(action.payload, 1)
            return cart
        }
        default:
            return state; 
    }
}

export default myCart;