import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import Text from "./components/Text";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div className="App">
      <Header />
      <Buttons></Buttons>
      <TextBox text="Output shows here..."></TextBox>
      <div className="flex-container">
        <div className="flex-child">
          <h3>Send</h3>
          <TextBox text="Sent..."></TextBox>
        </div>
        <div className="flex-child">
          <h3>Receive</h3>
          <TextBox text="Received..."></TextBox>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
