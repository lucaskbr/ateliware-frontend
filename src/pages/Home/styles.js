import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  margin: 0;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: #ef0044;
  font-family: Gilroy, sans-serif;
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
`;

export const LanguagesBadge = styled.div`
  width: 100%;
  max-width: 100px;
  border: 1px solid #cacaca;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;

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
