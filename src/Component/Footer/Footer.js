import React from 'react';
import { Col, Container, ListGroupItem, div } from 'reactstrap';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='row'>
                    <div className="col">
                        <div className="logo">
                            <h2 className='d-flex align-items-center gap-1'>
                                <span><i className="ri-restaurant-2-line"></i></span>RosuiGhar
                            </h2>
                        </div>
                        <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi veritatis dolorem. Nostrum provident fugiat corrupti mollitia illum quidem facere. Iure pariatur similique excepturi soluta!</p>
                    </div>
                    <div className="col">
                        <h5 className='text-white'>Info Links</h5>
                        <ListGroupItem className='d-flex flex-column gap-3 text-white'>
                            <a>Terms & Codition</a>
                            <a>Privacy Policy</a>
                            <a>Return & Refund</a>
                            <a>Payment Method</a>
                        </ListGroupItem>
                    </div>

                    <div className="col">
                        <ListGroupItem className='d-flex flex-column gap-3 text-white'>
                            <h5 className='text-white'>Get Help</h5>
                            <a>About Us</a>
                            <a>Menu</a>
                            <a>Recipes</a>
                            <a>Contact</a>
                        </ListGroupItem>
                    </div>
                    <div className="col">
                        <h5 className='text-white'>Info Links</h5>
                        <ListGroupItem className='d-flex flex-column gap-3 text-white'>
                            <a>Terms & Codition</a>
                            <a>Privacy Policy</a>
                            <a>Return & Refund</a>
                            <a>Payment Method</a>
                        </ListGroupItem>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;