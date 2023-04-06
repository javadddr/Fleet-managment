import { useState } from "react";
import "./App.css"
function EquipmentForm({ equipments, setEquipments,handleClick } ) {
  const [newEquipment, setNewEquipment] = useState("");

  function handleAddEquipment() {
    setEquipments([...equipments, { id: Date.now(), equipment: newEquipment, checkbox: true }]);
    setNewEquipment("");
  }

  function handleDeleteEquipment(equipmentId) {
    setEquipments(equipments.filter((equipment) => equipment.id !== equipmentId));
  }

  function handleCheckboxChange(equipmentId) {
    setEquipments(
      equipments.map((equipment) =>
        equipment.id === equipmentId ? { ...equipment, checkbox: !equipment.checkbox } : equipment
      )
    );
  }

 

  return (
    <div className="vivi">
      
      <div className="equipmentdiv">
      <h3 className="Equipmentstitle">Equipments</h3>
        <div className="divhas">
        
      
       <div className="Equipmentslist">
       {equipments.map((equipment) => (
        <div className="Equipmentslist2" key={equipment.id}>
         <div className="Equipmentslist3">
         <input
            type="checkbox"
            checked={equipment.checkbox}
            onChange={() => handleCheckboxChange(equipment.id)}
          />
          {equipment.equipment}
         </div>
          <button className="deletecost" onClick={() => handleDeleteEquipment(equipment.id)}>Delete</button>
        </div>
        
      ))}
       </div>
      </div>
      <div>
        <div className="addbtn">
        <input value={newEquipment} onChange={(e) => setNewEquipment(e.target.value)} />
        <button className="submito" onClick={handleAddEquipment}>Add</button>
        </div>
        <div className="closebtne">
        <button className="closebtn" onClick={handleClick} >close</button>
        </div>
        
        
        
        
      </div>
      </div>
      
  
    </div>
  );
}
export default EquipmentForm;
