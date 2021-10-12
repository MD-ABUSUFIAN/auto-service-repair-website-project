import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Mechanical Engineer</h1>
      <p>Mechanical engineering is an engineering branch that combines engineering physics and mathematics principles with materials science.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Service Engineer</h1>
      <p>Service engineering, also called service-oriented software engineering, is a software engineering process.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1>Software Engineer</h1>
      <p>Software engineering is a detailed study of engineering to the design, development and maintenance of software.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            
        </>
    );
};

export default Banner;