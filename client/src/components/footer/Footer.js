import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = ({ classFromParent }) => {
  const [classFromParentRef, setClassFromParent] = useState("");

  useEffect(() => {

    if (typeof classFromParent != undefined && classFromParent !== "") {
      setClassFromParent(classFromParent);
    }

  }, [classFromParent]);

  const navigateToBuilderSpace = () => {
    window.open("https://buildspace.so/", "_blank");
  }

  return (
    <div className={`${classFromParentRef} footer--container`}>

      Credit: <span onClick={navigateToBuilderSpace} className="child-a__anchor--fc">buildspace.so</span>
    </div>
  )
}

export default Footer