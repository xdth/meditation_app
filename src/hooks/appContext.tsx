import React, { createContext, useCallback, useState, useContext } from 'react';

interface IMedia {
  name: string;
  video: string;
  audio: string;
}

interface IAppContextData {
  appMedias: IMedia[];
  selectedMedia: number;
  timerOn: boolean;
  timerMinutes: number;
  audioMute: boolean;
  handleToggleMute(): void;
  handleSelectedMedia(newSelectedMedia: number): void;
  handleSetTimer(newTimerMinutes: number): void;
  handleToggleTimerOn(arg: boolean): void;
}

const appMedias = [
  {
    name: 'Fireplace',
    video: 'https://blog.lucaslop.es/meditation/fireplace.mp4',
    audio: 'https://blog.lucaslop.es/meditation/fireplace.mp3'
  },
  {
    name: 'Rain',
    video: 'https://blog.lucaslop.es/meditation/rain.mp4',
    audio: 'https://blog.lucaslop.es/meditation/rain.mp3'
  },
  {
    name: 'Beach',
    video: 'https://blog.lucaslop.es/meditation/beach.mp4',
    audio: 'https://blog.lucaslop.es/meditation/beach.mp3'
  },
  {
    name: 'Waterfall',
    video: 'https://blog.lucaslop.es/meditation/waterfall.mp4',
    audio: 'https://blog.lucaslop.es/meditation/waterfall.mp3'
  },
  {
    name: 'Creek',
    video: 'https://blog.lucaslop.es/meditation/creek.mp4',
    audio: 'https://blog.lucaslop.es/meditation/creek.mp3'
  }
];

const IAppContext = createContext<IAppContextData>({} as IAppContextData);

const AppContextProvider: React.FC = ({ children }) => {
  const [selectedMedia, setSelectedMedia] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(true);
  const [timerMinutes, setTimerMinutes] = useState<number>(0);
  const [audioMute, setAudioMute] = useState<boolean>(true); 

  const handleToggleMute = useCallback(() => {
    setAudioMute(!audioMute);
  }, [audioMute]);

  const handleSelectedMedia = useCallback((newSelectedMedia) => {
    setSelectedMedia(newSelectedMedia);
  }, []);
  
  const handleToggleTimerOn = useCallback((arg) => {
    arg === false
      ? setAudioMute(true)
      : setAudioMute(false);
    setTimerOn(arg);
  }, []);

  const handleSetTimer = useCallback((newTimerMinutes) => {
    newTimerMinutes > 0 && setAudioMute(false);
    setTimerMinutes(newTimerMinutes);
  }, [setTimerMinutes]);
  
  return (
    <IAppContext.Provider value={{ 
      appMedias,
      selectedMedia, 
      timerOn,
      timerMinutes, 
      audioMute, 
      handleToggleMute, 
      handleSelectedMedia, 
      handleSetTimer,
      handleToggleTimerOn
      }}>
      {children}
    </IAppContext.Provider>
  );
};

function useAppContext(): IAppContextData {
  const context = useContext(IAppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }

  return context;
}

export { AppContextProvider, useAppContext };