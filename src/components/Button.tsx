import { useContext } from "react";
import { InandOutCxt } from "../store/context";
import "./Button.css";
const Button: React.FC<{ name: string }> = (prop) => {
  const cxt = useContext(InandOutCxt);
  return (
    <button
      onClick={() => {
        cxt.SetRequest("empty request...");
      }}
      className="button"
    >
      {prop.name}
    </button>
  );
};

export default Button;
