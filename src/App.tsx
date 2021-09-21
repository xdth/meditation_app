import React from 'react';
import { AppContextProvider } from './hooks/appContext';
import GlobalStyle from './styles/global';
import Background from './components/Background';
import Categories from './components/Categories';
import Header from './components/Header';
import Mute from './components/Mute';
import Timer from './components/Timer';
import TimerMenu from './components/TimerMenu';

function App() {
  return (
    <>
      <AppContextProvider>
        <Background />
        <Header />
        <Timer />
        <Categories />
        <TimerMenu />
        <Mute />
      </AppContextProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
