import React, {useState, useEffect} from "react";
import "./ThankYou.css";

const ThankYou = ({ classFromParent }) => {

  const [classFromParentRef, setClassFromParent] = useState("");

  useEffect(() => {

    if (typeof classFromParent != undefined && classFromParent) {
      setClassFromParent(classFromParent);
    }

  }, [classFromParent]);

  return (
    <div className={`${classFromParentRef} thank-you--container`}>
      <div className="child-a--tyc">
        I convey my sincere thank to Farza. Under his awesome teaching guidence I created this very first Web3 based project.
      </div>
      <div className="child-b--tyc">
        <strong><i>buildspace.so is doing awesome. Big shout out to them.</i></strong>
      </div>
    </div>
  )
}

export default ThankYou;