import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {GiBookCover} from 'react-icons/gi'
import {FaUserGraduate} from 'react-icons/fa'
import {GrCertificate} from 'react-icons/gr'
import {FaHandshake} from 'react-icons/fa'
import {HiFolderOpen} from 'react-icons/hi'
import {FaCommentDots} from 'react-icons/fa'
import {RiCellphoneFill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="# " onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GiBookCover /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaUserGraduate /></a>
      <a href="#experience" onClick={() => setActiveNav('#qualifications')} className={activeNav === '#qualifications' ? 'active' : ''}><GrCertificate /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaHandshake /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><HiFolderOpen /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><FaCommentDots /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiCellphoneFill /></a>
    </nav>
  )
}

export default Nav