const cartReducer = (state, action) => {
    if (state === undefined) {
        return {
            items: []
        }
    }
    switch(action.type) {
        case 'addToCart': {
            const items = [...state.items, action.payload]
            return {
                ...state,
                items
            };
        }
        case 'removeFromCart': {
            const items = [...state.items];
            items.splice(action.payload,1)
            return {
                ...state,
                items
            }
        }
        default:
            return console.log('An action type was not specified to the reducer...')
    }
}

export default cartReducer;