import "./Timer.css";
import React, { useState, useEffect } from 'react';
const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeRemaining = () => {
    const now = new Date();
    let targetDate = new Date('2024-07-01'); 

    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    } else {
      targetDate = new Date('2024-12-01')
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Timer">
      <div className="time"><span className="count"><span  className="or">{days}</span> <br/> days</span></div>
      <div className="time"><span className="count"><span className="or"> {hours}</span> <br/> hours</span></div>
      <div className="time"><span className="count"><span  className="or">{minutes}</span> <br/> minutes</span></div>
      <div className="time"><span className="count"><span  className="or">{seconds}</span> <br/> seconds</span></div>
    </div>
  );
};

export default Timer;