import illustration_intro from "../../../assets/illustration-intro.svg";
import CTA_Btn from "../../Elements/CTA_Btn";
import Container_Div from "../../Elements/Container_Div";

const Hero = () => {
  return (
    <>
      <section className="hero | padding-top-sm-only-400   padding-top-999 text-center-sm-only">
        <Container_Div>
          <div className="even-columns">
            <div className="flow hero-text-container">
              <h1 className="fs-primary-heading fw-bold">Bring everyone together to build better products.</h1>
              <p className="auto-margins-sm-only margin-top-400-sm-only">
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals
                in view.
              </p>
              <CTA_Btn></CTA_Btn>
            </div>
            <div className="hero-image-container auto-margins">
              <img src={illustration_intro} alt="decorative_image" className=" " />
            </div>
          </div>
        </Container_Div>
      </section>
    </>
  );
};

export default Hero;
