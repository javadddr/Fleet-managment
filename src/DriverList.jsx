import React from "react";
import  "./DriverProfile";

const DriverList = ({ data, setData }) => {
  return (
    <div>
      {data.map((driver) => (
        <DriverProfile key={driver.id} driver={driver} setData={setData} />
      ))}
    </div>
  );
};

export default DriverList;
