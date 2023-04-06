import { useState } from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Skinny (NE-SB-5605)",
      location: "Duisburg",
      driver:"Majid",
      profilPic:"",
      profilPic2:"",
      driver2:"Hajir",
      Tankkarte: "0010-0",
      TÜV: "02/2024",
      phone: "01522277770",
      slackID: "@majid",
      phone2: "015222675000",
      slackID2: "@hajir",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "150" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 2,
      name: "Cotta (NE-SB-5619)",
      location: "Dortmund",
      driver:"Obi",
      profilPic:"",
      profilPic2:"",
      driver2:"",
      Tankkarte: "0012-0",
      TÜV: "08/2023",
      phone: "016252436474",
      slackID: "@obi",
      phone2: "",
      slackID2: "",
      isHappy: false,
      isUnhappy: true,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "240" }],
      available: [{ from: '14-04-2023',till: '27-04-2023',why:  "vacation" }],
    },
  ]);

  return (
    <div className="App">
      {data && data.map((item) => (
        <Profile key={item.id} data={item} setData={setData} />
      ))}
    </div>
  );
}

export default App;
