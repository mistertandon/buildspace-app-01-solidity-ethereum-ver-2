import React, { useState, useEffect } from "react";
import AddWave from "./AddWave";
import WaveList from "./WaveList";

const Main = ({classFromParent}) => {

  const [classFromParentRef, setClassFromParent] = useState("");

  useEffect(() => {

    if (typeof classFromParent != undefined && classFromParent) {
      setClassFromParent(classFromParent);
    }

  }, [classFromParent]);

  return (
    <div className={`${classFromParentRef} main-wave--container`}>
      <AddWave classFromParent="child-a--mwc" />
      <div className="line-break"></div>
      <WaveList />
    </div>
  )
}

export default Main;