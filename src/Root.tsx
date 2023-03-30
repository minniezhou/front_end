import App from "./App";
import { useState } from "react";
import { InandOutCxt, InandOutType } from "./store/context";
export const Root = () => {
  const [request, setRequest] = useState<string>("Sent...");
  const [response, setResponse] = useState<string>("Received...");
  const [error, setError] = useState<string>("Output shows here...");
  return (
    <>
      <InandOutCxt.Provider
        value={{
          In: request,
          Out: response,
          Error: error,
          SetRequest: setRequest,
          SetResponse: setResponse,
          SetError: setError,
          ClearInandOut: () => {
            setRequest("Sent...");
            setResponse("Received...");
            setError("Output shows here");
          },
        }}
      >
        <App />
      </InandOutCxt.Provider>
    </>
  );
};
