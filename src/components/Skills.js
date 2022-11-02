import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/react.svg'
import meter2 from '../assets/img/ruby.svg'
import meter3 from '../assets/img/javascript (1).svg'
import meter4 from '../assets/img/sql.svg'
import meter5 from '../assets/img/rails.svg'
import meter6 from '../assets/img/python.svg'
import meter7 from '../assets/img/css3.svg'

import colorSharp from '../assets/img/color-sharp.png'


export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
<section className='skill' id='skills'>
    <Container>
        <Row>
            <Col>
                <div className='skill-bx'>
                    <h2>Skills</h2>
                    <p>well versed in many languages ranging from front-end to back-end Development</p>
                    <Carousel responsive={responsive} infinite={true} className = 'skill-slider'>
                        <div className='item'>
                            <img src={meter1} alt="img" />
                            <h5>react</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt="img" />
                            <h5>ruby</h5>
                        </div>
                        <div className='item'>
                            <img src={meter3} alt="img" />
                            <h5>javascript</h5>
                        </div>
                        <div className='item'>
                            <img src={meter4} alt="img" />
                            <h5> sql</h5>
                        </div>
                        <div className='item'>
                            <img src={meter5} alt="img" />
                            <h5> rails</h5>
                        </div>
                        <div className='item'>
                            <img src={meter6} alt="img" />
                            <h5> python</h5>
                        </div>
                        <div className='item'>
                            <img src={meter7} alt="img" />
                            <h5> css</h5>
                        </div>
                    </Carousel>
                </div>
            </Col>
        </Row>
    </Container>
    <img className='background-image-left' src={colorSharp} />
</section>
  )
}
