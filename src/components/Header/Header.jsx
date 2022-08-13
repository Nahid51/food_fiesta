import React, { useEffect, useRef } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartUiAction } from '../../store/shopping-cart/cartUiSlice';
import { setLogout } from '../../store/authentication/userSlice';


const Header = () => {
    const dispatch = useDispatch();
    const headerRef = useRef(null);

    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const toggleCart = () => {
        dispatch(cartUiAction.toggle())
    }

    const { user } = useSelector(state => ({ ...state.auth }));

    const handleLogout = () => {
        dispatch(setLogout())
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
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="Logo" />
                        <h5>Food Fiesta</h5>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex align-items-center menu gap-4" activeclassname="active">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/foods">Foods</NavLink>
                            <NavLink to="/cart">Cart</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            {user?.result?.email && <NavLink to="/contact">Review Us</NavLink>}
                            {user?.result?.role && <NavDropdown title="Admin" id="collasible-nav-dropdown">
                                <NavLink to="/addFood">Add New Foods</NavLink>
                                <NavDropdown.Divider />
                                <NavLink to="/editDelete">Edit and Delete Foods</NavLink>
                                <NavDropdown.Divider />
                                <NavLink to="/addAdmin">Add New Admin</NavLink>
                            </NavDropdown>}
                        </Nav>
                        <Nav>
                            <div className='d-flex align-items-center justify-content-evenly'>

                                <span onClick={toggleCart}>
                                    <i className="ri-shopping-basket-line cart_logo"></i>
                                    <span className="cart_batch">{totalQuantity}</span>
                                </span>

                                <div className='ms-5'>
                                    {user?.result?.email ?
                                        <button onClick={handleLogout} className="logout_btn">LOGOUT</button>
                                        :
                                        <Link to='/login'>
                                            <button className='login_btn'>LOGIN</button>
                                        </Link>}
                                </div>
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;