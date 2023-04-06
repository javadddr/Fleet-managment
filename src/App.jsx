import { useState, useEffect } from "react";
import "./App.css"
import logom from "./majid.png"
import logok from "./kumar.png"
import logomo from "./obi.png"
import balazh from "./balazh.jpeg"
import Muarem from "./Muarem.jpeg"
import ahmad from "./ahmad.png"
import Mazen from "./Mazen.png"
import horger from "./horger.jpeg"
import Ajli from "./Ajli.png"
import viorel from "./viorel.png"
import Ahmedi from "./Ahmedi.jpeg"
import adnan from "./adnan.jpeg"
import andre from "./andre.png"
import frank from "./frank.png"
import asad from "./asad.jpeg"
import Tijani from "./Tijani.jpeg"
import omed from "./omed.jpeg"
import Marcin from "./Marcin.jpg"
import Hajir from "./Hajir.jpeg"
import tarek from "./tarek.jpeg"
import max from "./max.jpeg"
import Kai from "./Kai.jpeg"
import Marco from "./Marco.jpeg"




import EquipmentForm from "./EquipmentForm"
import Expenses from "./Expenses";
import Navbar from "./Navbar";
// import DriverList from "./DriverList";

import moment from 'moment';
const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Skinny (NE-SB-5605)",
      location: "Duisburg",
      driver:"Majid",
      area: "NRW",
      profilPic:logom,
      profilPic2:"",
      driver2:"",
      Tankkarte: "0010-0",
      TÜV: "02/2024",
      phone: "01522277770",
      slackID: "@majid",
      phone2: "",
      slackID2: "",
      isHappy: false,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: true,
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
      area: "NRW",
      profilPic:logomo,
      profilPic2:"",
      driver2:"",
      Tankkarte: "0012-0",
      TÜV: "08/2023",
      phone: "016252436474",
      slackID: "@obi",
      phone2: "",
      slackID2: "",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "240" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 3,
      name: "Patrik (NE-SB-5628)",
      location: "Düsseldorf",
      driver:"Kumar",
      area: "NRW",
      Tankkarte: "0014-0",
      driver2:"",
      TÜV: "04/2024",
      phone: "017341111474",
      slackID: "@kumar",
      phone2: "",
      slackID2: "",
      profilPic:logok,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 4,
      name: "Mathilda (NE-SB-5603)",
      location: "Frankfurt Main",
      driver:"Balazs Egri",
      area: "Frankfurt",
      Tankkarte: "0004-0",
      driver2:"",
      TÜV: "1/2024",
      phone: "017341111474",
      slackID: "@Balázs Egri ",
      phone2: "",
      slackID2: "",
      profilPic:balazh,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 5,
      name: "Titus (NE-SB-5607)",
      location: "Düsseldorf",
      driver:"Muarem",
      area: "NRW",
      Tankkarte: "0002-0",
      driver2:"",
      TÜV: "10/2023",
      phone: "017341111474",
      slackID: "@Muarem  ",
      phone2: "",
      slackID2: "",
      profilPic:Muarem,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 6,
      name: "Reynolds (NE-SB-5609)",
      location: "Leverkusen",
      driver:"Ahmad",
      area: "NRW",
      Tankkarte: "0008-0",
      driver2:"",
      TÜV: "12/2022",
      phone: "017341111474",
      slackID: "@Ahmad   ",
      phone2: "",
      slackID2: "",
      profilPic:ahmad,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 7,
      name: "Blackbeard (NE-SB-5611)",
      location: "Bochum",
      driver:"Mazen",
      area: "NRW",
      Tankkarte: "0001-0",
      driver2:"",
      TÜV: "09/2023",
      phone: "017341111474",
      slackID: "@Mazen Alfakore",
      phone2: "",
      slackID2: "",
      profilPic:Mazen,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 8,
      name: "Hugeney(NE-SB-5613)",
      location: "Troisdorf",
      driver:"Holger",
      area: "NRW",
      Tankkarte: "0007-0",
      driver2:"",
      TÜV: "09/2023",
      phone: "017341111474",
      slackID: "@Holger",
      phone2: "",
      slackID2: "",
      profilPic:horger,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 9,
      name: "Morton(NE-SB-5615)",
      location: "Hattingen",
      driver:"Ajli",
      area: "NRW",
      Tankkarte: "0003-0",
      driver2:"",
      TÜV: "09/2023",
      phone: "017341111474",
      slackID: "@Abdulhadi, Ajli ",
      phone2: "",
      slackID2: "",
      profilPic:Ajli,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 10,
      name: "Alfred(NE-SB-5617)",
      location: "Aachen",
      driver:"Voirel",
      area: "NRW",
      Tankkarte: "0009-0",
      driver2:"",
      TÜV: "08/2022",
      phone: "017341111474",
      slackID: "@Viorel Rocco",
      phone2: "",
      slackID2: "",
      profilPic:viorel,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 11,
      name: "Jeffrey(NE-SB-5621)",
      location: "Stuttgart",
      driver:"Ahmed",
      area: "Stuttgart",
      Tankkarte: "0006-0",
      driver2:"",
      TÜV: "12/2023",
      phone: "017341111474",
      slackID: "@ACHE",
      phone2: "",
      slackID2: "",
      profilPic:Ahmedi,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 12,
      name: "Kelly(NE-SB-5629)",
      location: "Köln",
      driver:"Ahnan",
      area: "NRW",
      Tankkarte: "",
      driver2:"Andre",
      TÜV: "",
      phone: "017341111474",
      slackID: "@Adnan ",
      phone2: "",
      slackID2: "@Andre",
      profilPic:adnan,
      profilPic2:andre,
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    
    {
      id: 14,
      name: "Lys(NE-SB-5631)",
      location: "Hamburg",
      driver:"Frank",
      area: "Hamburg",
      Tankkarte: "",
      driver2:"",
      TÜV: "",
      phone: "017663613202",
      slackID: "@FrankNewlove",
      phone2: "",
      slackID2: "",
      profilPic:frank,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
  
    {
      id: 15,
      name: "Kershaw(NE-SB-5633)",
      location: "Hamburg",
      driver:"Assadullah",
      area: "Hamburg",
      Tankkarte: "",
      driver2:"Hosein",
      TÜV: "",
      phone: "017663613202",
      slackID: "@Aessadulla Rezaie",
      phone2: "",
      slackID2: "No SlackID",
      profilPic:asad,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 16,
      name: "Hitfield(NE-SB-5635)",
      location: "Düsseldorf",
      driver:"Tijani",
      area: "NRW",
      Tankkarte: "",
      driver2:"",
      TÜV: "",
      phone: "017663613202",
      slackID: "@Tijani",
      phone2: "",
      slackID2: "",
      profilPic:Tijani,
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 17,
      name: "Kenny(NE-SB-5637)",
      location: "Bonn",
      driver:"Omed",
      area: "NRW",
      Tankkarte: "",
      driver2:"",
      TÜV: "",
      phone: "017663613202",
      slackID: "@Omed hakimi",
      phone2: "",
      slackID2: "",
      profilPic:omed,
      profilPic2:"",
      isHappy: false,
      isUnhappy: true,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 18,
      name: "John(NE-SB-5639)",
      location: "Mannheim",
      driver:"Marchin",
      area: "Mannheim",
      Tankkarte: "",
      driver2:"",
      TÜV: "",
      phone: "017663613202",
      slackID: "@Marcin D",
      phone2: "",
      slackID2: "",
      profilPic:Marcin,
      profilPic2:"",
      isHappy: false,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: true,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 19,
      name: "Henry(NE-SB-5641)",
      location: "Duisburg",
      driver:"Hajir",
      area: "NRW",
      Tankkarte: "",
      driver2:"",
      TÜV: "",
      phone: "017663613202",
      slackID: "@Agead hajir",
      phone2: "",
      slackID2: "",
      profilPic:Hajir,
      profilPic2:"",
      isHappy: false,
      isUnhappy: true,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 20,
      name: "Jelena(NE-SB-5643)",
      location: "Duisburg",
      driver:"Tarek",
      area: "NRW",
      Tankkarte: "",
      driver2:"",
      TÜV: "",
      phone: "017663613202",
      slackID: "@Tarek",
      phone2: "",
      slackID2: "",
      profilPic:tarek,
      profilPic2:"",
      isHappy: false,
      isUnhappy: true,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 21,
      name: "Lesley(NE-SB-5647)",
      location: "Bonn",
      driver:"Max",
      area: "NRW",
      Tankkarte: "",
      driver2:"",
      TÜV: "",
      phone: "017663613202",
      slackID: "@Max",
      phone2: "",
      slackID2: "",
      profilPic:max,
      profilPic2:"",
      isHappy: false,
      isUnhappy: true,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 22,
      name: "Brittany(NE-SB-5649)",
      location: "Mannheim",
      driver:"Kai",
      area: "Mannheim",
      Tankkarte: "",
      driver2:"Marco",
      TÜV: "",
      phone: "017663613202",
      slackID: "@Kai Schelian",
      phone2: "",
      slackID2: "",
      profilPic:Kai,
      profilPic2:Marco,
      isHappy: false,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: true,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 13,
      name: "Jordan(NE-SB-5623)",
      location: "Duisburg",
      driver:"Arne",
      area: "NRW",
      Tankkarte: "",
      driver2:"",
      TÜV: "",
      phone: "017341111474",
      slackID: "@arne ",
      phone2: "",
      slackID2: "",
      profilPic:"",
      profilPic2:"",
      isHappy: false,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: true,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
    {
      id: 23,
      name: "Rubbish George(NE-SB-5645)",
      location: "Stuttgart",
      driver:"Ruben",
      area: "Stuttgart",
      Tankkarte: "",
      driver2:"",
      TÜV: "",
      phone: "017646058020",
      slackID: "@Ruben Lindenmaier  ",
      phone2: "",
      slackID2: "",
      profilPic:"",
      profilPic2:"",
      isHappy: true,
      isUnhappy: false,
      timeInHappy: 0,
      timeInUnhappy: 0,
      isUnhappy2: false,
      isUnhappy3: false,
      timeInUnhappy2: 0,
      timeInUnhappy3: 0,
      equipments: [{ id: 1, equipment: "flex", checkbox: true }],
      expenses: [{ id: 1, what: "bremsen", when: "2023-01-23", cost: "50" }],
      available: [{ from: '24-04-2023',till: '27-04-2023',why:  "sick" }],
    },
  ]);
  
  function calculateRemainingDays(tuvDate) {
    // Convert the TÜV date string to a moment object
    const tuvMoment = moment(tuvDate, 'MM/YYYY');
    
    // Calculate the difference between the TÜV date and today's date in days
    const diffDays = tuvMoment.diff(moment(), 'months');
  
    // Return the remaining days
    return diffDays;
  }
  const remainingDays = calculateRemainingDays(data.TÜV);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData((prevData) => {
        return prevData.map((item) => {
          if (item.isHappy) {
            return {
              ...item,
              timeInHappy: item.timeInHappy + 1,
            };
          } else if (item.isUnhappy) {
            return {
              ...item,
              timeInUnhappy: item.timeInUnhappy + 1,
            };
          } else if (item.isUnhappy2) {
            return {
              ...item,
              timeInUnhappy2: item.timeInUnhappy2 + 1,
            };
          } else if (item.isUnhappy3) {
            return {
              ...item,
              timeInUnhappy3: item.timeInUnhappy3 + 1,
            };
          } else {
            return item;
          }
        });
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleDrop = (e, stateKey) => {
    const id = e.dataTransfer.getData("id");
    setData((prevData) =>
      prevData.map((item) =>
        item.id.toString() === id
          ? { ...item, isHappy: false, isUnhappy: false, isUnhappy2: false, isUnhappy3: false, [stateKey]: true }
          : item
      )
    );
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleEdit = (item) => {
    setSelectedData(item);
    setShowModal(true);
    setFormData({
      name: item.name,
      location: item.location,
      driver: item.driver,
      profilPic: item.profilPic,
      profilPic2: item.profilPic2,
      driver2: item.driver2,
      Tankkarte: item.Tankkarte,
      TÜV: item.TÜV,
      phone: item.phone,
      phone2: item.phone2,
      slackID: item.slackID,
      slackID2: item.slackID2,
      area: item.area
    });
  };

  const [showFormi, setShowFormi] = useState(false);
  const [selectedIdi, setSelectedIdi] = useState(null);

  const toggleForm = (id) => {
    
    setShowFormi(!showFormi);
    setSelectedIdi(id);
  

  };

  const handleSave = (e) => {
    e.preventDefault();
    const newData = data.map((item) =>
      item.id === selectedData.id ? { ...item, ...formData } : item
    );
    setData(newData);
    setSelectedData(null);
    setFormData(null);
    setShowModal(false);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((data) => ({ ...data, profilPic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileInputChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((data) => ({ ...data, profilPic2: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleExpensesChange = (id, field, value) => {
    setData(prevData => {
      const newData = prevData.map(item => {
        if (item.id === id) {
          const newExpenses = item.expenses.map(expense => {
            if (expense.id === field.id) {
              return { ...expense, [field.name]: value };
            } else {
              return expense;
            }
          });
          return { ...item, expenses: newExpenses };
        } else {
          return item;
        }
      });
      return newData;
    });
  };

  // const addEquipment = (equipment) => {
  //   setData(
  //     data.map((item) => {
  //       if (item.id === selectedIdi) {
  //         return {
  //           ...item,
  //           equipment: [...item.equipment, equipment]
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const deleteEquipment = (equipment) => {
  //   setData(
  //     data.map((item) => {
  //       if (item.id === selectedIdi) {
  //         return {
  //           ...item,
  //           equipment: item.equipment.filter((eq) => eq !== equipment)
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };
  // const onCancel = () => {
  //   setShowFormi(false);
  //   setSelectedIdi(null);
  // };
//////////////
   




function handleCheckboxChange(itemId, equipmentId) {
  setData(
    data.map((item) =>
      item.id === itemId
        ? {
            ...item,
            equipments: item.equipments.map((equipment) =>
              equipment.id === equipmentId ? { ...equipment, checkbox: !equipment.checkbox } : equipment
            ),
          }
        : item
    )
  );
}

function handleAddEquipment(itemId, equipment) {
  setData(
    data.map((item) =>
      item.id === itemId
        ? {
            ...item,
            equipments: [
              ...item.equipments,
              { id: Date.now(), equipment: equipment, checkbox: true },
            ],
          }
        : item
    )
  );
}

function handleDeleteEquipment(itemId, equipmentId) {
  setData(
    data.map((item) =>
      item.id === itemId
        ? {
            ...item,
            equipments: item.equipments.filter(
              (equipment) => equipment.id !== equipmentId
            ),
          }
        : item
    )
  );
}

function handleToggleForm(itemId) {
  setData(
    data.map((item) =>
      item.id === itemId ? { ...item, showEquipmentForm: !item.showEquipmentForm } : item
    )
  );
}


function handleToggleFormo(itemId) {
  setData(
    data.map((item) =>
      item.id === itemId ? { ...item, showExpensesi: !item.showExpensesi } : item
    )
  );
}

//////////////////////


  return (
    <div>
       <div>
      <Navbar data={data} />
      {/* <div>
      <DriverList data={data} setData={setData} />
    </div> */}
    </div>
    <div className="App">
      <div
        className="big-div happy"
        style={{ backgroundColor: "rgba(252, 232, 244, 1)", border: "1px solid black" ,minHeight:"900px" ,maxHeight:"900px", overflow: "auto"}}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "isHappy")}
      >
        <div className="titelhappybigdiv">
        <h2 className="topdivn01">Happy Bees <span className="numbern">{data.filter((item) => item.isHappy).length}</span></h2>
        </div>
        {data
          .filter((item) => item.isHappy)
          .map((item) => (
            <div
              key={item.id}
              className="draggable"
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
            >
                <div className="topdivn">
                <div className="infon">
                  <div >
                    
                  <p className="topdivnn">{item.name}</p>
                  <p className="topdivnl"><span className="homen">Homebase</span> : {item.location} </p> 
                  </div>
                  <div className="infon1">
                  {
                item.driver2 ?
                <div>
                <p className="topdivnd"><span className="homen">Driver 1</span>  {item.driver} </p>
                <p className="topdivnd"><span className="homen">Driver 2</span>  {item.driver2} </p>
                </div>
                :
                <p className="topdivnd"><span className="homen">Driver</span>  {item.driver} </p>
            }
              {
                item.phone2 || item.slackID2  ?
                <div>
                 <p className="topdivnd"><span className="homen">Contact 1</span>  Tell: {item.phone} , Slack: {item.slackID}</p> 
                 <p className="topdivnd"><span className="homen">Contact 2</span>  Tell: {item.phone2} , Slack: {item.slackID2}</p> 
                </div>
                :
                <p className="topdivnd"><span className="homen">Contact</span>  Tell: {item.phone} , Slack: {item.slackID}</p> 
            }

                  
                  
                  
                  <p className="topdivnd"><span className="homen">Tankkarte</span>  {item.Tankkarte}</p> 
                  <p className="topdivnd"><span className="homen">TÜV</span>  {item.TÜV} <span className={calculateRemainingDays(item.TÜV) > 4 ? "homen" : "homeni"}>Remaining: </span>{calculateRemainingDays(item.TÜV)} <span>months</span></p> 
                  
                  </div>
                  
                  
                </div>
                {item.profilPic2 && item.driver2 ?
                <div className="picno">
                <img className="picn2" src={item.profilPic}/>
                <img className="picn3" src={item.profilPic2}/>
              
              </div>
                
                :
                <div className="picn">
                  <img className="picn1" src={item.profilPic}/>
                
                </div>
                
              }
              
              </div>
            
              
              <div className="timesnative">
                <div className="timenative1">
                <p className="happyp23">Happy Time: {formatTime(item.timeInHappy)}</p>
                </div>
                <div className="timenative2">
                  
                  <p className="nativep1">Native Time: {formatTime(item.timeInUnhappy3)}</p>
                  <p className="ubbp">UBB Time: {formatTime(item.timeInUnhappy2)}</p>
                  <p className="ubdp">UBD Time: {formatTime(item.timeInUnhappy)}</p>
                </div>
                <div className="buttonn">
                  <button className="buttonnedit" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="buttonnequipment" onClick={() => handleToggleForm(item.id)}>Equipments</button>
                  <button className="buttonnequipment" onClick={() => handleToggleFormo(item.id)}>Costs</button>
                  
                </div>
              
              

              </div>
            </div>
          ))}
      </div>
      <div
        className="big-div unhappy"
        style={{ backgroundColor: "rgba(252, 232, 244, 1)", border: "1px solid black" ,minHeight:"900px" ,maxHeight:"900px", overflow: "auto"}}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "isUnhappy")}
      >
        <h2 className="topdivn0">Unhappy Bees (Driver) <span className="numbern">{data.filter((item) => item.isUnhappy).length}</span></h2>
        {data
          .filter((item) => item.isUnhappy)
          .map((item) => (
            <div
              key={item.id}
              className="draggable"
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
            >
               <div className="topdivn">
                <div className="infon">
                  <div >
                  <p className="topdivnn" >{item.name}</p>
                  <p className="topdivnl"><span className="homen">Homebase</span> : {item.location} </p> 
                  </div>
                  <div className="infon1">
                  {
                item.driver2 ?
                <div>
                <p className="topdivnd"><span className="homen">Driver 1</span>  {item.driver} </p>
                <p className="topdivnd"><span className="homen">Driver 2</span>  {item.driver2} </p>
                </div>
                :
                <p className="topdivnd"><span className="homen">Driver</span>  {item.driver} </p>
            }
              {
                item.phone2 || item.slackID2  ?
                <div>
                 <p className="topdivnd"><span className="homen">Contact 1</span>  Tell: {item.phone} , Slack: {item.slackID}</p> 
                 <p className="topdivnd"><span className="homen">Contact 2</span>  Tell: {item.phone2} , Slack: {item.slackID2}</p> 
                </div>
                :
                <p className="topdivnd"><span className="homen">Contact</span>  Tell: {item.phone} , Slack: {item.slackID}</p> 
            }
                  <p className="topdivnd"><span className="homen">Tankkarte</span>  {item.Tankkarte}</p> 
                  <p className="topdivnd"><span className="homen">TÜV</span>  {item.TÜV} <span className={calculateRemainingDays(item.TÜV) > 4 ? "homen" : "homeni"} >Remaining: </span>{calculateRemainingDays(item.TÜV)} <span>months</span></p> 
                  </div>
                  
                  
                </div>
                {item.profilPic2 && item.driver2 ?
                <div className="picno">
                <img className="picn2" src={item.profilPic}/>
                <img className="picn3" src={item.profilPic2}/>
              
              </div>
                
                :
                <div className="picn">
                  <img className="picn1" src={item.profilPic}/>
                
                </div>
                
              }
              </div>
            
              
              <div className="timesnative">
                <div className="timenative1">
                <p className="ubdp2">UBD Time: {formatTime(item.timeInUnhappy)}</p>
                  
                </div>
                <div className="timenative2">
                  <p className="happyp">Happy Time: {formatTime(item.timeInHappy)}</p>
                  <p className="nativep2">Native Time: {formatTime(item.timeInUnhappy3)}</p>
                  <p className="ubbp">UBB Time: {formatTime(item.timeInUnhappy2)}</p>
                  
                </div>
                <div className="buttonn">
                  <button className="buttonnedit" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="buttonnequipment" onClick={() => handleToggleForm(item.id)}>Equipments</button>
                  <button className="buttonnequipment" onClick={() => handleToggleFormo(item.id)}>Costs</button>
                  
                </div>
              
              

              </div>
            </div>
          ))}
      </div>
      <div
        className="big-div unhappy2"
        style={{ backgroundColor: "rgba(252, 232, 244, 1)", border: "1px solid black" ,minHeight:"900px" ,maxHeight:"900px", overflow: "auto"}}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "isUnhappy2")}
      >
        <h2 className="topdivn1">Unhappy Bees (Bee) <span className="numbern">{data.filter((item) => item.isUnhappy2).length}</span></h2>
        {data
          .filter((item) => item.isUnhappy2)
          .map((item) => (
            <div
              key={item.id}
              className="draggable"
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
            >
              <div className="topdivn">
                <div className="infon">
                  <div >
                  <p className="topdivnn" >{item.name}</p>
                  <p className="topdivnl"><span className="homen">Homebase</span> : {item.location} </p> 
                  </div>
                  <div className="infon1">
                  {
                item.driver2 ?
                <div>
                <p className="topdivnd"><span className="homen">Driver 1</span>  {item.driver} </p>
                <p className="topdivnd"><span className="homen">Driver 2</span>  {item.driver2} </p>
                </div>
                :
                <p className="topdivnd"><span className="homen">Driver</span>  {item.driver} </p>
            }
              {
                item.phone2 || item.slackID2  ?
                <div>
                 <p className="topdivnd"><span className="homen">Contact 1</span>  Tell: {item.phone} , Slack: {item.slackID}</p> 
                 <p className="topdivnd"><span className="homen">Contact 2</span>  Tell: {item.phone2} , Slack: {item.slackID2}</p> 
                </div>
                :
                <p className="topdivnd"><span className="homen">Contact</span>  Tell: {item.phone} , Slack: {item.slackID}</p> 
            }
                  <p className="topdivnd"><span className="homen">Tankkarte</span>  {item.Tankkarte}</p> 
                  <p className="topdivnd"><span className="homen">TÜV</span>  {item.TÜV} <span className={calculateRemainingDays(item.TÜV) > 4 ? "homen" : "homeni"}>Remaining: </span>{calculateRemainingDays(item.TÜV)} <span>months</span></p> 
                  </div>
                  
                  
                </div>
                {item.profilPic2 && item.driver2 ?
                <div className="picno">
                <img className="picn2" src={item.profilPic}/>
                <img className="picn3" src={item.profilPic2}/>
              
              </div>
                
                :
                <div className="picn">
                  <img className="picn1" src={item.profilPic}/>
                
                </div>
                
              }
              </div>
            
              
              <div className="timesnative">
                <div className="timenative1">
                <p className="ubbp1">UBB Time: {formatTime(item.timeInUnhappy2)}</p>
                  
                </div>
                <div className="timenative2">
                  <p className="nativep1">Native Time: {formatTime(item.timeInUnhappy3)}</p>
                  <p className="happyp">Happy Time: {formatTime(item.timeInHappy)}</p>
                  
                  <p className="ubdp">UBD Time: {formatTime(item.timeInUnhappy)}</p>
                </div>
                <div className="buttonn">
                  <button className="buttonnedit" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="buttonnequipment" onClick={() => handleToggleForm(item.id)}>Equipments</button>
                  <button className="buttonnequipment" onClick={() => handleToggleFormo(item.id)}>Costs</button>
                  
                </div>
              
              

              </div>
            </div>
          ))}
      </div>
      <div
        className="big-div unhappy3"
        style={{ backgroundColor: "rgba(252, 232, 244, 1)", border: "1px solid black" ,minHeight:"900px" ,maxHeight:"900px", overflow: "auto"}}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "isUnhappy3")}
      >
        <h2 className="topdivn2">Native Bees <span className="numbern">{data.filter((item) => item.isUnhappy3).length}</span></h2>
        {data
          .filter((item) => item.isUnhappy3)
          .map((item) => (
            
            <div
              key={item.id}
              className="draggable"
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
            >
              <div className="topdivn">
                <div className="infon">
                  <div >
                  <p className="topdivnn" >{item.name}</p>
                  <p className="topdivnl"><span className="homen">Homebase</span> : {item.location} </p> 
                  </div>
                  <div className="infon1">
                  {
                item.driver2 ?
                <div>
                <p className="topdivnd"><span className="homen">Driver 1</span>  {item.driver} </p>
                <p className="topdivnd"><span className="homen">Driver 2</span>  {item.driver2} </p>
                </div>
                :
                <p className="topdivnd"><span className="homen">Driver</span>  {item.driver} </p>
            }
              {
                item.phone2 || item.slackID2  ?
                <div>
                 <p className="topdivnd"><span className="homen">Contact 1</span>  Tell: {item.phone} , Slack: {item.slackID}</p> 
                 <p className="topdivnd"><span className="homen">Contact 2</span>  Tell: {item.phone2} , Slack: {item.slackID2}</p> 
                </div>
                :
                <p className="topdivnd"><span className="homen">Contact</span>  Tell: {item.phone} , Slack: {item.slackID}</p> 
            }
                  <p className="topdivnd"><span className="homen">Tankkarte</span>  {item.Tankkarte}</p> 
                  <p className="topdivnd"><span className="homen">TÜV</span>  {item.TÜV} <span className={calculateRemainingDays(item.TÜV) > 4 ? "homen" : "homeni"}>Remaining: </span>{calculateRemainingDays(item.TÜV)} <span>months</span></p> 
                  </div>
                  
                  
                </div>
                {item.profilPic2 && item.driver2 ?
                <div className="picno">
                <img className="picn2" src={item.profilPic}/>
                <img className="picn3" src={item.profilPic2}/>
              
              </div>
                
                :
                <div className="picn">
                  <img className="picn1" src={item.profilPic}/>
                
                </div>
                
              }
              </div>
            
              
              <div className="timesnative">
                <div className="timenative1">
                  <p className="nativep">Native Time: {formatTime(item.timeInUnhappy3)}</p>
                </div>
                <div className="timenative2">
                  <p className="happyp">Happy Time: {formatTime(item.timeInHappy)}</p>
                  <p className="ubbp">UBB Time: {formatTime(item.timeInUnhappy2)}</p>
                  <p className="ubdp">UBD Time: {formatTime(item.timeInUnhappy)}</p>
                </div>
                <div className="buttonn">
                  <button className="buttonnedit" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="buttonnequipment" onClick={() => handleToggleForm(item.id)}>Equipments</button>
                  <button className="buttonnequipment" onClick={() => handleToggleFormo(item.id)}>Costs</button>
                  {/* {showFormi && selectedIdi === item.id && (
            <EquipmentForm
              equipment={item.equipment}
              addEquipment={addEquipment}
              deleteEquipment={deleteEquipment}
              onCancel={onCancel} // Pass onCancel prop to EquipmentForm
            />
          )} */}
                  
                </div>
              
              

              </div>
             
            </div>
          ))}
          {data.map((item) => (
        <div key={item.id}>
          {/* your div that shows the data */}
          
          {item.showExpensesi && (
          <Expenses 
          expenses={item.expenses} 
          handleClick={()=>handleToggleFormo(item.id)}
          setEquipmentsi={(equipments) =>
            setData(
              data.map((i) =>
                i.id === item.id ? { ...i, expenses: equipments } : i
              )
            )
          }
          
          />
          )}
        </div>
      ))}
      



      {data.map((item) => (
        <div key={item.id}>
          {/* <h2>{item.name}</h2>
          <p>Location: {item.location}</p>
          <p>Driver: {item.driver}</p>
          <img src={item.profilPic} alt="Profile" /> */}
          {/* <button onClick={() => handleToggleForm(item.id)}>Equipments</button> */}
          {item.showEquipmentForm && (
            <EquipmentForm
              equipments={item.equipments}
              handleClick={()=>handleToggleForm(item.id)} 
              
              setEquipments={(equipments) =>
                setData(
                  data.map((i) =>
                    i.id === item.id ? { ...i, equipments: equipments } : i
                  )
                )
              }
              handleAddEquipment={(equipment) => handleAddEquipment(item.id, equipment)}
              handleDeleteEquipment={(equipmentId) =>
                handleDeleteEquipment(item.id, equipmentId)
              }
            />
          )}
          
          {/* <hr /> */}
        </div>
      ))}

        {showModal && (
        <div className="vivi">
          <img src="./logo1.svg"/>
          <form className="vivi" onSubmit={handleSave}>
            <div className="titlepop">
            
            <h2  id="titlepoph"> Modify the Beevan and the driver</h2>
            </div>
           <div className="bodypop">
            <div className="name">
            <label className="name-pop">
              Name:
              </label>
              
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, name: e.target.value }))
                }
              />
            </div>
            
            <div className="location">
            <label className="Location-pop">
              Location:
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData((data) => ({
                    ...data,
                    location: e.target.value,
                  }))
                }
              />
            </div>
            <div className="location">
            <label className="Location-pop">
              Area:
              </label>
              <input
                type="text"
                value={formData.area}
                onChange={(e) =>
                  setFormData((data) => ({
                    ...data,
                    area: e.target.value,
                  }))
                }
              />
            </div>
             
            <div className="tank">
            <label className="Tankkarte-pop">
              Tankkarte:
              </label>
              <input
                type="text"
                value={formData.Tankkarte}
                onChange={(e) =>
                  setFormData((data) => ({
                    ...data,
                    Tankkarte: e.target.value,
                  }))
                }
              />
            </div>
            
            <div className="tuv">
            <label className="TÜV-pop">
              TÜV:
              </label>
              <input
                type="text"
                value={formData.TÜV}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, TÜV: e.target.value }))
                }
              />
            </div>
             
            <label id="buttonnediti">First Driver </label>
            <div className="driverone">
            <label className="Driver-pop">
              Driver:
              </label>
              <input
                type="text"
                value={formData.driver}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, driver: e.target.value }))
                }
              />
             <label className="Profile-picture-pop">
                Profile Picture:
              </label>
              <input type="file" onChange={handleFileInputChange} />
            <div className="contactone">
            <label className="Phone-pop">
              Phone:
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, phone: e.target.value }))
                }
              />
            <label className="Slack-pop">
              SlackID:
              </label>
              <input
                type="text"
                value={formData.slackID}
                onChange={(e) =>
                  setFormData((data) => ({
                    ...data,
                    slackID: e.target.value,
                  }))
                }
              />
            </div>
            </div>
            <label id="buttonnediti">Second Driver</label>
            <div className="drivertwo">
            
            <label className="Driver-pop">
              Driver:
              </label>
              <input
                type="text"
                value={formData.driver2}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, driver2: e.target.value }))
                }
              />
              <label className="Profile-picture-pop">
                Profile Picture:
              </label>
              <input  type="file" onChange={handleFileInputChange2} />
            
            
              <div className="contacttwo">
              <label className="Phone-pop">
              Phone:
              </label>
              <input
                type="text"
                value={formData.phone2}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, phone2: e.target.value }))
                }
              />
            
            
              <label className="Slack-pop">
              SlackID:
              </label>
              <input
                type="text"
                value={formData.slackID2}
                onChange={(e) =>
                  setFormData((data) => ({
                    ...data,
                    slackID2: e.target.value,
                  }))
                }
              />
              </div>
            </div>
            </div>
            <div className="btnpop">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setShowModal(false)}>Close</button>

            </div>
            
          </form>
        </div>
      
      )}
   
          




      </div>
    </div>
   
    </div>
  );
  
    };
    
    export default App;
    
    
    