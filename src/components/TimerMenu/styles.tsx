import styled from 'styled-components';
 
export const Container = styled.section`
  height: 20vh;
  color: var(--color--primary);

  .selected-item {
    border: 2px solid var(--color--secondary);
  }
`;

export const Button = styled.button`
  border: 2px solid var(--color--primary);
  color: #fff;
  margin: 0 10px;
  padding: 5px;
  background: transparent;
  width: 150px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--color--secondary);
  }

  &:active {
    transform: translateY(4px);
  }
`;