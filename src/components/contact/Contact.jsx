import React from 'react'
import './contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iqdayxp', 'template_im57xxs', form.current, '2z7VfU8htXkISux9i')

    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAttachEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rick_piedade@hotmail.com</h5>
            <a href="mailto:rick_piedade@hotmail.com" target='_blank' rel="noreferrer">Send an Email</a>
          </article>
          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>ricardo.piedade</h5>
            <a href="https://m.me/rick.piedade" target='_blank' rel="noreferrer">Send via Messenger</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+447446549265</h5>
            <a href="https://api.whatsapp.com/send?phone=+447446549265" target='_blank' rel="noreferrer">Send via Whatsapp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts