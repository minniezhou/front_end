import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import TextBox from "./components/TextBox";
import { InandOutCxt } from "./store/context";

function App() {
  const cxt = useContext(InandOutCxt);
  return (
    <div className="App">
      <Header />
      <Buttons></Buttons>
      <TextBox text="Output shows here..."></TextBox>
      <div className="flex-container">
        <div className="flex-child">
          <h3>Send</h3>
          <TextBox text={cxt.In}></TextBox>
        </div>
        <div className="flex-child">
          <h3>Receive</h3>
          <TextBox text={cxt.Out}></TextBox>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
