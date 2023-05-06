import Button from "./Button";
import { InandOutCxt } from "../store/context";
import { useContext } from "react";

const broker_url = process.env.BROKER_URL? process.env.BROKER_URL : "localhost"
const Buttons = () => {
  const authrequest = {
    action: "authentication",
    auth: {
      email: "admin@example.com",
      password: "verysecret",
    },
  };
  const loggingrequest = {
    action: "logging",
    log: {
      name: "front end",
      message: "Test logging service from front end",
    },
  };
  const grpcloggingrequest = {
    action: "logging",
    log: {
      name: "logging via GRPC",
      message: "Test GRPC logging service from front end",
    },
  };
    const queueloggingrequest = {
    action: "logging",
    log: {
      name: "logging via Rabbit",
      message: "Test logging service from front Rabbit",
    },
  };
  const sendEmailrequest = {
    action: "send",
    send: {
      from: "min@test.com",
      from_name: "Minnie Zhou",
      to: "minniezhou@gmail.com",
      subject: "Test from Front End",
      body: "This is the test from front end button click",
    },
  };
  const cxt = useContext(InandOutCxt);
  type ClickInput = {
    url: string;
    method: string;
    input: string;
    body?: string;
  };
  const OnClick = (In: ClickInput) => {
    fetch(In.url, {
      method: In.method,
      body: In.body,
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
          cxt.SetRequest(In.input);
          return;
        }
        const output = JSON.stringify(data, null, 4);
        cxt.ClearInandOut();
        cxt.SetRequest(In.input);
        cxt.SetResponse(output);
      })
      .catch((error) => {
        cxt.ClearInandOut();
        if (error) {
          cxt.SetError(error.message);
          cxt.SetRequest(In.input);
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
            url: `http://${broker_url}:8080`,
            method: "POST",
            input: "empty request!",
          });
        }}
      ></Button>
      <Button
        OnClick={() => {
          OnClick({
            url: `http://${broker_url}:8080/handle`,
            method: "POST",
            input: JSON.stringify(authrequest, null, 4),
            body: JSON.stringify(authrequest, null, 4),
          });
        }}
        name="Test Auth"
      ></Button>
      <Button
        OnClick={() => {
          OnClick({
            url: `http://${broker_url}:8080/handle`,
            method: "POST",
            input: JSON.stringify(loggingrequest, null, 4),
            body: JSON.stringify(loggingrequest, null, 4),
          });
        }}
        name="Test Logging"
      ></Button>
      <Button
        OnClick={() => {
          OnClick({
            url: `http://${broker_url}:8080/grpclog`,
            method: "POST",
            input: JSON.stringify(grpcloggingrequest, null, 4),
            body: JSON.stringify(grpcloggingrequest, null, 4),
          });
        }}
        name="Test Logging via GRPC"
      ></Button>
      <Button
        OnClick={() => {
          OnClick({
            url: `http://${broker_url}:8080/handleviaqueue`,
            method: "POST",
            input: JSON.stringify(queueloggingrequest, null, 4),
            body: JSON.stringify(queueloggingrequest, null, 4),
          });
        }}
        name="Test Logging via Rabbit"
      ></Button>
      <Button
        OnClick={() => {
          OnClick({
            url: `http://${broker_url}:8080/handle`,
            method: "POST",
            input: JSON.stringify(sendEmailrequest, null, 4),
            body: JSON.stringify(sendEmailrequest, null, 4),
          });
        }}
        name="Test Sending Email"
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
