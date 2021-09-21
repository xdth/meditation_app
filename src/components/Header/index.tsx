import React from 'react';
import { Container, Logo } from './styles';
 
const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Logo id="logo"><b>Meditation</b><span>App</span></Logo>
      </Container>
    </>
  );
}
 
export default Header;