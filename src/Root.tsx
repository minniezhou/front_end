import App from "./App";
import { useState } from "react";
import { InandOutCxt, InandOutType } from "./store/context";
export const Root = () => {
  const [request, setRequest] = useState<string>("Sent...");
  const [response, setResponse] = useState<string>("Received...");
  return (
    <>
      <InandOutCxt.Provider
        value={{
          In: request,
          Out: response,
          SetRequest: setRequest,
          SetResponse: setResponse,
          ClearInandOut: () => {
            setRequest("Sent...");
            setResponse("Received...");
          },
        }}
      >
        <App />
      </InandOutCxt.Provider>
    </>
  );
};
