import React, { useState, useEffect, useContext } from "react";
import { WalletContext } from "../../contexts/WalletContext";
import "./WaveList.css";

const WaveList = ({ classFromParent }) => {
  const { retrieveAllWaves, waveListVersion } = useContext(WalletContext);

  const [classFromParentRef, setClassFromParent] = useState("");

  const [waveListArr, setWaveListArr] = useState([]);

  useEffect(() => {
    if (typeof classFromParent !== undefined && classFromParent) {
      console.log("How it can be");
      setClassFromParent(classFromParent);
    }
  }, [classFromParent]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const waveListSolidityObj = await retrieveAllWaves();
        let waveListTempArry = [];
        waveListSolidityObj.forEach((waveRef) => {
          waveListTempArry.push({
            message: waveRef.message,
            timestamp: waveRef.timestamp.toNumber(),
            waver: waveRef.waver,
          });
        });
        setWaveListArr(waveListTempArry);
      } catch (error) {
        console.log(error);
      }
    };

    asyncFunc();
  }, [waveListVersion]);

  const renderListHeaders = () => {
    return (
      Array.isArray(waveListArr) &&
      waveListArr.length > 0 && (
        <div className="wave-list__headers--wlc child-a--wlc">
          <div className="ca__heading--wlc ca-child-a--wlc">Message</div>
          <div className="ca__heading--wlc ca-child-b__heading--wlc">
            Timestamp
          </div>
          <div className="ca__heading--wlc ca-child-c__heading--wlc">
            Transaction ID
          </div>
        </div>
      )
    );
  };

  return (
    <div className={`${classFromParentRef}wave-list--container`}>
      {renderListHeaders()}
      {Array.isArray(waveListArr) && waveListArr.length > 0 && (
        <div className="wave-list-records--wlc">
          {waveListArr.map((wave, index) => (
            <div key={index} className="wave-list__record--wlc">
              <div className="wave-list-record__item--wlc wave-list-record__msg--wlc">
                {wave.message}
              </div>
              <div className="wave-list-record__item--wlc wave-list-record__timestamp--wlc">
                {wave.timestamp}
              </div>
              <div className="wave-list-record__item--wlc wave-list-record__txn--wlc">
                {wave.waver}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WaveList;
