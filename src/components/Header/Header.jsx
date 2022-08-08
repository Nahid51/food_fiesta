import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartUiAction } from '../../store/shopping-cart/cartUiSlice';

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
    const dispatch = useDispatch();

    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu');
    const toggleCart = () => {
        dispatch(cartUiAction.toggle())
    }

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
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="Logo" />
                        <h5>Food Fiesta</h5>
                    </NavLink>

                    {/* ------menu------ */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            <span className='user_name'>Signed in as: Nahid</span>
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
                            <span className="user">
                                {/* <i className="ri-logout-circle-line logout_btn"></i> */}
                                <Link to='/login'>
                                    <i className="ri-login-circle-line login_btn"></i>
                                </Link>
                            </span>
                        </div>
                    </div>

                    {/* -----nav right icons----- */}
                    <div className="nav_right d-flex align-items-center gap-4">
                        <span className="cart_icon" onClick={toggleCart}>
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart_badge">{totalQuantity}</span>
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