import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/motorbikebuddy.png'
import IMG2 from '../../assets/rock-paper-scissors.png'
import IMG3 from '../../assets/love-running-members-log.png'
import IMG4 from '../../assets/diners3starrestaurant.png'
import IMG5 from '../../assets/c-soars.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MotorbikeBuddy.com',
    github: 'https://github.com/RicardoIT-Web/motorbikebuddy.com',
    demo: 'https://ricardoit-web.github.io/motorbikebuddy.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Rock-Paper-Scissors Game',
    github: 'https://github.com/RicardoIT-Web/rock-scissors-paper',
    demo: 'https://ricardoit-web.github.io/rock-scissors-paper/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Love Running Members Log',
    github: 'https://github.com/RicardoIT-Web/Love_Running_Members_log',
    demo: 'https://love-running-members-log.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Diners 3starRestaurant',
    github: 'https://github.com/RicardoIT-Web/diners-3star-restaurant',
    demo: 'https://diners-3star-restaurant.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'C-Soars ltd - Drone Survey Company',
    github: 'https://github.com/RicardoIT-Web/c-soars_ltd',
    demo: 'https://c-soars.herokuapp.com/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target="_blank" rel="noreferrer">Github Repo</a>
              <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Deployed Site</a>
            </div>
            </article>
          )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio