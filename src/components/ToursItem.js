const TourItem = (props) => {
  console.log(props);
  return (
    <div className='tours-item'>
      <img src={props.image} alt={props.name} className='tours-img' />
      <div className='tours-heading'>
        <h2 className='tours-name'>{props.name}</h2>
        <p className='tours-price'>${props.price}</p>
      </div>

      <p className='tours-info'>{props.info}</p>
    </div>
  );
};

export default TourItem;
