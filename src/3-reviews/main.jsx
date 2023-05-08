import React from 'react'
import {Review} from "./review.jsx"
import './index.css'


export function App() {
  return (
    <main className='review-container'>
      <section className="main-container">
        <h1>reviews</h1>
        <hr />
        <Review />

      </section>
    </main>
  )
}

