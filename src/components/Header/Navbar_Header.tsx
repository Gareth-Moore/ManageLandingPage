import { navigationLinks_Header as links } from "../../data/siteData";

interface Props {
  isNavOpen: boolean;
}

const Navbar_Header = ({ isNavOpen }: Props) => {
  return (
    <nav className={`primary-navigation `} id="primary-navigation" data-visible={isNavOpen}>
      <ul className="nav-list" role="list" aria-label="Primary">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href="#">{link.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar_Header;
