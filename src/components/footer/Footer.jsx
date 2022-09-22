import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#header" className='footer__logo'>Ricardo</a>

      <ul className='links'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://github.com/RicardoIT-Web" target="_blank" rel='noreferrer'><FaGithub /></a>
      <a href="https://www.linkedin.com/in/rpiedade/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
      <a href="https://www.instagram.com/rick.piedade/" target="_blank" rel='noreferrer'><AiFillInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RicardoPiedade</small>
      </div>
    </footer>
  )
}

export default Footer