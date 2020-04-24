import styled from 'styled-components';

import { AiFillHeart } from 'react-icons/ai';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Card = styled.div`
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

  transition: 0.5s;

  &:hover {
    border-color: #ef0044;
  }
`;

export const ButtonLike = styled(AiFillHeart).attrs({
  size: 30,
})`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99;

  &:hover {
    color: #ef0044;
  }

  color: ${(props) => (props.isliked ? '#ef0044' : '#ccccc')};
`;

export const RepoImg = styled.img`
  border: 1px solid #cacaca;
  border-radius: 50px;
  max-height: 100px;
`;

export const RepoName = styled.h2`
  color: #ef0044;
  font-size: 17px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

export const RepoDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 32px; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
