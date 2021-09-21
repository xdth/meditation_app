import styled from 'styled-components';
 
export const Container = styled.section`
  padding: 10px 0;
  color: var(--color--primary);
  font-size: 1.2em;

  li {
    list-style-type: none;
  }

  .selected-category {
    color: var(--color--secondary);
  }
`;


export const Button = styled.section`
  text-decoration: none;
  color: var(--color--primary);

  &:hover {
    color: var(--color--secondary);
    cursor: pointer;
  }
`;