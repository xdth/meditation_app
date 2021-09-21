import styled from 'styled-components';
 
export const Container = styled.section`
  height: 50vh;
  color: var(--color--primary);
  font-size:6em;

  @media (max-width: 600px) {
    h1 {
      font-size:1em;
    }
  }
`;