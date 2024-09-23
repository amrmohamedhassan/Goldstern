import { Link, NavLink, Outlet } from 'react-router-dom';
import React, { useState } from 'react';

const Layout = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="layout">
      <div className="nav">
        <div className="cont">
          <div className="burger-cont">
            <Link to="/"><img src="/Icons/Logo.png" alt="Goldstern" /></Link>
            <div className={`burger ${isOpen ? 'open' : ''}`} onClick={handleBurgerClick}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <ul className={`list ${isOpen ? 'open' : ''}`}>
            <NavLink onClick={handleBurgerClick} to="/">HOME</NavLink>
            <NavLink onClick={handleBurgerClick} to="/about">ABOUT</NavLink>
            <Link className="button" onClick={handleBurgerClick} to="/login">Login</Link>
            
          </ul>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Layout;
