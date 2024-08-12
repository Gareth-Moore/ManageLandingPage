interface Props {
  classes: string[];
}

const CopyRight_P = ({ classes }: Props) => {
  return (
    <p className={classes ? classes.join(" ") : ""} style={{ width: "100%" }}>
      Copyright 2020. All Rights Reserved.
    </p>
  );
};

export default CopyRight_P;
