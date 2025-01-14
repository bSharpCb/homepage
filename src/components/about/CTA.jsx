import React from 'react'
import CV from '../../assets/BHS_Resume_2025.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} download className='btn'>Resume PDF</a>
    </div>
  )
}

export default CTA