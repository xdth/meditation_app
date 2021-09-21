import React, { useEffect, useState } from 'react';
import { AppContextProvider, useAppContext } from '../../hooks/appContext';
import { Container } from './styles';

const Timer: React.FC = () => {
  const {
    timerOn,
    handleToggleTimerOn,
    timerMinutes,
  } = useAppContext();

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] =  useState(0);

  useEffect(() => {
    if (timerOn === false || timerMinutes <= 0) {
      setMinutes(0);
      setSeconds(0);
    }
    setMinutes(timerMinutes);
  }, [timerOn, timerMinutes]);

  useEffect(()=>{
    let appInterval = setInterval(() => {
      seconds > 0 && setSeconds(seconds -1);
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(appInterval);
          handleToggleTimerOn(false);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(appInterval);
  }, [timerMinutes, minutes, seconds]);

  return (
    <AppContextProvider>
      <Container className="to-the-left">
        <h1>
        { timerMinutes === 0 && minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </h1>
      </Container>
    </AppContextProvider>
  );
}
 
export default Timer;