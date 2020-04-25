import React from 'react';

import { Container } from './styles';

export default function Button(
  { title, notAllowed, isLoading, onClick },
  props
) {
  return (
    <Container
      type="button"
      notAllowed={notAllowed}
      onClick={onClick}
      isLoading={isLoading}
      {...props}
    >
      {title}
    </Container>
  );
}
