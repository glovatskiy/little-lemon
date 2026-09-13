import footerLogo from "../assets/littlelemon-footerlogo.webp";
import instagram from "../assets/socials/instagram.svg";
import facebook from "../assets/socials/facebook.svg";
import linkedin from "../assets/socials/linkedin.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-logo" src={footerLogo} alt="Little Lemon logo" />
      <nav className="footer-nav">
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="footer-contacts">
        <h2>Contacts</h2>
        <address className="contacts-info">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Little+Lemon+Chicago"
            target="_blank"
            rel="noopener noreferrer"
          >
            123 Mediterranean Street,
            <br /> Chicago, IL
          </a>
          <a href="tel:+1123456789">+1 123 456 789</a>
          <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
        </address>
      </div>
      <div className="footer-social">
        <h2 className="footer-social-heading">Follow us</h2>
        <div className="social-icons">
          <a href="#" aria-label="Little Lemon Instagram">
            <img src={instagram} alt="Little Lemon's Instagram" />
          </a>
          <a href="#" aria-label="Little Lemon Facebook">
            <img src={facebook} alt="Little Lemon's Facebook" />
          </a>
          <a href="#" aria-label="Little Lemon LinkedIn">
            <img src={linkedin} alt="Little Lemon's Linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
