import React, { useEffect } from 'react';
import { AppContextProvider, useAppContext } from '../../hooks/appContext';
import { Video } from './styles';

const Background: React.FC = () => {
  const {
    appMedias,
    selectedMedia,
    audioMute
  } = useAppContext();

  let videoFile = appMedias[selectedMedia].video;
  let audioFile = appMedias[selectedMedia].audio;

  useEffect(() => {
    let audio: HTMLAudioElement | null = (document.getElementById('audio') as HTMLAudioElement);

    if (audioMute) {
      audio.autoplay = false;
      audio.pause();
    } else {
      audio.autoplay = true;
      audio.play();
    }
  }, [audioMute, selectedMedia]);

  return (
    <AppContextProvider>
      <>
      <Video key={appMedias[selectedMedia].video} autoPlay muted loop>
        <source src={videoFile} type="video/mp4" />
      </Video>
      <audio id="audio" key={appMedias[selectedMedia].audio} loop>
        <source src={audioFile} type="audio/mpeg"/>
      </audio>
      </>
    </AppContextProvider>
  );
}

export default Background;