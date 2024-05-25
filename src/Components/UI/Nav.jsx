import React,{ useRef } from 'react';
import { Container } from 'reactstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../../Styles/Header.css';
import {
  MDBBtn
  
}
from 'mdb-react-ui-kit';

const navLinks = [
  {
    path: "/home",
    display: "Home",
    icons : "&#xEE20"
  },
  {
    path: "/tracking",
    display: "Tracking",
  },
 

  {
    path: "/settings",
    display: "Settings",
  },
  {
    path: "/dockbooking",
    display: "Dock Booking",
  },

  {
    path: "/calendar",
    display: "Calendar",
  },
];

const Nav = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/home')
  }
  return (

    <div className="main__navbar">
    <Container>
      <div className="navigation__wrapper d-flex align-items-center justify-content-between">
        <span className="mobile__menu">
          <i class="ri-menu-line" onClick={toggleMenu}></i>
        </span>

        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu">
            {navLinks.map((item, index) => (
              <NavLink
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "nav_active navitem" : "nav_item"
                }
                key={index}
              >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="nav__right">
            <MDBBtn className="mb-4 px-5" style={{background: '#7c5f87'}} size='1g' onClick={handleLogout}>Logout</MDBBtn>
          </div>
        </div>
    </Container>
    <Outlet />
  </div>
  
  )
}

export default Nav;
