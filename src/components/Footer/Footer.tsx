import Container_Div from "../Elements/Container_Div.tsx";
import SocialLinks_Footer from "./SocialLinks_Footer.tsx";
import Form_Footer from "./Navbar_Footer.tsx";
import Newsletter_Footer from "./Form_Footer.tsx";
import CopyRight_P from "../Elements/CopyRight_P.tsx";

const Footer = () => {
  return (
    <footer className="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
      <Container_Div>
        <div className="footer-content">
          <SocialLinks_Footer />
          <Form_Footer />
          <Newsletter_Footer />
          <CopyRight_P classes={["copyright-sm"]} />
        </div>
      </Container_Div>
    </footer>
  );
};

export default Footer;
