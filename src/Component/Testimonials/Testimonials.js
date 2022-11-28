import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import "./Testimonials.css";
import review1 from '../../Assets/images/review1.png';
import Slider from 'react-slick';

const Testimonials = () => {
    const setting ={
        isFinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2500,
    }
    return (
        <section>
            <Container>
                <Row className='w-75 mx-auto'>
                    <Col lg="6" className=''>
                        <h2 className='mt-3'>What our customers are saying</h2>
                        <Slider {...setting}>
                            <div>
                                <div className="single_testimonial">
                                    <p className='review_content'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos cum nulla veniam corrupti praesentium.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos cum nulla veniam corrupti praesentium.
                                    </p>
                                    <h6>Jhon Doe</h6>
                                    <p>Critics</p>
                                </div>
                            </div>
                            <div>
                                <div className="single_testimonial">
                                    <p className='review_content'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos cum nulla veniam corrupti praesentium.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos cum nulla veniam corrupti praesentium.
                                    </p>
                                    <h6>Jhon Doe</h6>
                                    <p>Critics</p>
                                </div>
                            </div>
                            <div>
                                <div className="single_testimonial">
                                    <p className='review_content'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos cum nulla veniam corrupti praesentium.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos cum nulla veniam corrupti praesentium.
                                    </p>
                                    <h6>Jhon Doe</h6>
                                    <p>Critics</p>
                                </div>
                            </div>
                            <div>
                                <div className="single_testimonial">
                                    <p className='review_content'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos cum nulla veniam corrupti praesentium.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos cum nulla veniam corrupti praesentium.
                                    </p>
                                    <h6>Jhon Doe</h6>
                                    <p>Critics</p>
                                </div>
                            </div>
                        </Slider>
                    </Col>

                    <Col lg="6">
                        <img src={review1} alt="" className='w-75'/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;