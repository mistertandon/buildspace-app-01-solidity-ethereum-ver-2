import React from "react";
import "./App.css";
import ThankYou from "./components/thankyou/ThankYou";
import MainWave from "./components/wave/Main";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="wave-portal--container">
      <div className="child-a--wpc">Wave portal</div>
      <ThankYou />

      <div className="child-b--wpc">
        <MainWave />
      </div>
      <Footer classFromParent="child-c--wpc" />
    </div>
  );
};

export default App;
