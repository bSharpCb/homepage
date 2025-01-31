import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>bSharpCb</a>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/bradley-shaffer-9a8b5772/"><BsLinkedin/></a>
          <a href="https://github.com/bSharpCb"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Bradley Shaffer. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer