import React, { useState } from 'react';
import './index.css'
import Data from "./data.json"
import { Listitem } from './Listitem'

export function App(){
  const [people, setPeople] = useState(Data);
  return (
    <section className='project1'>
      <main className='container'>
      <h1>{people.length} birthdays today</h1>
      <div className='list'>
        <Listitem people={people}/>
      </div>
      <button className='birth-button' onClick={()=>setPeople([])}>remove all</button>
    </main>
    </section>
  )
}

