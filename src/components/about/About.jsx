import React from 'react'
import './about.css'
import myImage from '../../assets/headshot.jpeg'
import CTA from './CTA'

const About = () => {
  return (
    <section id='about'>
      
      <h2>Bradley Shaffer</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <p>
                    I'm a Full Stack Web Developer based in NYC, and 
                    I've spent the last 10 years working in Adtech, at companies like Criteo, Triplelift, and Experian. <br></br> <br></br>
                    Throughout this time, I've held various roles across the Engineer-Commercial spectrum; including development focused roles (Software Engineer) as well as client facing engineer roles (Solutions Engineer, TAM, etc)
            </p>
            <CTA/>
          </div>
      </div>
    </section>
  )
}

export default About