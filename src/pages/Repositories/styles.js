import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

export const Repository = styled.div`
  border: 1px solid #cacaca;
  width: 100%;
  height: 250px;
  max-width: 300px;
  min-width: 300px;

  margin: 5px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const RepoImg = styled.img`
  border: 1px solid transparent;
  border-radius: 50px;
  max-height: 100px;
`;

export const RepoName = styled.h2``;

export const RepoDescription = styled.p``;
