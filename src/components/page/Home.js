import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Content from '../contents/Content';
import Intro from '../intro/Intro';
import MovieDetail from '../movieDetail/MovieDetail';
import Menu from '../mẹnu/Menu';

function Home(props) {
  const {MoviesDetail} = useSelector(state => state.infoMovies)
  const [isShowMovieDetail, setIsMovieDetail] = useState(false);

  useEffect(() => {
    setIsMovieDetail(MoviesDetail ? true : false);
  }, [MoviesDetail])
    return (
        <div>
            <Intro />
            <Content/>
            <Menu/>
            <MovieDetail movie={MoviesDetail} showModal = {isShowMovieDetail} />
          
        </div>
    );
}

export default Home;