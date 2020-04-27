import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 60px;
  max-width: 200px;
  background: #ef0044;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  border: 1px solid transparent;
  transition-duration: 0.5s;

  &:hover {
    background: #bc0035;
  }
  cursor: ${(props) => props.notAllowed && 'not-allowed'};
`;
