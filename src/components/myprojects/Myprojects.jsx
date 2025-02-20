import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/jgg.png'
import IMG2 from '../../assets/lyrinks.png'
import IMG3 from '../../assets/jSynth.png'
import IMG4 from '../../assets/jambox.png'


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
            <details>
              <summary>
              Daily Jeopardy! game boards generated using clues/categories from episodes of the show. 
              </summary>
              <br></br>
              Clues are scraped from <a href="http://www.j-archive.com" rel="nofollow">J!-Archive</a> using a Puppeteer script.
            </details>

            
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
            <details>
              <summary>
                Creative writing tool for browsing shared words between popular idioms 
              </summary> <br></br>
                e.g. <i>"hair of the dog"</i> and <i>"splitting hairs"</i> becomes <b><i>splitting hairs of the dog</i></b> <br></br><br></br>
            </details>
            <div className="portfolio__item-cta">
              <a href="https://github.com/bSharpCb/lyrinks" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://www.lyrinks.com" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>B# Midi Transcriber</h3>
            <small className='text-light'>ABC.js | Web Audio & MIDI API | ExpressJS</small>
            <details>
              <summary>
                Plug in your MIDI keyboard and watch as your inputs are transcribed to sheet music. 
              </summary><br></br>
              Includes some basic synth customization options, and MIDI inputs are reflected in the keyboard UI. ABC notation can be editted manually using the text windows. 
            </details>
            <div className="portfolio__item-cta">
              <a href="https://github.com/bSharpCb/midikeys" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://bsharpcb.github.io/midikeys/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>jamBox / BadJams</h3>
            <small className='text-light'>React + Vite | MUI | Typescript | Web Audio & MIDI API </small>
            <details>
              <summary>
                Use the drum module to set up a backing track, and play sick synth solos over it using your MIDI controller.
              </summary>
            </details>
            <div className="portfolio__item-cta">
              <a href="https://github.com/bSharpCb/jambox" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://badjams.com" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects