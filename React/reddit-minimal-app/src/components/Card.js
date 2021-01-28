import { useSelector } from 'react-redux';
import commentIcon from '../Icons/comment-icon.svg';
import arrowUp from '../Icons/arrow-up.svg';
import arrowDown from '../Icons/arrow-down.svg';

const Card = () => {

    const card = useSelector(state => state[0])

    return (
        <div className='max-w-2xl mx-auto py-6 sm:px-6 lg:px-8 bg-white overflow-hidden shadow sm:rounded-lg'>
            <div className=''>
                <h4>{card.title}</h4>
            </div>
            <div className=''>
                <div className=''>
                    <img src={arrowUp} alt=''/>
                    <div className=''>
                        <p>350k</p>
                    </div>
                    <img src={arrowDown} alt=''/>
                </div>
                <div className=''>
                    <img src={card.img} alt=''/>
                </div>
            </div>
            <hr/>
            <div className=''>
                <div className=''>
                    <p>Posted by</p>
                    <p>{card.author}</p>
                </div>
                <p>{card.old} hours ago</p>
                <div className=''>
                    <img src={commentIcon} alt=''/>
                    <p>{card.comments} comments</p>
                </div>
            </div>
        </div>
    )
}

export default Card;