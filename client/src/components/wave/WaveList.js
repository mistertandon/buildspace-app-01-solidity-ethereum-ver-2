import React, { useState, useEffect } from "react";
import "./WaveList.css";

const waveListArrRef = [
  {
    message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    waver: "0xceb6c644bd08a6f6807e4dc89ccd859142785dc675130720c4468a957a862cd7",
    timestamp: "Feb-09-2022 05:19:37 PM +UTC",
  }, {
    message: "Message 2",
    waver: "0xceb6c644bd08a6f6807e4dc89ccd859142785dc675130720c4468a957a862cd7",
    timestamp: "Feb-10-2022 05:19:37 PM +UTC",
  },
  {
    message: "Message 3",
    waver: "0xceb6c644bd08a6f6807e4dc89ccd859142785dc675130720c4468a957a862cd7",
    timestamp: "Feb-11-2022 05:19:37 PM +UTC",
  },
  {
    message: "Message 4",
    waver: "0xceb6c644bd08a6f6807e4dc89ccd859142785dc675130720c4468a957a862cd7",
    timestamp: "Feb-12-2022 05:19:37 PM +UTC",
  },
  {
    message: "Message 5",
    waver: "0xceb6c644bd08a6f6807e4dc89ccd859142785dc675130720c4468a957a862cd7",
    timestamp: "Feb-13-2022 05:19:37 PM +UTC",
  },
];
const WaveList = ({ classFromParent }) => {

  const [classFromParentRef, setClassFromParent] = useState("");

  const [waveListArr, setWaveListArr] = useState(waveListArrRef);

  useEffect(() => {

    if (typeof classFromParent !== undefined && classFromParent) {
      console.log("How it can be");
      setClassFromParent(classFromParent);
    }

  }, [classFromParent]);

  const renderListHeaders = () => {

    return Array.isArray(waveListArr)
      && waveListArr.length > 0 && (
        <div className="wave-list__headers--wlc child-a--wlc">
          <div className="ca__heading--wlc ca-child-a--wlc">Message</div>
          <div className="ca__heading--wlc ca-child-b__heading--wlc">Timestamp</div>
          <div className="ca__heading--wlc ca-child-c__heading--wlc">Transaction ID</div>
        </div>
      )
  }

  return (
    <div className={`${classFromParentRef}wave-list--container`}>
      {
        renderListHeaders()
      }
      {

        Array.isArray(waveListArr)
        && waveListArr.length > 0
        && (
          <div className="wave-list-records--wlc">
            {
              waveListArr.map((wave, index) => (
                <div key={index} className="wave-list__record--wlc">
                  <div className="wave-list-record__item--wlc wave-list-record__msg--wlc">{wave.message}</div>
                  <div className="wave-list-record__item--wlc wave-list-record__timestamp--wlc">{wave.timestamp}</div>
                  <div className="wave-list-record__item--wlc wave-list-record__txn--wlc">{wave.waver}</div>
                </div>
              ))
            }
          </div>
        )

      }

    </div>

  )
}

export default WaveList;