import React, { useRef } from 'react';
import './Header.css';
import { Container } from 'reactstrap';

const menuItems = [
    {
        display: "Home",
        url: "#"
    },
    {
        display: "Menu",
        url: "#"
    },
    {
        display: "Recipes",
        url: "#"
    },
    {
        display: "About Us",
        url: "#"
    },
    {
        display: "Contact Us",
        url: "#"
    },
]
const Header = () => {
    const menuRef = useRef();
    const menuToggle = () => menuRef.current.classList.toggle('active_menu');

    return (
        <header className="header">
            <Container className='mb-1'>
                <div className="navigation">
                    <div className="logo">
                        <h2 className='d-flex align-items-center gap-1'>
                            <span><i className="ri-restaurant-2-line"></i></span>RosuiGhar
                        </h2>
                    </div>

                    <div className="nav_menu" onClick={menuToggle} ref={menuRef}>
                        <div className="nav_wrapper">
                            <ul className='nav_list'>
                                {menuItems.map((menuItem, index) => <li className='list_item' key={index}><a href={menuItem.url}>{menuItem.display}</a></li>)}
                            </ul>

                            <div className="menu_right">
                                <div className="search">
                                    <input type="text" name="" id="" placeholder='Search Item...' />
                                    <span><i className="ri-search-2-line"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart_icon">
                        <i class="ri-shopping-cart-2-line fs-5"></i>
                        <span className='badge'>0</span>
                    </div>
                    <div className="mobile_menu" onClick={menuToggle}>
                        <span><i className="ri-menu-3-fill"></i></span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;