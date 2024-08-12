import CTA_Btn from "../../Elements/CTA_Btn";
import Slider_Widget from "./Slider_Widget";

const Testimonies = () => {
  return (
    <section className=" padding-block-700  text-center margin-bottom-900-lrg-only">
      <h2 className="fs-secondary-heading fw-bold">What they've said</h2>
      <Slider_Widget />
      <CTA_Btn />
    </section>
  );
};

export default Testimonies;
