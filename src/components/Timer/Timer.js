import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";



function Timer() {
  const settingsInfo = useContext(SettingsContext);
  const [mode, setMode] = useState('work'); 
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
    const interval = setInterval(() => {
      if (secondsLeftRef.current === 0) {
        return "Время вышло";
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [settingsInfo]);


  const totalSeconds = mode === 'work'
    ? settingsInfo.workMinutes * 60
    : settingsInfo.breakMinutes * 60;

  const percentage = Math.round(secondsLeft / totalSeconds * 100);
  const minutes = Math.floor(secondsLeft / 60);


  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;



  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: "#0dcaf0",
          tailColor: '#31d2f2',
        })} />
      <div style={{ marginTop: '0px' }}>
      </div>
      </div>
      );
}

      export default Timer;