import React from "react";
import styled from "styled-components";
import Burger from "../Burger";
import { HashLink as Link } from 'react-router-hash-link';

const Nav = styled.nav`
  background: white;
  height: 130px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-right: 5rem;
  margin-left: 5rem;
  z-index: 10;

  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
  }
`;

const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavigationBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/LandingPage#anchor1">WORK</NavLink>
        <Burger />
        <NavMenu>
          <NavLink to="/LandingPage">FRANK CONRADT GMBH</NavLink>
        </NavMenu>
        <NavLink to="/LandingPage#anchor2">CONTACT</NavLink>
      </Nav>
    </>
  );
};

export default NavigationBar;
