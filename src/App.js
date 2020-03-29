import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.scss";


function App() {
  return (
    <div className="global">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
