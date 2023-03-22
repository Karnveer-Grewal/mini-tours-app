import { useState, useEffect } from 'react';
import ToursItem from './ToursItem';
import axios from 'axios';

const ToursList = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTours = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://course-api.com/react-tours-project'
        );
        setLoading(false);
        setTours(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getTours();
  }, []);

  const toursList = tours.map((tour) => <ToursItem key={tour.id} {...tour} />);

  return (
    <main className='tours-container'>
      <h1 className='tours-title'>Our Tours</h1>
      <div className='tours-list'>
        {loading ? <h3>Loading...</h3> : toursList}
      </div>
    </main>
  );
};

export default ToursList;
