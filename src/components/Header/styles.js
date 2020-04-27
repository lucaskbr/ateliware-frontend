import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 15px;
`;

export const Nav = styled.div`
  width: 100%;
  max-width: 250px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 25px;

  &:link,
  &:active,
  &:visited {
    text-decoration: none;
  }
`;
