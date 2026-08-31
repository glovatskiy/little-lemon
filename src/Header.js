import logo from "./assets/Logo.svg"
import hamburgerIcon from "./assets/🦆 icon _hamburger menu_.svg"

const Header = () => {
    return (
      <header className="header">
        <img src={logo} className="header-logo" />
        <nav>
          <ul className="nav-items desktop-view">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
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
        <button className="nav-button mobile-view" type="button">
          <img src={hamburgerIcon} alt="Hamburger menu" />
        </button>
      </header>
    );
}

export default Header