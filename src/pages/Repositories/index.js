import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import BarLoader from 'react-spinners/BarLoader';

import githubApi from '../../services/github';
import api from '../../services/api';

import openNewTab from '../../utils/openNewTab';

import toastConfig from '../../config/toastCofig';

import Repository from '../../components/Repository';

import {
  Container,
  Title,
  RepositoriesList,
  Pagination,
  PaginationButton,
} from './styles';

export default function Repositories() {
  const { language, q } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchApi() {
      const queryLanguage = language ? `+language:${language}` : '';
      setIsLoading(true);
      const response = await githubApi.get(
        `/search/repositories?q=${q}${queryLanguage}&sort=stars&order=desc&page=${page}`
      );

      const responseAdapter = response.data.items.map((r) => ({
        id: r.id,
        githubId: r.id,
        name: r.full_name,
        url: r.html_url,
        avatarOwnerUrl: r.owner.avatar_url,
        description: r.description,
        liked: false,
      }));

      setRepositories(responseAdapter);
      setIsLoading(false);
    }
    fetchApi();
  }, [language, q, page]);

  async function handleLike(index) {
    try {
      const {
        githubId,
        name,
        url,
        description,
        avatarOwnerUrl,
        liked,
      } = repositories[index];

      await api.post('/favorite-repositories/like', {
        githubId,
        name,
        url,
        description,
        avatarOwnerUrl,
      });

      if (!liked) {
        toast.success('😍 Nice, a new favorite!', toastConfig);
      }

      repositories[index].liked = !repositories[index].liked;
      setRepositories(repositories);
    } catch (e) {
      toast.error('😭 Ops, try again later', toastConfig);
    }
  }

  return (
    <Container>
      {isLoading ? (
        <BarLoader width={300} color="#ef0044" />
      ) : (
        <>
          <Title>
            {language} - Repositories/
            <span role="img" aria-label="glass">
              😎
            </span>
          </Title>
          <RepositoriesList>
            {repositories.map((r, i) => (
              <Repository
                key={r.id}
                item={r}
                showLike
                onClick={() => openNewTab(r.url)}
                onClickLike={() => handleLike(i)}
              />
            ))}
          </RepositoriesList>
          <Pagination>
            <PaginationButton
              type="button"
              disabled={page === 1}
              allowed={page === 1}
              onClick={() => setPage(page - 1)}
            >
              <AiOutlineLeft color="#000" size={20} />
            </PaginationButton>
            {page}
            <PaginationButton type="button" onClick={() => setPage(page + 1)}>
              <AiOutlineRight color="#000" size={20} />
            </PaginationButton>
          </Pagination>
          <ToastContainer />
        </>
      )}
    </Container>
  );
}
