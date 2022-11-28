import React, { Fragment } from 'react';
import ChooseUs from '../Component/ChooseUs/ChooseUs';
import Download from '../Component/Download_section/Download';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import HeroSlider from '../Component/HeroSlider/HeroSlider';
import MenuPack from '../Component/MenuPack/MenuPack';
import PopularMenu from '../Component/PopularMenu/PopularMenu';
import Testimonials from '../Component/Testimonials/Testimonials';

const Home = () => {
    return (
        <Fragment>
            <Header></Header>
            <HeroSlider></HeroSlider>
            <PopularMenu></PopularMenu>
            <ChooseUs ></ChooseUs>
            <MenuPack></MenuPack>
            <Testimonials></Testimonials>
            <Download></Download>
            <Footer></Footer>
        </Fragment>
    );
};

export default Home;