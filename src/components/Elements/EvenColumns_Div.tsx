interface Props {
  children: React.ReactNode;
  classes?: string[];
}

const EvenColumns_Div = ({ children, classes }: Props) => {
  return <div className={`even-columns ${classes ? classes.join(" ") : ""}`}>{children}</div>;
};

export default EvenColumns_Div;
