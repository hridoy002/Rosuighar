import React from 'react';
import './Download.css';
import appImg from '../../Assets/images/app.png';
import { Col, Container, Row } from 'reactstrap';

const Download = () =>{
    return <section>
        <Container className='app_container'>
            <Row>
                <Col lg='6' md='6'>
                    <div className="app_img">
                        <img src={appImg} alt="" />
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="app_content mt-5">
                        <h5 className='text-white'>Download Our App</h5>
                        <h2>Never Feel Hungry?Download Our Mobile App Order Delicious Food.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam modi deserunt et facilis eos rerum error doloribus accusamus, voluptatibus consequatur!</p>
                    </div>
                    <div className="app_btn d-flex align-item-center gap-5 mt-4">
                        <button className='btn'><i class="ri-app-store-line"></i> <a href="#">App Store</a></button>
                        <button className='btn'><i class="ri-google-play-fill"></i> <a href="#">Play Store</a></button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Download;