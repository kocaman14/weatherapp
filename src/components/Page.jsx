import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icons from './Icons';

const Page = () => {
  const { weatAr, loading, error } = useSelector((state) => state.weather);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
    <div>
      Error: {error}
      <h3>Plase enter Country</h3>
    
    </div>
    )
  }
  return (
    <div>
      <ul>
        {weatAr && weatAr.current ? 
          <>
            <li>Temperature: {weatAr.current.temperature} °C</li>
            <li>Summary: {weatAr.current.summary}</li>
            <li>Wind Speed: {weatAr.current.wind.speed} km/h</li>
            <li><Icons /></li>
          </>
         : (
          <li>No weather</li>
        )}
      </ul>
    </div>
  );
};

export default Page;
