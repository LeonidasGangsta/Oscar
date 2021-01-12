export const increment = (number) => {
    return {
        type: 'Increment',
        payload: number
    }
}

export const decrement = (number) => {
    return {
        type: 'Decrement',
        payload: number
    }
}

export const signIn = () => {
    return {
        type: 'Sign_in'
    }
}