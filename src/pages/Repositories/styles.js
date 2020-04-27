import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: Gilroy, sans-serif;
  color: #ef0044;
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  margin-top: 50px;
`;

export const RepositoriesList = styled.div`
  margin-top: 50px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Pagination = styled.div`
  width: 100%;
  max-width: 700px;
  background: #f7f7f7;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PaginationButton = styled.button.attrs((props) => ({
  type: 'button',
}))`
  background: #f7f7f7;
  font-weight: 600;
  border: 4px;
  padding: 15px 30px;
  border-radius: 0px;
  cursor: ${(props) => props.allowed && 'not-allowed'};
  &:hover {
    background: #eae8e8;
    transition: 0.2s;
  }
`;
