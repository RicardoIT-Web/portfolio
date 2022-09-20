import React from 'react'
import './about.css'
import ME from '../../assets/me5.png'
import {GiDiploma} from 'react-icons/gi'
import {BsPeopleFill} from 'react-icons/bs'
import {FaProjectDiagram} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h5 className='section_top'>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiDiploma className="about__icon" />
              <h5>Experience</h5>
              <small>10 + Years Experience</small>
            </article>
            <article className="about__card">
              <BsPeopleFill className="about__icon" />
              <h5>Clients</h5>
              <small>200+</small>
            </article>
            <article className="about__card">
              <FaProjectDiagram className="about__icon" />
              <h5>Projects</h5>
              <small>My Projects</small>
            </article>
          </div>
          <p>
            APM certified Project Manager with 10 years of experience in Project
            Management, during this time I have completed training on ISO
            9001:2015, Lean Six Sigma & CDM Regulations. I have now completed my
            Diploma in Full Stack Software Development with Code Institute,
            accredited by Edinburgh Napier University. Experience building responsive
            websites using HTML, CSS, JavaScript, Python, Django, React, GitHub /
            Gitpod, AWS – S3.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About