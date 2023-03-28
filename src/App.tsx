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
      <div>
        <TextBox text="Sent..."></TextBox>
        <TextBox text="Received..."></TextBox>
      </div>
      <Footer />
    </div>
  );
}

export default App;
