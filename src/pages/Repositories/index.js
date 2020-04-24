import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';

import githubApi from '../../services/github';
import api from '../../services/api';

import { Container } from './styles';
import Repository from '../../components/Repository';

export default function Repositories() {
  const { language, q } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const queryLanguage = language ? `+language:${language}` : '';
      const result = await githubApi.get(
        `/search/repositories?q=${q}${queryLanguage}&sort=stars&order=desc`
      );

      const responseAdapter = result.data.items.map((r) => ({
        id: r.id,
        name: r.full_name,
        url: r.html_url,
        avatarOwnerUrl: r.owner.avatar_url,
        description: r.description,
        liked: false,
      }));

      setRepositories(responseAdapter);
    }
    fetchApi();
    setIsLoading(false);
  }, [language, q]);

  useEffect(() => {
    setRepositories(repositories);
  }, [repositories]);

  async function openGithubRepository(url) {
    const win = window.open(url, '_blank');
    if (win != null) {
      win.focus();
    }
  }

  async function handleLike(index) {
    try {
      api.post('/favorite-repositories', {
        repository: repositories[index],
      });
    } catch (e) {
      console.log('Ocorreu um erro');
    }
  }

  return (
    <Container>
      {isLoading ? (
        <BarLoader width={300} color="#ef0044" />
      ) : (
        <>
          {repositories.map((r, i) => (
            <Repository
              key={r.id}
              item={r}
              onClick={() => openGithubRepository(r.url)}
              onClickLike={() => handleLike(i)}
            />
          ))}
        </>
      )}
    </Container>
  );
}
/**
 *
 */
