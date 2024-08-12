interface Props {
  classes?: string[];
  dataType?: string;
}

const CTA_Btn = ({ classes, dataType }: Props) => {
  return (
    <>
      <button className={`button ${classes ? classes.join(" ") : ""}`} {...(dataType ? { "data-type": dataType } : "")}>
        Get Started
      </button>
    </>
  );
};

export default CTA_Btn;
