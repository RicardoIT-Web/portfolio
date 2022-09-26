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
    name: 'Anglia Ruskin University',
    desc: 'BA (Hons) Business Management',
  },
  {
    img: QUAL2,
    name: 'Association for Project Management',
    desc: 'APM-PMQ',
  },
  {
    img: QUAL3,
    name: 'Microsoft Project',
    desc: 'The Knowledge Academy',
  },
  {
    img: QUAL4,
    name: 'Prince2 Project Management - Foundation',
    desc: 'APMG International',
  },
  {
    img: QUAL5,
    name: 'ISO 9001:2015',
    desc: 'Bywater Excel',
  },
  {
    img: QUAL6,
    name: 'Initial Gliding Training',
    desc: 'Air Training Corps',
  },
]

const Qualification = () => {
  return (
    <section>
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
        {data.map(({img, name, desc}, index) => {
          return (
            <SwiperSlide key={index}className="swiper-qual">
              <div className="qual__cert">
                <img src={img} alt="University Diploma"/>
              </div>
              <h5 className="course__name">{name}</h5>
              <small className="cert__desc">
                {desc}
              </small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  );
}

export default Qualification