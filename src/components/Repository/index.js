import React, { useState } from 'react';

import {
  Container,
  Card,
  RepoImg,
  RepoName,
  RepoDescription,
  ButtonLike,
} from './styles';

export default function Repository({
  item,
  disableLike,
  onClickLike,
  onClick,
}) {
  const { name, description, avatarOwnerUrl } = item;

  const [isLiked, setIsLiked] = useState(false);

  async function handleLike() {
    setIsLiked(!isLiked);
    onClickLike();
  }

  return (
    <Container>
      <ButtonLike
        disableLike={disableLike}
        isliked={isLiked}
        onClick={handleLike}
      />
      <Card onClick={onClick}>
        <RepoImg src={avatarOwnerUrl} alt={name} />
        <RepoName>{name}</RepoName>
        <RepoDescription>{description}</RepoDescription>
      </Card>
    </Container>
  );
}
