import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import hamburgerIcon from "../assets/🦆 icon _hamburger menu_.svg"
import { useState } from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleState = () => {
        setIsOpen(prev => !prev);
    }
    return (
      <header className="header">
        <img src={logo} className="header-logo" />
        <nav
          className={
            isOpen ? "nav-items-container open" : "nav-items-container"
          }
        >
          <ul className="nav-items desktop-view">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <a href="">MENU</a>
            </li>
            <li>
              <a href="">RESERVATIONS</a>
            </li>
            <li>
              <a href="">ORDER ONLINE</a>
            </li>
            <li>
              <a href="">LOGIN</a>
            </li>
          </ul>
        </nav>
        <button
          className="nav-button mobile-view"
          onClick={toggleState}
          type="button"
        >
          <img src={hamburgerIcon} alt="Hamburger menu" />
        </button>
      </header>
    );
}

export default Header