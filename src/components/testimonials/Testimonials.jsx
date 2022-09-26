import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/c-soars.png'
import AVTR2 from '../../assets/diners3starrestaurant.png'
import AVTR3 from '../../assets/motorbikebuddy.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: AVTR1,
    name: "C-Soars Ltd",
    review:
      "What an amazing website. Loving the images and colour schemes. The site is now ready to go and start taking bookings and payments.",
  },
  {
    avatar: AVTR2,
    name: "diners 3star",
    review:
      "Fantastic work produced by Ricardo. Work was methodical and well planned. Ricardo produced exactly what we needed on time and on budget.",
  },
  {
    avatar: AVTR3,
    name: "MotorBikeBuddy",
    review:
      "Brilliant UI/UX works here. The colouring schemes are fantastic. I can't wait to see the final result.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Client Feedbacks</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      grabCursor={true}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
            return (
                <SwiperSlide key={index} className="testimonial">
                    <div className="client__avatar">
                        <img src={avatar} alt="Drone Survey Company feedback" />
                    </div>
                    <h5 className="client__name">{name}</h5>
                    <small className="client__review">
                        {review}
                    </small>
                </SwiperSlide>
                )
            })
        }
      </Swiper>
    </section>
  );
}

export default Testimonials