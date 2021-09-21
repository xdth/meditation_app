import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans Mono', monospace;
    background: #000000;
  }
 
  #root {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    --color--primary: #FFF;
    --color--secondary: #9a009a;
  }

  .to-the-left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 75%;
    max-width: 75%;
    margin: 10px 0;
  }

  .to-the-right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 20%;
    max-width: 20%;
    margin: 10px 0;
  }

  @media (max-width: 600px) {
    .to-the-left, .to-the-right {
      flex: 100%;
      max-width: 100%;
    }
`;