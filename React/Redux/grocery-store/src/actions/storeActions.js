export const addToCart = (product) => {
    return {
        type: 'addToCart',
        payload: product
    }
}

export const removeFromCart = (productId) => {
    return {
        type: 'removeFromCart',
        payload: productId
    }
}