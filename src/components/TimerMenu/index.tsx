import React from 'react';
import { AppContextProvider, useAppContext } from '../../hooks/appContext';
import { Container, Button } from './styles';

const TimerMenu: React.FC = () => {
  const {
    timerMinutes,
    handleSetTimer,
    handleToggleTimerOn,
  } = useAppContext();

  function handleChooseOption(minutes: number) {
    handleToggleTimerOn(false);
    handleSetTimer(minutes);
  }

  return (
    <AppContextProvider>
      <Container className="to-the-left">
        <Button onClick={() => handleChooseOption(5)} className={timerMinutes === 5 ? "selected-item" : ""}>5 minutes</Button>
        <Button onClick={() => handleChooseOption(10)} className={timerMinutes === 10 ? "selected-item" : ""}>10 minutes</Button>
        <Button onClick={() => handleChooseOption(15)} className={timerMinutes === 15 ? "selected-item" : ""}>15 minutes</Button>
        <Button onClick={() => handleChooseOption(0)}>Reset timer</Button>
      </Container>
    </AppContextProvider>
  );
}
 
export default TimerMenu;