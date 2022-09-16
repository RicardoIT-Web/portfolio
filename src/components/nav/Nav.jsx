import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {GiBookCover} from 'react-icons/gi'
import {FaHandshake} from 'react-icons/fa'
import {RiCellphoneFill} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href="#about"><FaHome /></a>
      <a href="#about"><FaUserGraduate /></a>
      <a href="#experience"><GiBookCover /></a>
      <a href="#services"><FaHandshake /></a>
      <a href="#contact"><RiCellphoneFill /></a>
    </nav>
  )
}

export default Nav