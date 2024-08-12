import React from "react";
import Container_Div from "../../Elements/Container_Div";
import EvenColumns_Div from "../../Elements/EvenColumns_Div";
import ProductList_Features from "./ProductList_Features";

const Features = () => {
  return (
    <section className="features | padding-block-900">
      <Container_Div>
        <EvenColumns_Div>
          {/* Features: heading */}
          <div
            className="flow text-center-sm-only margin-bottom-700"
            style={{ "--flow-spacer": "1.5em" } as React.CSSProperties}
          >
            <h2 className="fs-secondary-heading fw-bold">What’s different about Manage?</h2>
            <p className="auto-margins-sm-only">
              Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made
              for modern digital product teams.
            </p>
          </div>
          {/* Features: list of products */}
          <div>
            <ul className="numbered-items flow" role="list">
              <ProductList_Features />
            </ul>
          </div>
        </EvenColumns_Div>
      </Container_Div>
    </section>
  );
};

export default Features;
