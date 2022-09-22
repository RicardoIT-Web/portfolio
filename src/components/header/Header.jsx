import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me9.png'
import HeaderSocials from './HeaderSocials'
import './header.css'


const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ricardo Piedade</h1>
        <h5 className="text-light">
          Fullstack Software Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header