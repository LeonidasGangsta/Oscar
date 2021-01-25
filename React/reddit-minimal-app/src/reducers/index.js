import colores from '../Icons/IMG_1435.jpeg';
import cerros from '../Icons/IMG_7369.jpg';

const initialState = [
    {
        title: 'Combinando colores :P',
        img: colores,
        comments: 34,
        old: 4,
        author: 'Oscar'
    },
    {
        title: 'Posando a mil! cerros de fondo',
        img: cerros,
        comments: 68,
        old: 6,
        author: 'Aleja'
    }
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;