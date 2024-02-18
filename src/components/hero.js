
import Slider from "react-slick";
import React from "react";
//import { baseUrl } from "./config";
import { list } from '../data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function hero() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    pauseOnHover: false,
  };
  return (
    <section className="slick-container" id="home">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image } = person;
          return <div key={id} >
            <img src={image} alt='abc'/>
          </div>
        })}
      </Slider>
    </section>
  )
}

export default hero;
//  <section className="hero" id="home">
//       <div className="hero-banner">
//         {/* <h1>continue exploring</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
//           explicabo debitis est autem dicta.
//         </p> */}
//         <a href="#tours" className="btn hero-btn">explore tours</a>
//       </div>
//     </section>