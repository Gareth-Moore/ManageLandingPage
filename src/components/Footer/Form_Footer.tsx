import { FormEvent, useState } from "react";
import validateEmail from "../../utils/validateEmail";
import CopyRight_P from "../Elements/CopyRight_P";

const Newsletter_Footer = () => {
  const [email, setEmail] = useState("");
  const [formInvalid, setFormInvalid] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (validateEmail(email)) {
      setFormInvalid(true);
    } else {
      setFormInvalid(false);
      setEmail("");
      alert("Congrats the form is submitted!");
    }
  }

  return (
    <>
      <div className="footer-content--form">
        <form onSubmit={(e) => handleSubmit(e)} noValidate>
          <input
            type="email"
            placeholder="Updates in your inbox..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            style={{ color: formInvalid ? "var(--clr-error)" : "var(--clr-neutral-900)" }}
          />
          <button className="button no-glow reduced-padding">Go</button>
          {formInvalid && <p className="error-message">Please enter a valid email address.</p>}
        </form>
        <CopyRight_P classes={["copyright-md"]} />
      </div>
    </>
  );
};

export default Newsletter_Footer;
