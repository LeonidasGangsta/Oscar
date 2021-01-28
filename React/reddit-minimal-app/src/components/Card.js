import { useSelector } from 'react-redux';

const Card = () => {

    const cards = useSelector(state => state)

    return (
        <div className='flex flex-wrap justify-around font-sans'>
            {cards.map((card, id) => (
                <div className='container max-w-sm shadow-lg mx-auto my-8 hover:shadow-xl' key={id}>
                    <img src={card.img} alt='' className='w-full'/>
                    <div className='px-5 py-4'>
                        <p className='font-bold font-sans text-gray-700 text-xl sm:text-md capitalize'>{card.title} </p>
                        <p
                            className='py-1 mt-3 font-semibold text-base text-gray-700 sm:text-sm'>
                            Uploaded by {card.author}
                        </p>
                        {card.tags.map((tag, id) => (
                            <span
                                key={id}
                                className='inline-block mr-2 bg-gray-200 border border-gray-800 border-dashed
                                rounded-full hover:bg-gray-300 px-3 py-1 mt-4 font-semibold text-gray-800 text-md sm:text-sm'>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;