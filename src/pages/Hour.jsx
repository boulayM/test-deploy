import "../App.css";
import { useState, useEffect } from "react";


const Hours = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }, []);
  
    const tick = () => {
      setTime(new Date());
    };
  
    return (
      <div>
        <h1>Horloge</h1>
        <h2>Il est {time.toLocaleTimeString()}</h2>
      </div>
    );
  };

export default Hours;