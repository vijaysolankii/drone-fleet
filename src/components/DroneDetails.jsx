import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import data from '../data/data.json'
import Header from "./utilities/Header";
import Footer from "./utilities/Footer";

const DroneDetails = () => {
  const {id} = useParams();
  const [drone, setDrone] = useState(null);

  useEffect( () => {
    const selectedDrone = data.drones.find(selected => selected.id === id)
    setDrone(selectedDrone);
  }, [])
  

  if(!drone) {
    return <div> Loading... </div>
  }

  return (
    <>
    <Header />
    

    <div className='drone-detail'>
      <div className="graphics">
        <Link to='/dashboard'>  back </Link>
        <figure><img src={drone.img} alt="drone" /></figure>
      </div>
      <div className="content">
        <h2>{drone.id}</h2>
        <div className="status"> Status : <span>{drone.status}</span> </div>
        <div className="flight_hours"> Flight Hours : <span>{drone.flight_hours}</span> </div>
        <div className="battery_status"> Battery Status : <span>{drone.battery_status}</span> </div>
        <div className="last_known_location"> Last Known Location : <span>{drone.last_known_location}</span> </div>
        <div className="current_mission"> Current Mission : <span>{drone.current_mission}</span> </div>
        <div className="maintanance">
          <h3>Maintenance logs</h3>
          <ul>
            {
              drone.maintenance_logs.map(logs => (
                <li key={logs.date}>
                  {logs.description} by {logs.technician} on {logs.date} 
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default DroneDetails