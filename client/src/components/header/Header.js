import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import { WalletContext } from "../../contexts/WalletContext";
// import abi from "./../../utils/wavePortal.json";

const Header = ({ classFromParent }) => {
  const { handleConnectionRequest } = useContext(WalletContext);
  //   const { abi: ContractABI } = abi;
  //   console.log(ContractABI);

  const [classFromParentRef, setClassFromParent] = useState("");

  //   const [account, setAccount] = useState("");

  useEffect(() => {
    if (typeof classFromParent != undefined && classFromParent) {
      setClassFromParent(classFromParent);
    }
  }, [classFromParent]);

  //   const handleConnectionRequest = async () => {
  //     const { ethereum } = window;

  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const accountRef = await provider.send("eth_requestAccounts", []);

  //       Array.isArray(accountRef) &&
  //         accountRef.length > 0 &&
  //         setAccount(accountRef[0]);

  //       const signer = provider.getSigner();
  //       console.log("accountRef", accountRef);
  //       console.log("signer", signer);
  //     }
  //   };

  //   const handleWaveRequest = async () => {
  //     const { ethereum } = window;
  //     const providerRef = new ethers.providers.Web3Provider(ethereum);

  //     const signer = providerRef.getSigner();

  //     const waveContract = new ethers.Contract(
  //       contractAddress,
  //       ContractABI,
  //       signer
  //     );
  //     console.log(waveContract);
  //     try {
  //       let waveCount = await waveContract.getAllWaves();
  //       console.log("waveCount", waveCount);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div className={`${classFromParentRef} header--container`}>
      <div className="child-a--hc">
        <div className="ca-child-a__navbar--hc">Navbar</div>
        <div className="ca-child-b__login--hc">
          <button onClick={handleConnectionRequest}>Connect</button>
          {/* <button onClick={handleWaveRequest}>wave</button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
