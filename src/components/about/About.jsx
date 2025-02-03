import React, { useState } from 'react'
import './about.css'
import headShot from '../../assets/headshot.jpeg'
import myImage from '../../assets/remy_stand.gif'
import wFwdRemy from '../../assets/remy_w_fwd.gif'
import wBackRemy from '../../assets/remy_w_back.gif'
import CTA from './CTA'

const About = () => {
  const [currentPicture, setPicture] = useState(wFwdRemy);
  const [spriteToggle, setSpriteToggle] = useState("");
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      setPicture(wBackRemy);
    }
    if (event.key === 'ArrowRight') {
      setPicture(wFwdRemy);
    }
  }
  const handleKeyUp = (event) => {
    if (event.key === 'ArrowLeft') {
      setPicture(myImage);
    }
    if (event.key === 'ArrowRight') {
      setPicture(myImage);
    }
  }

  return (
    <section id='about'>
      
      <h2>Bradley Shaffer</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={currentPicture} alt="Me" className={spriteToggle} 
                onClick={()=>{
                  if(currentPicture === headShot){
                    setPicture(myImage);
                    setSpriteToggle("sprite");
                  } else {
                    setPicture(headShot);
                    setSpriteToggle("");
                  }
                  }}/>
                <input type="text" value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onKeyUp={handleKeyUp}
                />
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