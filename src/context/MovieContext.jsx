import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getData } from "../utils";
import Loading from "../components/Loading";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [playingNow, setPlayingNow] = useState([]);

  const [popularMovie, setPopularMovie] = useState([]);

  const [topRatedMovie, setTopRatedMovie] = useState([]);

  const [upComingMovie, setUpComingMovie] = useState([]);

  const [genreMovie, setGenreMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const playing = await getData("/movie/now_playing");
        setPlayingNow(playing.data.results);

        const popular = await getData("/movie/popular");
        setPopularMovie(popular.data.results);

        const topRated = await getData("/movie/top_rated");
        setTopRatedMovie(topRated.data.results);

        const upcoming = await getData("/movie/upcoming");
        setUpComingMovie(upcoming.data.results);

        const genre = await getData("/genre/movie/list");
        setGenreMovie(genre.data.genres);
      } catch (error) {
        return "Error Fetching Data = ", error;
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        playingNow,
        popularMovie,
        topRatedMovie,
        upComingMovie,
        genreMovie,
      }}>
      {isLoading ? <Loading /> : children}
    </MovieContext.Provider>
  );
};

MovieContextProvider.propTypes = {
  children: PropTypes.element,
};

export default MovieContextProvider;
