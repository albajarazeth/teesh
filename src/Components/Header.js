import React from 'react';
import {useSatate} from 'react';


import mainImage from'./Assets/hero_tea_cup.jpg'
import './Header.css'

export const Header = () => {

  
  return (
   <header className='hHeader'>
      <div className='hContainer'>
          <div className='hText'>
            <h1 className='hTitle'>Fulfill your most peculiar wishes.</h1>
            <h3 className='hPara'>From a common black tea to the rarest Da Hong Pao, each of them delivered right at your door.</h3>
            <button className='hButton' >Learn More</button>
          </div>

          {<div>
             <img className='hImage' src={mainImage} />
          </div>}
      </div>
   </header>
  )
}


