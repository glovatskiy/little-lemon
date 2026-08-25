import Nav from "./Nav"
import logo from "./assets/Logo.svg"
const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="header-logo"/>
            <Nav/>
        </header>
    )
}

export default Header