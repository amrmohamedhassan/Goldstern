import { Link, NavLink, Outlet } from "react-router-dom";
import React, { useState } from "react";

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
            <Link to="/">
              <img src="/Icons/Logo-black.png" alt="Goldstern" />
            </Link>
            <div
              className={`burger ${isOpen ? "open" : ""}`}
              onClick={handleBurgerClick}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <ul className={`list ${isOpen ? "open" : ""}`}>
            <NavLink onClick={handleBurgerClick} to="/">
              Home
            </NavLink>
            <NavLink onClick={handleBurgerClick} to="/about">
              About Us
            </NavLink>
            <NavLink onClick={handleBurgerClick} to="/inventory">
              Car Inventory
            </NavLink>
            <NavLink onClick={handleBurgerClick} to="/services">
              Services
            </NavLink>
            <NavLink onClick={handleBurgerClick} to="/blogs">
              Blog / News
            </NavLink>
            <NavLink onClick={handleBurgerClick} to="/contact">
              Contact Us
            </NavLink>
          </ul>
          <Link
            className={`login ${isOpen ? "open" : ""}`}
            onClick={handleBurgerClick}
            to="/login">
            Login
          </Link>
        </div>
      </div>
      <main>
        <Outlet />
        <div className="wrapper"></div>
      </main>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Layout;
