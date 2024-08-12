import { socialIconsList } from "../../data/siteData";
import Logo_Link from "../Elements/Logo_Link";

const SocialLinks_Footer = () => {
  return (
    <>
      <div className="footer-content--logo-social">
        <Logo_Link classes={["logo-dark"]} />
        <ul role="list" aria-label="Social links" className="social-list" style={{ marginInline: "auto" }}>
          {socialIconsList.map((link) => (
            <li key={link.id}>
              <a aria-label={`#${link.icon}`} href="#">
                <svg className="social-icon">
                  <use href={link.icon} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks_Footer;
