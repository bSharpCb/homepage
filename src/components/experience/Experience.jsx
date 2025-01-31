import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Technical Skills</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>JSX, EJS</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Bootstrap, SASS, Flex, Grid</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>React, Angular, jQuery</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Node</h4>
                  <small className='text-light'>NodeJS, PuppeteerJS</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Databases</h4>
                  <small className='text-light'>MySQL, PySpark, BigQuery</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Laravel</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>NumPy, Pandas, Flask</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Cloud Integration</h4>
                  <small className='text-light'>AWS, GCS, Azure</small>
                </div>
              </article>
            </div>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend">
            <h3>Other Skills</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Video Editing</h4>
                  <small className='text-light'>Premiere, AfterEffects</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Music Production</h4>
                  <small className='text-light'>FL Studio, Audition</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Software Tutorials</h4>
                  <small className='text-light'>Script writing, VO, editing</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Multi-instrumentalist</h4>
                  <small className='text-light'>Guitar, drums, bass, piano</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Adtech Veteran</h4>
                  <small className='text-light'>DSP/SSP, Retail Media, App</small>
                </div>
              </article>
              <article className='experience__details'>
                <CheckCircleOutlineOutlinedIcon className='experience__details-icon' />
                <div>
                  <h4>Tech Explainer</h4>
                  <small className='text-light'>Demos, documentation</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience