import React, { useState } from "react";

const Profile = ({ data, setData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFromDate, setSelectedFromDate] = useState("");
  const [selectedToDate, setSelectedToDate] = useState("");

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData((prevData) =>
      prevData.map((d) => {
        if (d.id === data.id) {
          return { ...d, [name]: checked };
        }
        return d;
      })
    );
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "fromDate") {
      setSelectedFromDate(value);
    } else {
      setSelectedToDate(value);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAddAvailability = () => {
    const newAvailability = {
      from: selectedFromDate,
      till: selectedToDate,
      why: selectedOption,
    };
    setData((prevData) =>
      prevData.map((d) => {
        if (d.id === data.id) {
          return { ...d, available: [...d.available, newAvailability] };
        }
        return d;
      })
    );
    setSelectedOption("");
    setSelectedFromDate("");
    setSelectedToDate("");
    setIsEditing(false);
  };

  const { name, profilPic, isHappy, isUnhappy, isUnhappy2, isUnhappy3 } = data;

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
