import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './ChooseUs.css';
import pastaImg from '../../Assets/images/pasta.png'

const ChooseUs = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' className=''>
                        <img src={pastaImg} alt="" />
                    </Col>
                    <Col lg='6' className=''>
                        <div className="content">
                            <h4 className='text-white'>Who we are?</h4>
                            <h2>Take a look at the benefits we offer you.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam maiores corrupti consectetur magnam sunt corporis qui doloremque necessitatibus cupiditate.</p>
                        </div>
                        <div className="features">
                            <div className="feature1 d-flex align-items-center justify-content-between">
                                <div className="single_feature1">
                                    <span><i class="ri-truck-line"></i></span>
                                    <h6>Free Home Delivery</h6>
                                    <p>Lorem ipsum dolor</p>
                                </div>

                                <div className="single_feature2">
                                    <span><i class="ri-money-dollar-circle-line"></i></span>
                                    <h6>Return & Refund</h6>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </div>
                            <div className="feature1 d-flex align-items-center justify-content-between">
                                <div className="single_feature3">
                                    <span><i class="ri-secure-payment-line"></i></span>
                                    <h6>Secure Payment</h6>
                                    <p>Lorem ipsum dolor</p>
                                </div>

                                <div className="single_feature4">
                                    <span><i class="ri-24-hours-line"></i></span>
                                    <h6>24/7 Hours Support</h6>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ChooseUs;