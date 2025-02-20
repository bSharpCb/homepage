import React, { useEffect, useState } from 'react'
import './about.css'
import headShot from '../../assets/headshot.jpeg'
import idleRemy from '../../assets/remy_stand.gif'
import wFwdRemy from '../../assets/remy_w_fwd.gif'
import wBackRemy from '../../assets/remy_w_back.gif'
import CTA from './CTA'

const About = () => {
  const [currentPicture, setPicture] = useState(wFwdRemy);
  const [spriteToggle, setSpriteToggle] = useState("");

  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(-1); // -1 for left, 1 for right


  useEffect(() => {
    if (direction !== 0) {
      const interval = setInterval(() => {
        setPosition((prev) => prev + direction * 5);
      }, 30);

      return () => clearInterval(interval);
    }
  }, [direction]);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setPicture(wBackRemy);
        setDirection(1);
      }
      if (event.key === 'ArrowRight') {
        setPicture(wFwdRemy);
        setDirection(-1);
      }
    }
    const handleKeyUp = (event) => {
      if (event.key === 'ArrowLeft') {
        setPicture(idleRemy);
        setDirection(0);
      }
      if (event.key === 'ArrowRight') {
        setPicture(idleRemy);
        setDirection(0);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {

      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <section id='about'>
      
      <h2>Bradley Shaffer</h2>

      <div className="container about__container">

          <div className="about__me" style={{ backgroundPositionX: position }}>
            <div className="about__me-image">

                <img src={currentPicture} alt="Me" className={spriteToggle} 
                onClick={()=>{
                  if(currentPicture === headShot){
                    setPicture(idleRemy);
                    setSpriteToggle("sprite");
                  } else {
                    setPicture(headShot);
                    setSpriteToggle("");
                  }
                  }}/>
            </div>
          </div>

          <div className="about__content">
            <p>
                    I'm a Full Stack Web Developer based in NYC, and 
                    I've spent the last 10 years working in Adtech, at companies like Criteo, Triplelift, and Experian. <br></br> <br></br>
                    Throughout this time, I've held various roles across the Engineer-Commercial spectrum; including development focused roles (Software Engineer) as well as client facing engineer roles (Solutions Engineer, TAM, etc) <br></br> <br></br>

                    Click the Resume PDF button below to download a copy of my resume, or use the menu at the bottom of the screen to navigate through my skills and personal projects. 
            </p>
            
            <CTA/>
          </div>
      </div>
    </section>
  )
}

export default About