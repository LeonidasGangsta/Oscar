import { useSelector } from 'react-redux';
import './styles/css/Card.css'
import commentIcon from '../Icons/comment-icon.svg';
import arrowUp from '../Icons/arrow-up.svg';
import arrowDown from '../Icons/arrow-down.svg';

const Card = () => {

    const card = useSelector(state => state[0])

    return (
        <div className='cardContainer'>
            <div className='cardTitle'>
                <h4>{card.title}</h4>
            </div>
            <div className='cardBody'>
                <div className='arrows'>
                    <img src={arrowUp} alt=''/>
                    <div className='count'>
                        <p>350k</p>
                    </div>
                    <img src={arrowDown} alt=''/>
                </div>
                <div className='imgContainer'>
                    <img src={card.img} alt=''/>
                </div>
            </div>
            <hr/>
            <div className='cardInteractions'>
                <div className='author'>
                    <p>Posted by</p>
                    <p style={{color: '#55C0FD'}}>{card.author}</p>
                </div>
                <p>{card.old} hours ago</p>
                <div className='comments'>
                    <img src={commentIcon} alt=''/>
                    <p>{card.comments} comments</p>
                </div>
            </div>
        </div>
    )
}

export default Card;