import hamburgerOpen from "../../assets/icon-hamburger.svg";
import hamburgerClose from "../../assets/icon-close.svg";

interface Props {
  isNavOpen: boolean;
  toggleNav: () => void;
}

const NavbarDropdown_Btn = ({ isNavOpen, toggleNav }: Props) => {
  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isNavOpen}
        onClick={toggleNav}
      >
        <img src={isNavOpen ? hamburgerClose : hamburgerOpen} alt="" />
        <span className="visually-hidden">Menu</span>
      </button>
    </>
  );
};

export default NavbarDropdown_Btn;
