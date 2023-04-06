import React, { useState } from "react";
import "./App.css";

const Profile = ({ data }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [availabilityReason, setAvailabilityReason] = useState("");

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleReasonChange = (e) => {
    setAvailabilityReason(e.target.value);
  };

  const handleAddAvailability = (id) => {
    const newData = [...data];
    const index = newData.findIndex((d) => d.id === id);
    const newAvailability = {
      from: fromDate,
      till: toDate,
      why: availabilityReason,
    };
    newData[index].available.push(newAvailability);
    setData(newData);
    setShowCalendar(false);
  };
  

  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={data.profilPic} alt="Profile" />
        <button>Edit</button>
      </div>
      <div className="profile-info">
        <h2>{data.name}</h2>
        <p>{data.location}</p>
        <p>{data.driver}</p>
        {isHappy ? (
          <p className="happy">Happy</p>
        ) : (
          <p className="unhappy">Unhappy</p>
        )}
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={isHappy}
              onChange={() => setIsHappy(!isHappy)}
            />
            Happy
          </label>
          <label>
            <input
              type="checkbox"
              checked={isUnhappy}
              onChange={() => setIsUnhappy(!isUnhappy)}
            />
            Unhappy
          </label>
          <label>
            <input
              type="checkbox"
              checked={isUnhappy2}
              onChange={() => setIsUnhappy2(!isUnhappy2)}
            />
            Unhappy 2
          </label>
          <label>
            <input
              type="checkbox"
              checked={isUnhappy3}
              onChange={() => setIsUnhappy3(!isUnhappy3)}
            />
            Unhappy 3
          </label>
        </div>
      {isUnhappy || isUnhappy2 || isUnhappy3 ? (
  <div>
    <label htmlFor="fromDate">From:</label>
    <input type="date" id="fromDate" onChange={handleFromDateChange} />
    <label htmlFor="toDate">To:</label>
    <input type="date" id="toDate" onChange={handleToDateChange} />
    <select value={selectedReason} onChange={handleReasonChange}>
      <option value="">Select a reason...</option>
      <option value="sick">Sick</option>
      <option value="vacation">Vacation</option>
      <option value="over-hours">Over-hours</option>
    </select>
    <button onClick={handleAddAvailability}>Save</button>
  </div>
) : (
  <div>
    <button onClick={() => setIsUnhappy(true)}>Unhappy</button>
    <button onClick={() => setIsUnhappy2(true)}>Unhappy 2</button>
    <button onClick={() => setIsUnhappy3(true)}>Unhappy 3</button>
    <button onClick={() => setIsHappy(true)}>Happy</button>
  </div>
)}
</div>
</div>
  );
};

export default Profile
