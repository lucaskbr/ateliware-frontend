import React, { useEffect, useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import BarLoader from 'react-spinners/BarLoader';

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

export default function RepositoriesLiked() {
  const [isLoading, setIsLoading] = useState(true);
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await api.get(`/favorite-repositories?page=${page}`);
        if (response.data.length === 0) {
          toast.error('Does not exists more repositories to show', toastConfig);
          setPage(page - 1);
          return;
        }

        setRepositories(response.data);
        setIsLoading(false);
      } catch (e) {
        toast.error('😭 Opsss, try again later', toastConfig);
      }
    }

    fetchApi();
  }, [page]);

  return (
    <Container>
      {isLoading ? (
        <BarLoader width={300} color="#ef0044" />
      ) : (
        <>
          <Title>
            Repositories liked/
            <span role="img" aria-label="glass">
              😍
            </span>
          </Title>

          <RepositoriesList>
            {repositories.map((r, i) => (
              <Repository
                key={r.id}
                item={r}
                disableLike
                onClick={() => openNewTab(r.url)}
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
/**
 *
 */
