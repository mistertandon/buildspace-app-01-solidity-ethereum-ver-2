import React from "react";
import "./App.css";
import { WalletProvider } from "./contexts/WalletContext";
import ThankYou from "./components/thankyou/ThankYou";
import MainWave from "./components/wave/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="wave-portal--container">
      <WalletProvider>
        <Header classFromParent="child-a--wpc" />
        <ThankYou />

        <div className="child-b--wpc">
          <MainWave />
        </div>
        <Footer classFromParent="child-c--wpc" />
      </WalletProvider>
    </div>
  );
};

export default App;
