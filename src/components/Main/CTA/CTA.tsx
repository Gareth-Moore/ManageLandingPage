import Container_Div from "../../Elements/Container_Div";
import CTA_Btn from "../../Elements/CTA_Btn";
import EvenColumns_Div from "../../Elements/EvenColumns_Div";

const CTA = () => {
  return (
    <section className="cta | padding-block-700 padding-block-900-lrg-only bg-accent-400 text-neutral-100">
      <Container_Div>
        <EvenColumns_Div classes={["vertical-align-center"]}>
          <div>
            <p className="custom-paragraph | fs-primary-heading fs-secondary-heading-md fw-bold line-height-large">
              Simplify how your team works today.
            </p>
          </div>
          <div className="justify-self-end-md">
            <CTA_Btn dataType={"inverted"} />
          </div>
        </EvenColumns_Div>
      </Container_Div>
    </section>
  );
};

export default CTA;
