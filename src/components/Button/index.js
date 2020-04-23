import React from 'react';

import { Container } from './styles';

export default function Button({ title, isLoading, onClick }, props) {
  return (
    <Container type="button" onClick={onClick} isLoading={isLoading} {...props}>
      {title}
    </Container>
  );
}
