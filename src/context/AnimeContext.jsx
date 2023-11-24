import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getData } from "../utils";
import Loading from "../components/Loading";

export const AnimeContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  // ------------
  const [playingNow, setPlayingNow] = useState([]);
  // ------------
  const [popularAnime, setPopularAnime] = useState([]);
  // ------------
  const [topRatedAnime, setTopRatedAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const playing = await getData("/anime", "status=airing");
        setPlayingNow(playing);
        const popular = await getData("/anime", "order_by=popularity");
        setPopularAnime(popular);
        // const topRated = await getData("/anime", "order_by=favorites");
        // setTopRatedAnime(topRated);
      } catch (error) {
        return alert("Error Fetching Data = ", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AnimeContext.Provider
      value={{
        playingNow,
        popularAnime,
        topRatedAnime,
      }}>
      {isLoading ? <Loading /> : children}
    </AnimeContext.Provider>
  );
};

MovieContextProvider.propTypes = {
  children: PropTypes.element,
};

export default MovieContextProvider;
