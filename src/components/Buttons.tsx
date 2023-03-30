import Button from "./Button";
import { InandOutCxt } from "../store/context";
import { useContext } from "react";
const Buttons = () => {
  const cxt = useContext(InandOutCxt);
  type ClickInput = {
    url: string;
    method: string;
    input: string;
  };
  const OnClick = (In: ClickInput) => {
    fetch(In.url, {
      method: In.method,
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
        cxt.ClearInandOut();
        cxt.SetRequest(In.input);
        cxt.SetResponse(output);
      })
      .catch((error) => {
        cxt.ClearInandOut();
        if (error) {
          cxt.SetError(error.message);
        } else {
          cxt.SetError("Connection error");
        }
      });
  };
  return (
    <>
      <Button
        name="Test Broker"
        OnClick={() => {
          OnClick({
            url: "http://localhost:8080",
            method: "POST",
            input: "empty request",
          });
        }}
      ></Button>
      <Button
        OnClick={() => {
          OnClick({
            url: "http://localhost:8080/hello",
            method: "GET",
            input: "empty request",
          });
        }}
        name="Test Auth"
      ></Button>
      <Button
        OnClick={() => {
          cxt.ClearInandOut();
        }}
        name="Clear"
      ></Button>
    </>
  );
};

export default Buttons;
