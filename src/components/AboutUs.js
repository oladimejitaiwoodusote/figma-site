import React from 'react'
import '../styles/AboutUs.css'

function AboutUs() {
  return (
    <div className='about_us'>
        <div className='about_us-left'>
          <h1>
            <span>About</span> Us
          </h1>
          <p>
            Started as a small plant nursery plant planet is now <b/>
            offering home delivery service of various plant
            varities in 35+ cities
          </p>
          <p>
            We work in the motto clean air with healthy plants.
            All the plants are grown with natural manure
          </p>
          <p>
            Hope to hear more from you
          </p>
          <div className='about_us-left-bottom'>
            <span>Team</span>
            <span>Plant Planet</span>
          </div>
        </div>
        <div className='about_us-right'>
          <img alt='img10' src="/images/img10.jpeg"/>
        </div>
        <div className='about_us-right'></div>
    </div>
  )
}

export default AboutUs