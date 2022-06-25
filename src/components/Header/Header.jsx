import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';
import { useSelector } from 'react-redux';

const nav_links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    },
]

const Header = () => {
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('header_shrink')
            }
            else {
                headerRef.current.classList.remove('header_shrink')
            }
        })
        // return () => window.removeEventListener('scroll')
    }, []);

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <div className="nav_wrapper d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h5>Food Fiesta</h5>
                    </div>

                    {/* ------menu------ */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            {
                                nav_links.map((item, index) => (
                                    <NavLink
                                        to={item.path} key={index}
                                        className={navClass => navClass.isActive ? "active_menu" : ""}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    {/* -----nav right icons----- */}
                    <div className="nav_right d-flex align-items-center gap-4">
                        <span className="cart_icon">
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart_badge">{totalQuantity}</span>
                        </span>

                        <span className="user">
                            <Link to='/login'><i className="ri-user-line"></i></Link>
                        </span>

                        <span className='mobile_menu' onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>

        </header>
    );
};

export default Header;