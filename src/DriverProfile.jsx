import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DriverProfile = ({ driver, setData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [availability, setAvailability] = useState({
    from: null,
    till: null,
    reason: "",
  });

  const handleCheckboxChange = (field) => {
    setData((prevState) =>
      prevState.map((prevDriver) =>
        prevDriver.id === driver.id
          ? { ...prevDriver, [field]: !driver[field] }
          : prevDriver
      )
    );
  };

  const handleAddAvailability = () => {
    setData((prevState) =>
      prevState.map((prevDriver) =>
        prevDriver.id === driver.id
          ? {
              ...prevDriver,
              available: [...prevDriver.available, { ...availability }],
            }
          : prevDriver
      )
    );
    setAvailability({ from: null, till: null, reason: "" });
  };

  const handleReasonChange = (event) => {
    setAvailability((prevState) => ({
      ...prevState,
      reason: event.target.value,
    }));
  };

  const handleFromChange = (date) => {
    setAvailability((prevState) => ({
      ...prevState,
      from: date,
    }));
  };

  const handleTillChange = (date) => {
    setAvailability((prevState) => ({
      ...prevState,
      till: date,
    }));
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div>
      <img src={profilPic} alt={name} />
      {isEditing ? (
        <>
          <label>
            <input
              type="checkbox"
              name="isHappy"
              checked={isHappy}
              onChange={handleCheckboxChange}
            />
            Happy
          </label>
          <label>
            <input
              type="checkbox"
              name="isUnhappy"
              checked={isUnhappy}
              onChange={handleCheckboxChange}
            />
            Unhappy
          </label>
          <label>
            <input
              type="checkbox"
              name="isUnhappy2"
              checked={isUnhappy2}
              onChange={handleCheckboxChange}
            />
            Unhappy2
          </label>
          <label>
            <input
              type="checkbox"
              name="isUnhappy3"
              checked={isUnhappy3}
              onChange={handleCheckboxChange}
            />
            Unhappy3
          </label>
          <div>
            <label>
              From:
              <input
                type="date"
                name="fromDate"
                value={selectedFromDate}
                onChange={handleDateChange}
              />
            </label>
            <label>
              To:
              <input
                type="date"
                name="toDate"
                value={selectedToDate}
                onChange={handleDateChange}
              />
            </label>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Select Option</option>
              <option value="sick">Sick</option>
              <option value="vacation">Vacation</option>
              <option value="over-hours">Over-hours</option>
            </select>
            <button onClick={handleAddAvailability}>Add Availability</button>
          </div>
        </>
      ) : (
        <button onClick={toggleEditing}>Edit</button>
        )}
      </div>
    );
  };
  
  export default DriverProfile;
