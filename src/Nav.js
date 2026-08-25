import hamburgerIcon from "./assets/🦆 icon _hamburger menu_.svg"
const Nav = () => {
    return (
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
        <button className="nav-button mobile-view" type="button"><img src={hamburgerIcon} alt="Hamburger menu"/></button>
      </nav>
    );
}
export default Nav