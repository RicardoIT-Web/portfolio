import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/motorbikebuddy.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Motorbikebuddy.com" />
          </div>
          <h3>Portfolio Project 1</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RicardoIT-Web/motorbikebuddy.com" className='btn' target="_blank" rel="noreferrer">Github Repo</a>
            <a href="https://ricardoit-web.github.io/motorbikebuddy.com/" className='btn btn-primary' target="_blank" rel="noreferrer">Deployed Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Motorbikebuddy.com" />
          </div>
          <h3>Portfolio Project 1</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RicardoIT-Web/motorbikebuddy.com" className='btn' target="_blank" rel="noreferrer">Github Repo</a>
            <a href="https://ricardoit-web.github.io/motorbikebuddy.com/" className='btn btn-primary' target="_blank" rel="noreferrer">Deployed Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Motorbikebuddy.com" />
          </div>
          <h3>Portfolio Project 1</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RicardoIT-Web/motorbikebuddy.com" className='btn' target="_blank" rel="noreferrer">Github Repo</a>
            <a href="https://ricardoit-web.github.io/motorbikebuddy.com/" className='btn btn-primary' target="_blank" rel="noreferrer">Deployed Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Motorbikebuddy.com" />
          </div>
          <h3>Portfolio Project 1</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RicardoIT-Web/motorbikebuddy.com" className='btn' target="_blank" rel="noreferrer">Github Repo</a>
            <a href="https://ricardoit-web.github.io/motorbikebuddy.com/" className='btn btn-primary' target="_blank" rel="noreferrer">Deployed Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Motorbikebuddy.com" />
          </div>
          <h3>Portfolio Project 1</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RicardoIT-Web/motorbikebuddy.com" className='btn' target="_blank" rel="noreferrer">Github Repo</a>
            <a href="https://ricardoit-web.github.io/motorbikebuddy.com/" className='btn btn-primary' target="_blank" rel="noreferrer">Deployed Site</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio