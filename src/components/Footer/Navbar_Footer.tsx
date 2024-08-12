import { linkTexts } from "../../data/siteData";

const Form_Footer = () => {
  return (
    <>
      <div className="footer-content--nav">
        <nav className="footer-nav">
          <ul
            className="flow"
            style={{ "--flow-spacer": "1em" } as React.CSSProperties}
            role="list"
            aria-label="Footer"
          >
            {linkTexts.map((link) => (
              <li key={link.id}>
                <a href="#">{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Form_Footer;
