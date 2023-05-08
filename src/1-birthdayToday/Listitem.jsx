import React from 'react'

export function Listitem({people}) {
  return (
        <>
            {people.map((data,index)=>{
                const {id,name,age,image} = data;
                return (
                    <div className='item' key={index}>
                        <img src={image} alt={name} />
                        <h5>{name}</h5>
                        <h6>{age} years</h6>
                    </div>
                )
            })}
        </>
    )
}
