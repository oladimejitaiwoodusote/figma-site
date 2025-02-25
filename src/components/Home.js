import React from 'react'
import '../styles/Home.css'
import { FaLongArrowAltRight } from "react-icons/fa";


function Home() {
  
  return (
    <div className='home'>
      <div className='home_page-1'>    
        <div className='home_page-1-left'>
          <h1>
            Customize your place with the best possible plant solutions 
          </h1>
          <p>
            Recommendations that are healthy and match your aesthetic
          </p>
          <button type='button' className='home_page-1-button'>
            Know More
          </button>
        </div>
        <div className='home_page-1-right'>
          <div className='home_page-1-right-image-column'>
            <img alt='img1' src="/images/img1.jpeg"/>
            <img alt='img2' src="/images/img2.jpeg"/>
          </div>
          <div className='home_page-1-right-image-column'>
            <img alt='img3' src="/images/img3.jpeg"/>
            <img alt='img4' src="/images/img4.jpeg"/>
          </div>
        </div>
      </div>
      <div className='home_green-bar'></div>
      <div className='home_page-2'>  
        <div className='home_page-2-Header'>
          <h1>
            Top Picks
          </h1>
          <p>
            Loved by our customers from 35+ cities
          </p>
        </div>
        <div className='home_page-2-ImageRow-Scroll'>
          <div className='home_page-2-ImageRow'>
            <img alt='img5' src="/images/img5.jpeg"/>
            <img alt='img6' src="/images/img6.jpeg"/>
            <img alt='img7' src="/images/img7.jpeg"/>
            <img alt='img8' src="/images/img8.jpeg"/>
            <img alt='img9' src="/images/img9.jpeg"/>
          </div>
        </div>        
        <div className='home_page-2-ImageRowDirect'>
          <div className='home_scroll-arrow'>
            <FaLongArrowAltRight/>
          </div>
          <span className='home_scroll-text'>Scroll on pictures for more</span>
        </div>
      </div>
      <div className='home_green-bar'></div>
    </div>
  )
}

export default Home