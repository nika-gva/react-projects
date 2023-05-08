import { React,useState } from 'react'
import Data from './data'
import {FaQuoteRight,FaChevronLeft,FaChevronRight} from 'react-icons/fa'

export function Review() {
  const [index, setIndex] = useState(0);
  const {image,id,name,age} = Data[index];

  const nextPerson = () =>{
    setIndex((index)=>{
      if(index - 1 > 0){
        return index - 1
      }
      else{
        return Data.length - 1;
      }
    })
  }
  const prevPerson = () =>{
    setIndex((index)=>{
      if(index + 1 < Data.length){
        return index + 1
      }else{
        return 0;
      }
    })
  }
  const surprise = ()=>{
    setIndex(Math.floor(Math.random()*Data.length))
  }
  return (
    <article> 
      <div className='img-container'>
        <div className="img">
          <img src={image} alt="" />
          <span>
            <FaQuoteRight />
          </span>
        </div>
        <h4>{name}</h4>
        <p>{age}</p>
        <div className="button-container">
          <button className='left' onClick={nextPerson}>
            <FaChevronLeft />
          </button>
          <button className='right' onClick={prevPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='surprise' onClick={surprise}>surprise me</button>
      </div>
    </article>
  )
}

