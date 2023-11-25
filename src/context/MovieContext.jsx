import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getData } from "../utils";
import Loading from "../components/Loading";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  // ------------
  const [playingNow, setPlayingNow] = useState([]);
  // ------------
  const [popularMovie, setPopularMovie] = useState([]);
  // ------------
  const [topRatedMovie, setTopRatedMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const playing = await getData("/now_playing");
        setPlayingNow(playing);

        const popular = await getData("/popular");
        setPopularMovie(popular);

        const topRated = await getData("/top_rated");
        setTopRatedMovie(topRated);
      } catch (error) {
        return alert("Error Fetching Data = ", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    // getData2("/upcoming");
  }, []);

  return (
    <MovieContext.Provider
      value={{
        playingNow,
        popularMovie,
        topRatedMovie,
      }}>
      {isLoading ? <Loading /> : children}
    </MovieContext.Provider>
  );
};

MovieContextProvider.propTypes = {
  children: PropTypes.element,
};

export default MovieContextProvider;
