import React from 'react';

import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';

import { Container, Logo, Nav, NavLink } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <NavLink to="/repositories/likes">
          <FcLike /> Likes
        </NavLink>
      </Nav>
    </Container>
  );
}
