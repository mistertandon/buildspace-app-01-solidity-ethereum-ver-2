import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = ({ classFromParent }) => {
  const [classFromParentRef, setClassFromParent] = useState("");

  useEffect(() => {
    if (typeof classFromParent != undefined && classFromParent) {
      setClassFromParent(classFromParent);
    }
  }, [classFromParent]);

  return (
    <div className={`${classFromParentRef}contact--container`}>
      <div className="child-a--cc"></div>
      <div className="child-b--cc">
        In case of any help feel free to contact me at
      </div>
      <div className="child-c--cc">
        <address>
          enggparveshtandon@gmail.com
          <br />
          https://twitter.com/mistertandon
        </address>
      </div>
    </div>
  );
};

export default Contact;
