import { useSelector } from 'react-redux';
import './styles/css/Card.css'

const Card = () => {

    const card = useSelector(state => state[0])

    return (
        <div className='cardContainer'>
            <div className='cardTitle'>
                <h3>{card.title}</h3>
            </div>
            <div className='imgContainer'>
                <img src={card.img} alt=''/>
            </div>
            <div className='cardInteractions'>
                <p>Posted by {card.author}</p>
                <p>{card.old} hours ago</p>
                <p>{card.comments} comments</p>
            </div>
        </div>
    )
}

export default Card;