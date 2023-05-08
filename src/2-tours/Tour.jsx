import React from 'react'
import { useState } from 'react';

export function Tour({ id, image, description, price, title, removeTour }) {
  const [active, setActive] = useState(false);
  return (
    <div className="tour" key={id}>
      <img src={image} alt="" />
      <div className="info">
        <div className="tourInfo">
          <h4>{title}</h4>
          <p>{price}</p>
        </div>
        <p>{
          active ? description : `${description.substring(0, 200)}`
        }
          <button className='show' onClick={() => setActive(!active)}>{active ? " Show less" : " Show more"}</button></p>
      </div>
      <button className='button' onClick={() => removeTour(id)}>remove tour</button>
    </div>

  )
}

