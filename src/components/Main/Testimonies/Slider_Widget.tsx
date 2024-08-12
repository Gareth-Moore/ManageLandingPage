import { useEffect, useRef, useState } from "react";
import "a11y-slider/dist/a11y-slider.css";
import A11YSlider from "a11y-slider";
import { testimonials } from "../../../data/siteData";

const Slider_Widget = () => {
  const [showSpacer, setShowSpacer] = useState(window.innerWidth > 800);
  const sliderRef = useRef(null);
  let newSlider: A11YSlider;

  useEffect(() => {
    if (sliderRef.current) {
      newSlider = new A11YSlider(sliderRef.current, {
        adaptiveHeight: true,
        container: true,
        dots: true,
        infinite: false,
      });
    }

    const handleResize = () => {
      setShowSpacer(window.innerWidth > 800);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (newSlider) {
        newSlider.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ul className="slider" ref={sliderRef} role="list">
      {showSpacer && <div></div>}
      {testimonials.map((testimony) => {
        return (
          <li key={testimony.id}>
            <div className="list-item-contents">
              <img src={testimony.image} alt="" />
              <h3 className="padding-bottom-400">{testimony.name}</h3>
              <p>{testimony.testimony}</p>
            </div>
          </li>
        );
      })}
      {showSpacer && <div></div>}
    </ul>
  );
};

export default Slider_Widget;
