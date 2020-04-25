import styled from 'styled-components';

export const Container = styled.button`
  background: #ef0044;
  color: #fff;
  width: 100%;
  height: 60px;
  max-width: 200px;
  border: 1px solid transparent;
  transition-duration: 0.5s;
  font-weight: bold;
  font-size: 22px;

  &:hover {
    background: #bc0035;
  }
  cursor: ${(props) => props.notAllowed && 'not-allowed'};
`;
