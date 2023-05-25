import React from 'react';
import Logo from "./images/logo.png"
import './styles.css'
import { HiMenu } from 'react-icons/hi';
import { Reading } from './components/readings';
import { Poster } from './components/posters';
import { Food } from './components/food';
import { Place } from './components/places';
import { Gallery } from './components/gallery';


export function Website1() {
  return (
    <main className='body-website1'>
      <nav className='nav1'>
        <div className="nav1-logo"><img src={Logo} alt="" /></div>
        <HiMenu />
      </nav>
      <section className='wb1-section1'>
        <div className='wb1-inner'>
          <h1 className='main-header'>Discover The Best Tours in Svaneti To Fit  In All Budgets</h1>
          <div className='main-hr'></div>
          <p className='main-intro-p'>Experience a world of incredible travel, from adventure and adrenaline to beach parties and luxurious getaways.</p>
          <button className="main-button">learn more</button>
          <div className="website1-gallery">
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/mygallery-9740b.appspot.com/o/website1-images%2Fsection1%2Fkoruldi-lake-svaneti.jpg?alt=media&token=9d75181c-ced4-4e9a-8aa2-f0e32131f58b" alt="" />
              <img src="https://firebasestorage.googleapis.com/v0/b/mygallery-9740b.appspot.com/o/website1-images%2Fsection1%2Fenroute-to-ushguli-upper-svaneti-georgia.jpg?alt=media&token=1bfc4c65-c8cd-4d13-8e47-56e106458278" alt="" />
            </div>
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/mygallery-9740b.appspot.com/o/website1-images%2Fsection1%2Fmaxresdefault.jpg?alt=media&token=ee6a1690-116f-44dc-b544-abd8b4fea728" alt="" />
              <img src="https://firebasestorage.googleapis.com/v0/b/mygallery-9740b.appspot.com/o/website1-images%2Fsection1%2FFwr2WnwWwAIgO83.png?alt=media&token=08d06d3f-90a4-4754-9cc1-12ad65237c26" alt="image" />
            </div>
          </div>
        </div>
      </section>
      <Reading />
      <Poster />
      <Food />
      <Place />
      <Gallery />
      <section className='wb1-section7'>
        <div className='wb1-s7-banner'>
          <h1>Enquire, Book & Experience</h1>
          <div></div>
          <p className='main-intro-p'>People who feel it knows it better, so decide to Book now with Mole Boy Travel & Safe Guide Tours and make memories that you will treasure forever!</p>
          <button className='main-intro-p'>Book now</button>
        </div>
      </section>
    </main>
  )
}
