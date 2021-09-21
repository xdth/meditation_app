import React from 'react';
import { Container } from './styles';
import MuteIcon from '../../assets/mute.svg';
import UnmuteIcon from '../../assets/unmute.svg';
import { AppContextProvider, useAppContext } from '../../hooks/appContext';

const Mute: React.FC = () => {
  const {
    // appMedias,
    // selectedMedia, 
    // timerMinutes, 
    audioMute, 
    handleToggleMute, 
    // handleSelectedMedia, 
    // handleSetTimer
  } = useAppContext();

  return (
    <AppContextProvider>
      <Container className="to-the-right">
          {audioMute
          ? <img onClick={handleToggleMute} src={MuteIcon} alt="muted" />
          : <img onClick={handleToggleMute} src={UnmuteIcon} alt="unmuted" />
          }
      </Container>
    </AppContextProvider>
  );
}
 
export default Mute;