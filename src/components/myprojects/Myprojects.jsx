import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/jgg.png'
import IMG2 from '../../assets/lyrinks.png'
import IMG3 from '../../assets/jSynth.png'


const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Jeopardy.gg</h3>
            <small className='text-light'>ExpressJS | SASS | Puppeteer | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/bSharpCb/eabj-gaps" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://www.jeopardy.gg" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a> 
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Lyrinks</h3>
            <small className='text-light'>ExpressJS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/bSharpCb/lyrinks" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://www.lyrinks.com" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>B# Midi Suite</h3>
            <small className='text-light'>ABC.js | Web Audio API | Web Midi API | ExpressJS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/bSharpCb/midikeys" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://bsharpcb.github.io/midikeys/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects