import React, { FC, useState, useEffect } from 'react';
import { useMoviesStore, useAppStore } from 'src/hooks';
import { useParams } from 'react-router-dom';
import {
  MovieItem,
  Loading,
  Button,
  Modal,
  MovieRoulette,
} from 'src/components';
import { FloatButton } from 'src/components';
import { getRandomMovie } from 'src/actions';

type MovieRouteParams = {
  name: string;
};

export const Movies: FC = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {
    loading,
    movies,
    errorMessage,
    genres,
    getMovies,
    clearMovies,
    getRatedMovies,
    getRandomMovie
  } = useMoviesStore();
  const { guestSessionId } = useAppStore();
  const { name } = useParams<MovieRouteParams>();
  const query = name.replace('-', '_').toLocaleLowerCase();

  useEffect(() => {
    clearMovies();
    setPage(1);
    getMovies(query, 1);

    if (guestSessionId !== null) getRatedMovies(guestSessionId);
  }, [name]);

  useEffect(() => {
    if (page != 1) getMovies(query, page);
  }, [page]);

  const onLoadMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPage(page + 1);
  };

  const onRoll = (genreId: number) => {
    getRandomMovie(genreId);
    setModalVisible(false);
  };

  return (
    <div className='movies__wrapper'>
      <div className='movies__content'>
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} />
        ))}
      </div>
      {!loading ? (
        <Button
          classname='movies__loading-btn'
          label='Load More'
          onClick={(event) => onLoadMore(event)}
        />
      ) : (
        <Loading />
      )}

      <FloatButton onClick={() => setModalVisible(true)} />

      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <MovieRoulette genres={genres} onRoll={(genreId) => onRoll(genreId)} />
      </Modal>
    </div>
  );
};
