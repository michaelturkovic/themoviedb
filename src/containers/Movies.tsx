import React, { FC, useState, useEffect } from 'react';
import { useMoviesStore } from 'src/hooks';
import { useParams } from 'react-router-dom';

type MovieRouteParams = {
    name: string
}

export const Movies: FC = (): JSX.Element => {
    const [page, setPage] = useState<number>(1);
    const { loading, movies, errorMessage, getMovies, clearMovies } = useMoviesStore();
    const { name } = useParams<MovieRouteParams>();
    const query = name.replace('-', '_').toLocaleLowerCase();

    useEffect(() => {
        clearMovies();
        setPage(1);
        getMovies(query, page);
    }, [name]);

    useEffect(() => {
        if (page != 1) getMovies(query, page);
    }, [page]);

    return (
    <div></div>
)};