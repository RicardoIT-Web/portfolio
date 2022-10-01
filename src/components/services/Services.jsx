import React from 'react'
import './services.css'
import{BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <br />
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Design of digital products and services.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Stakeholder research to understand client needs.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Writing clear specifications and guidelines.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Creating content development strategy.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Developing mockups for development and design teams.</p>
              </li>
            </ul>
        </article>
        {/* end of ui/ux */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Write well-designed, testable, efficient code using web development best practices.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Create basic website layouts and user interfaces with HTML and CSS.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Integrate data from various back-end web services and databases.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Work with stakeholders, gather and refine specifications and requirements.</p>
              </li>
            </ul>
        </article>
        {/* end of web development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Search Engine Optimization</h3>
          </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Optimizing landing pages for search engine optimization.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Performing ongoing keyword discovery, expansion and optimization.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Researching and implementing content recommendations.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Work with editorial and marketing teams to drive SEO.</p>
              </li>
            </ul>
        </article>
        {/* end of content creation */}
        <article className='service'>
          <div className='service__head'>
            <h3>Project Management</h3>
          </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Meeting all management levels to identify project requirements.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Identifying and assigning project tasks based on the skill sets.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Monitoring project performance to ensure timely delivery.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Compiling and submitting project status reports.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Working effectively with relevant stakeholders.</p>
              </li>
            </ul>
        </article>
        {/* end of content creation */}
      </div>
    </section>
  )
}

export default Services