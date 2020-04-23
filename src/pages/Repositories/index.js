import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import api from '../../services/github';

import {
  Container,
  Repository,
  RepoImg,
  RepoName,
  RepoDescription,
} from './styles';

export default function Repositories() {
  const { language, q } = useParams();
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const queryLanguage = language ? `+language:${language}` : '';
      const result = await api.get(
        `/search/repositories?q=${q}${queryLanguage}&sort=stars&order=desc`
      );
      console.log(result.data.items);
      setRepositories(result.data.items);
    }
    fetchApi();
  }, [language, q]);

  return (
    <Container>
      {repositories.map((r) => (
        <Repository>
          <RepoImg src={r.owner.avatar_url} alt={r.full_name} />
          <RepoName>{r.full_name}</RepoName>
          <RepoDescription>{r.description}</RepoDescription>
        </Repository>
      ))}
    </Container>
  );
}
/**
 *
 */
