import React from 'react';
import { Container } from 'reactstrap';
import './slider.css';
import {sliderData} from '../../Assets/FakeData/slider'; 
import Slider from 'react-slick';

const HeroSlider = () => {
    const setting ={
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
    }
    return (
        <div className='slider'>
            <Container className='mt-5'>
                <Slider {...setting}>
                    {
                        sliderData.map(item=>(
                            <div>
                                <div className="slider_wrapper d-flex align-item-center justify-content-between ">
                                    <div className="slider_content w-50 ps-2 pt-5">
                                        <h2>{item.title}</h2>
                                        <p className='mt-3'>{item.desc}</p>
                                        <button className='btn btn-warning mt-3 text-white fw-bold'>Explore Food</button>
                                    </div>
                                    <div className="sider_img w-50">
                                        <img src={item.imgUrl} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </Container>
        </div>
    );
};

export default HeroSlider;