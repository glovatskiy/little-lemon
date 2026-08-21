import logo from "./assets/Logo.svg";
import instagram from "./assets/instagram.svg"
import facebook from "./assets/facebook.svg"
import linkedin from "./assets/linkedin.svg"
const Footer = () => {
  return (
    <footer>
      <img src={logo} />
      <nav>
        <ul>
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
      <div>
        <h2>Contacts</h2>
        <adress>
          <div>Address</div>
          <a href="tel:">Phone number</a>
          <a href="mailto:">Email</a>
        </adress>
      </div>
      <div>
        <p>Sosial Media</p>
        <a href="">
          <img src={instagram} width={50} />
        </a>
        <a href="">
          <img src={facebook} width={50} />
        </a>
        <a href="">
          <img src={linkedin} width={50} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
