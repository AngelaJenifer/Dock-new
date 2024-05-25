import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../../Styles/HeroSlider.css'

const HeroSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 5000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
      };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider_item slider_item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className=" mb-4 hero-text">Book Now and Save Time</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/login">Book Now</Link>
            </button>
            
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className=" mb-4 hero-text">Book Now and Save Time</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/login">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h1 className=" mb-4 hero-text">Book Now and Save Time</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/login">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  )
}

export default HeroSlider
