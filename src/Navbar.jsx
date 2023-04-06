import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logosb from "./logo1.svg"

const Navbar = ({ data }) => {
  const [isHappyCount, setIsHappyCount] = useState(0);
  const [isUnhappyCount, setIsUnhappyCount] = useState(0);
  const [isUnhappy2Count, setIsUnhappy2Count] = useState(0);
  const [isUnhappy3Count, setIsUnhappy3Count] = useState(0);
  
  const [isHappyCount1, setIsHappyCount1] = useState(0);
  const [isUnhappyCount2, setIsUnhappyCount2] = useState(0);
  const [isUnhappy2Count3, setIsUnhappy2Count3] = useState(0);
  const [isUnhappy3Count4, setIsUnhappy3Count4] = useState(0);

  const [happydriver1, sethappydriver1] = useState(0);
  const [happydriver2, sethappydriver2] = useState(0);
  const [happydriver3, sethappydriver3] = useState(0);

  useEffect(() => {
    
    const happyDrivers = data.filter((driver) => driver.isHappy);
    const unhappyDrivers = data.filter((driver) => driver.isUnhappy);
    const unhappy2Drivers = data.filter((driver) => driver.isUnhappy2);
    const unhappy3Drivers = data.filter((driver) => driver.isUnhappy3);
    

    const happyDrivers1 = data.filter((driver) => driver.area==="NRW");
    const unhappyDrivers2 = data.filter((driver) => driver.area==="Stuttgart");
    const unhappy2Drivers3 = data.filter((driver) => driver.area==="Hamburg");
    const unhappy3Drivers4 = data.filter((driver) => driver.area==="Frankfurt");

    const unhappy2Drivers7 = data.filter((driver) => driver.isHappy && driver.driver!=="");
    const unhappy3Drivers8 = data.filter((driver) => driver.isHappy &&  driver.driver2!=="");
    const unhappy3Drivers9 = data.filter((driver) => driver.isHappy &&  driver.driver2!=="" && driver.driver!=="");


    setIsHappyCount(happyDrivers.length);
    setIsUnhappyCount(unhappyDrivers.length);
    setIsUnhappy2Count(unhappy2Drivers.length);
    setIsUnhappy3Count(unhappy3Drivers.length);


    setIsHappyCount1(happyDrivers1.length);
    setIsUnhappyCount2(unhappyDrivers2.length);
    setIsUnhappy2Count3(unhappy2Drivers3.length);
    setIsUnhappy3Count4(unhappy3Drivers4.length);

    sethappydriver1(unhappy2Drivers7.length)
    sethappydriver2(unhappy3Drivers8.length)
    sethappydriver3(unhappy3Drivers9.length)
    
  
  }, [data]);

  return (
    <div className="navbar">
      
      <div className="navbar-left">
        <div className="Beevans1">
          <h1 className="titleo1">Beevans</h1>
          <span className="braket1"> &#124; </span> 
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
        
      </div>
      <div className="navbar-left">
        <div className="Beevans1">
          <h1 className="titleo1">Areas</h1>
          <span className="braket1"> &#124; </span> 
        <div className="state-count">
          <div className="happy-count1">
            <h2>NRW {isHappyCount1 >1 ? "Bees" :"Bee"}: </h2>
            <p>{isHappyCount1}</p>
          </div>
          <div className="unhappy-count1">
            <h2> Stuttgart {isUnhappyCount2 >1 ? "Bees" :"Bee"} : </h2>
            <p>{isUnhappyCount2}</p>
          </div>
          <div className="unhappy-2-count1">
            <h2>Hamburg {isUnhappy2Count3 >1 ? "Bees" :"Bee"} : </h2>
            <p>{isUnhappy2Count3}</p>
          </div>
          <div className="unhappy-3-count1">
            <h2>Frankfurt {isUnhappy3Count4 >1 ? "Bees" :"Bee"}: </h2>
            <p>{isUnhappy3Count4}</p>
          </div>
        </div>
        </div>
        
      </div>
      
      <div className="Beevans1">
      <h1 className="titleo1">Drivers</h1>
          <span className="braket2"> &#124; </span> 
         <div className="navbar-middle">
      <div className="state-count">
          <div className="happy-count3">
            <h2>Happy Drivers: </h2>
            <p>{happydriver1+happydriver2}</p>
          </div>
          <div className="unhappy-count3">
            <h2>UnHappy Drivers: </h2>
            <p>{data.length - (happydriver1+happydriver2)}</p>
          </div>
          <div className="unhappy-count4">
            <h2>Bees with 2 Drivers: </h2>
            <p>{happydriver3}</p>
          </div>
          
          
        </div>
        </div>
      
        </div>
        <div class="logo-container">
        
        <img className="logosb" src={logosb}  width="300" height="60"></img>
      </div>
    </div>
  );
};

export default Navbar;
