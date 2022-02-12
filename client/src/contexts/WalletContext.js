import React, { createContext, useState } from "react";
import { ethers } from "ethers";
import abi from "./../utils/wavePortal.json";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [waveListVersion, setWaveListVersion] = useState(0);

  const [addWaveLoaderStatus, setAddWaveLoaderStatus] = useState(false);

  const [contractAddress] = useState(
    "0xB14a1C89C44e81046c84573c4fC7EC39d18D467b"
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
      setWaveListVersion((prevValue) => prevValue + 1);

      console.log("Wave has been added");
    } catch (error) {
      console.log(error);
    } finally {
      setAddWaveLoaderStatus(false);
    }
  };

  const retrieveAllWaves = async () => {
    try {
      const { ethereum } = window;
      const providerRef = new ethers.providers.Web3Provider(ethereum);

      const signer = providerRef.getSigner();

      const waveContract = new ethers.Contract(
        contractAddress,
        ContractABI,
        signer
      );

      let waves = await waveContract.getAllWaves();
      console.log(waves.length);
      return waves;
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <WalletContext.Provider
      value={{
        contractAddress,
        account,
        ContractABI,
        waveListVersion,
        handleConnectionRequest,
        retrieveAllWaves,
        handleWaveRequest,
        addWaveLoaderStatus,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
