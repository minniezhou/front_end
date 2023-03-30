import { useContext } from "react";
import { InandOutCxt } from "../store/context";
import "./Button.css";
const Button: React.FC<{ name: string }> = (prop) => {
  const cxt = useContext(InandOutCxt);
  return (
    <button
      onClick={() => {
        fetch("http://localhost:8080", {
          method: "POST",
        })
          .then((response) => {
            if (!response.ok) {
              cxt.SetError("fetching data error...");
              return;
            }
            return response.json();
          })
          .then((data) => {
            if (data.error) {
              cxt.SetError(data.message);
              return;
            }
            const output = JSON.stringify(data);
            cxt.SetRequest("empty request...");
            cxt.SetResponse(output);
          })
          .catch((error) => {
            if (error) {
              cxt.SetError(error.message);
            } else {
              cxt.SetError("Connection error");
            }
          });
      }}
      className="button"
    >
      {prop.name}
    </button>
  );
};

export default Button;
