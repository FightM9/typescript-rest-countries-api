import { Link } from "react-router-dom";
import ThemeSwitcher from "../Buttons/ThemeSwitcherButton";
import Container from "../../layouts/Container";
import './Header.css'

function Header() {
  return (
    <div className="header"> 
      <Container>
        <div className="header-wraper"> 
          <Link to={'/'}>Contry</Link>
          <ThemeSwitcher/>
        </div>
      </Container>
    </div>
  );
}

export default Header;
