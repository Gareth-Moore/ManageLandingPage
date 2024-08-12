import { featuresItems } from "../../../data/siteData";

const ProductList_Features = () => {
  return (
    <>
      {featuresItems.map((feature) => {
        return (
          <li key={feature.id}>
            <div style={{ "--flow-spacer": "1em" } as React.CSSProperties}>
              <h3 className="fs-600 fw-bold">{feature.title}</h3>
              <p className="wide">{feature.description}</p>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default ProductList_Features;
