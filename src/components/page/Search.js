import React from 'react';
import { useSelector } from 'react-redux';
import MovieDetail from '../movieDetail/MovieDetail';
import SearchMovie from '../searchMovie/SearchMovie';

function Search(props) {
    const {MoviesDetail} = useSelector(state => state.infoMovies)
    return (
        <div>
            <SearchMovie />
            <MovieDetail showModal = {MoviesDetail ? true : false} movie = {MoviesDetail}/>
        </div>
    );
}

export default Search;