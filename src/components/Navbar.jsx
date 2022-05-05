import React, { useState } from 'react';
import styled from 'styled-components';

import MenuHamburguesa from './MenuHamburguesa';

const Navbar = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };
  return (
    <NavContainer>
      <h2>
        Navbar <span>Responsive</span>
      </h2>
      <div className={`links ${click ? 'active' : ''}`}>
        <a onClick={handleClick} href="#inicio">
          Inicio
        </a>
        <a onClick={handleClick} href="#productos">
          Productos
        </a>
        <a onClick={handleClick} href="#galeria">
          Galeria
        </a>
        <a onClick={handleClick} href="#nosotros">
          Sobre Nosotros
        </a>
        <a onClick={handleClick} href="#contacto">
          Contacto
        </a>
      </div>
      <div className="KK">
        <MenuHamburguesa click={click} handleClick={handleClick} />
      </div>
      <Bg className={`${click ? 'active' : ''}`}></Bg>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.4rem;
  background-color: #1f1e1e;
  width: 100vw;
  position: fixed;

  h2 {
    color: #fff;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  .links {
    transform: translateX(190px);
  }
  a {
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
    &.activeColor {
      color: #f6c00e;
    }
  }

  @media (max-width: 768px) {
    .links {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: -700px;
      left: -800px;

      transition: transform 1s ease-in-out;
    }

    .links.active {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translate(800px, 900px);

      a {
        margin-top: 20px;
        font-size: 1.5rem;
        color: #fff;
        &.activeColor {
          color: #f6c00e;
        }
      }
    }
  }

  .KK {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const Bg = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    background-color: #1f1e1e;
    top: -1000px;
    left: -1000px;
    width: 100vw;
    height: 100vh;
    transition: 0.8s ease-in-out;
    z-index: -1;
    &.active {
      border-radius: 0 0 80% 0;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
  }
`;
