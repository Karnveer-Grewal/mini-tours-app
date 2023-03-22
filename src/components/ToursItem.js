import { useState } from 'react';

const TourItem = (props) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='tours-item'>
      <img src={props.image} alt={props.name} className='tours-img' />
      <div className='tours-heading'>
        <h2 className='tours-name'>{props.name}</h2>
        <p className='tours-price'>${props.price}</p>
      </div>

      <p className='tours-info'>
        {readMore ? props.info : `${props.info.substring(0, 200)}...`}
        <button
          className='tours-read-more'
          onClick={() => setReadMore((prevReadMore) => !prevReadMore)}
        >
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </p>
      <button
        className='tours-button'
        onClick={() => props.deleteTour(props.id)}
      >
        Not Interested
      </button>
    </div>
  );
};

export default TourItem;
