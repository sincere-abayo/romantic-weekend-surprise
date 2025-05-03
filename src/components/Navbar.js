import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.light};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  
  svg {
    margin-right: 0.5rem;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${props => (props.isOpen ? '0' : '-100%')};
    width: 60%;
    height: 100vh;
    background-color: ${props => props.theme.colors.light};
    padding: 2rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: 1rem 0;
  }
`;

const CloseIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">
        <FaHeart /> Diane & Sincere
      </Logo>
      
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      
      <NavLinks isOpen={isOpen}>
        <CloseIcon onClick={toggleMenu}>
          <FaTimes />
        </CloseIcon>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        {/* <NavLink to="/our-story" onClick={() => setIsOpen(false)}>Our Story</NavLink> */}
        <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
        {/* <NavLink to="/weekend-plans" onClick={() => setIsOpen(false)}>Weekend Plans</NavLink> */}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;