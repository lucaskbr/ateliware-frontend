import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Title = styled.h1`
  font-family: Gilroy, sans-serif;
  color: #222;
  font-weight: bold;
  font-size: 40px;
`;

export const LanguagesBadge = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cacaca;
  border-radius: 5px;
  margin: 5px;

  transition: 1s;

  &:hover {
    border-color: #ef0044;
  }

  border-color: ${(props) => (props.isSelected ? '#ef0044' : '#cacaca')};
  border-width: ${(props) => (props.isSelected ? '2px' : '1px')};
`;

export const Languages = styled.img`
  width: 100%;
  height: 100%;
  max-width: 80px;
`;
