import { useState } from "react";
import Navbar_Header from "./Navbar_Header";
import CTA_Btn from "../Elements/CTA_Btn";
import Logo_Link from "../Elements/Logo_Link";
import NavbarDropdown_Btn from "./NavbarDropdown_Btn";
import Container_Div from "../Elements/Container_Div";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="primary-header" data-overlay={isNavOpen}>
      <div className="overlay" data-visible={isNavOpen}></div>
      <div className="overlay-container " data-visible={isNavOpen}>
        <Container_Div>
          <div className="nav-wrapper">
            <Logo_Link classes={["logo-light"]} />
            <NavbarDropdown_Btn toggleNav={toggleNav} isNavOpen={isNavOpen} />
            <Navbar_Header isNavOpen={isNavOpen} />
            <CTA_Btn classes={["display-sm-none"]} />
          </div>
        </Container_Div>
      </div>
    </header>
  );
};

export default Header;
