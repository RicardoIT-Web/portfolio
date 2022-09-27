import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './qualification.css'
import QUAL1 from '../../assets/bacert.png'
import QUAL2 from '../../assets/pmq.png'
import QUAL3 from '../../assets/msproject.png'
import QUAL4 from '../../assets/prince2.png'
import QUAL5 from '../../assets/iso_9001_2015.png'
import QUAL6 from '../../assets/wings.png'

// Import Swiper styles
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

const data = [
  {
    img: QUAL1,
    desc: 'BA (Hons) Business Management',
  },
  {
    img: QUAL2,
    desc: 'APM-Project Management Qualification',
  },
  {
    img: QUAL3,
    desc: 'Microsoft Project',
  },
  {
    img: QUAL4,
    desc: 'Prince2 Project Management - Foundation',
  },
  {
    img: QUAL5,
    desc: 'ISO 9001:2015',
  },
  {
    img: QUAL6,
    desc: 'Initial Gliding Training',
  },
]

const Qualification = () => {
  return (
    <section id="qualifications">
      <h5>Certifications</h5>
      <h2>Achievements</h2>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 0,
          shadowScale: 0.00,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
        >
          {data.map(({img, desc}, index) => {
            return (
              <SwiperSlide key={index}className="swiper-qual">
                <small className="cert__desc">
                  {desc}
                </small>
                <div className="qual__cert">
                  <img src={img} download alt="University Diploma"/>
                </div>
              </SwiperSlide>
            )
          })
          }
      </Swiper>
    </section>
  );
}

export default Qualification