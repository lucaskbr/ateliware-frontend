import React, { useState } from 'react';

import {
  Container,
  Card,
  RepoImg,
  RepoName,
  RepoDescription,
  ButtonLike,
} from './styles';

export default function Repository({ item, onClickLike, onClick }) {
  const { name, url, description, avatarOwnerUrl, liked } = item;

  const [isLiked, setIsLiked] = useState(liked);

  function handleLike() {
    setIsLiked(!isLiked);
    onClickLike();
  }

  return (
    <Container>
      <ButtonLike isliked={isLiked} onClick={() => handleLike} />

      <Card onClick={onClick}>
        <RepoImg src={avatarOwnerUrl} alt={name} />
        <RepoName>{name}</RepoName>
        <RepoDescription>{description}</RepoDescription>
      </Card>
    </Container>
  );
}
