import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import { WalletContext } from "../../contexts/WalletContext";

const Header = ({ classFromParent }) => {
  const { handleConnectionRequest } = useContext(WalletContext);

  const [classFromParentRef, setClassFromParent] = useState("");

  useEffect(() => {
    if (typeof classFromParent != undefined && classFromParent) {
      setClassFromParent(classFromParent);
    }
  }, [classFromParent]);

  return (
    <div className={`${classFromParentRef} header--container`}>
      <div className="child-a--hc">
        <div className="ca-child-a__navbar--hc">Navbar</div>
        <div className="ca-child-b__login--hc">
          <button onClick={handleConnectionRequest}>Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
