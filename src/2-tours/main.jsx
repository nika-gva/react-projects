import './index.css'
import { useState,React, useEffect } from 'react';
import { Loading } from './Loading';
import Data from './data.json'
import { Tour } from './Tour';


export function Page() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(Data);
  
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(Data);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours();
  }, [])
  const removeTour = (id) => {
    const newTour = tours.filter(data=> data.id !== id);
    setTours(newTour);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className='tours-container'>
      <div className="tours-content">
        <div className="title">Our Tours</div>
        <hr />
        {tours.length === 0? <button className='button' style={{marginTop: 30}} onClick={()=>setTours(Data)}>refresh</button>:''}
        <div className="tours">
          {
            tours.map(data=>{
              return <Tour key={data.id} {...data} removeTour={removeTour}></Tour>
            })
          }
        </div>
      </div>
    </div>
  );
}

