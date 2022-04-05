import React from 'react'

import footerImage from'./Assets/cta_tea_cup_desktop.jpg'
import './Footer.css'
export const Footer = () => {
  return (
    <footer className='fFooter'>
     <div className='fContainer'>
       <div className='fText'>
         <h2 className='fTitle'>SIGN UP</h2>
         <h3 className='fPara'>Get the best tea experience you’ll ever taste right at your door each month</h3>
         <button className='fButton'>Sign Up</button>
       </div>

      <img  className='fImage' src={footerImage} />
     </div>
    </footer>
  )
}
