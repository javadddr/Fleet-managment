import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Chart from "chart.js/auto";

const Navbar = ({ data }) => {
  const [isHappyCount, setIsHappyCount] = useState(0);
  const [isUnhappyCount, setIsUnhappyCount] = useState(0);
  const [isUnhappy2Count, setIsUnhappy2Count] = useState(0);
  const [isUnhappy3Count, setIsUnhappy3Count] = useState(0);
  const [totalTimeInStates, setTotalTimeInStates] = useState([]);

  useEffect(() => {
    
    const happyDrivers = data.filter((driver) => driver.isHappy);
    const unhappyDrivers = data.filter((driver) => driver.isUnhappy);
    const unhappy2Drivers = data.filter((driver) => driver.isUnhappy2);
    const unhappy3Drivers = data.filter((driver) => driver.isUnhappy3);

    setIsHappyCount(happyDrivers.length);
    setIsUnhappyCount(unhappyDrivers.length);
    setIsUnhappy2Count(unhappy2Drivers.length);
    setIsUnhappy3Count(unhappy3Drivers.length);

  
  }, [data]);

  return (
    <div className="navbar">
      <div className="navbar-left">
      <div className="state-count">
          <div className="happy-count">
            <h2>Happy {isHappyCount >1 ? "Bees" :"Bee"}: </h2>
            <p>{isHappyCount}</p>
          </div>
          <div className="unhappy-count">
            <h2>Unhappy {isUnhappyCount >1 ? "Bees" :"Bee"} (Driver): </h2>
            <p>{isUnhappyCount}</p>
          </div>
          <div className="unhappy-2-count">
            <h2>Unhappy {isUnhappy2Count >1 ? "Bees" :"Bee"} (Bee): </h2>
            <p>{isUnhappy2Count}</p>
          </div>
          <div className="unhappy-3-count">
            <h2>Native {isUnhappy3Count >1 ? "Bees" :"Bee"}: </h2>
            <p>{isUnhappy3Count}</p>
          </div>
        </div>
      </div>
      <div className="navbar-middle">
      <div className="state-count">
          <div className="happy-count">
            <h2>Happy: </h2>
            <p>{isHappyCount}</p>
          </div>
          <div className="unhappy-count">
            <h2>Unhappy: </h2>
            <p>{isUnhappyCount}</p>
          </div>
          <div className="unhappy-2-count">
            <h2>Unhappy 2: </h2>
            <p>{isUnhappy2Count}</p>
          </div>
          <div className="unhappy-3-count">
            <h2>Unhappy 3: </h2>
            <p>{isUnhappy3Count}</p>
          </div>
        </div>
      </div>
      
       
        <div className="state-chart-container">
          <canvas id="stateChart" />
        </div>
      
    </div>
  );
};

export default Navbar;
