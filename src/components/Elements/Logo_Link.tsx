import logo from "../../assets/logo.svg";
import ClassList from "../../interfaces/ClassLists";

const Logo_Link = ({ classes }: ClassList) => {
  return (
    <>
      <a href="#">
        <svg className={classes ? classes.join(" ") : ""}>
          <use href={`${logo}#logo`}></use>
        </svg>
      </a>
    </>
  );
};

export default Logo_Link;
