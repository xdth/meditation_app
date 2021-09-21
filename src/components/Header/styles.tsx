import styled from 'styled-components';
 
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 100%;
  max-width: 100%;
  height: 100px;
  color: var(--color--primary);
  margin-bottom: 30px;
  `;
  
export const Logo = styled.div`
  margin-left: 30px;
  font-family: 'Cedarville Cursive', cursive;
  font-size: 45px;

  span {
    color: var(--color--secondary);
  }
`;