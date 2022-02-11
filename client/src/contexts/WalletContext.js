import React, { createContext, useState } from "react";
import { ethers } from "ethers";
import abi from "./../utils/wavePortal.json";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [addWaveLoaderStatus, setAddWaveLoaderStatus] = useState(false);

  const [contractAddress] = useState(
    "0xa338e049177aae1db1f9710ede0d75b1cb519642"
  );

  const { abi: ContractABI } = abi;

  // Metamask user id
  const [account, setAccount] = useState("");

  const handleConnectionRequest = async () => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accountRef = await provider.send("eth_requestAccounts", []);

      Array.isArray(accountRef) &&
        accountRef.length > 0 &&
        setAccount(accountRef[0]);
    } else {
      console.log("Wallet couldn't find");
    }
  };

  const handleWaveRequest = async (message) => {
    setAddWaveLoaderStatus(true);
    try {
      const { ethereum } = window;
      const providerRef = new ethers.providers.Web3Provider(ethereum);

      const signer = providerRef.getSigner();

      const waveContract = new ethers.Contract(
        contractAddress,
        ContractABI,
        signer
      );

      let waveTxn = await waveContract.wave(message);
      await waveTxn.wait();
      console.log("Wave has been added");
    } catch (error) {
      console.log(error);
    } finally {
      setAddWaveLoaderStatus(false);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        contractAddress,
        account,
        ContractABI,
        handleConnectionRequest,
        handleWaveRequest,
        addWaveLoaderStatus,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
