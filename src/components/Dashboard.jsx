import React from "react";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";
import Header from "./utilities/Header";
import Footer from "./utilities/Footer";

const Dashboard = () => {
  const [drons, setDrons] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => setDrons(data.drones), []);

  return (
    <>
    <Header/>
        
    <div className="dashboard ">
      <h1> Dashboard</h1>
      <ul>
        {drons.map((drone) => (
          <li key={drone.id} onClick={() => navigate(`/drone/${drone.id}`)}>
            <figure><img src={drone.img} alt="drone" /></figure>
            <h2>{drone.id}</h2>
            <span>{drone.current_mission}</span>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
