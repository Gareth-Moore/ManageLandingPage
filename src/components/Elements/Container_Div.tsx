interface Props {
  children: React.ReactNode;
}

const Container_Div = ({ children }: Props) => {
  return (
    <>
      <div className="container">{children}</div>
    </>
  );
};

export default Container_Div;
