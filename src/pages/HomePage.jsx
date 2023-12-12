import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import SliderCard from "../components/SliderCard";

import ListCard from "../components/ListCard";
import { Link } from "react-router-dom";
import { getData } from "../utils";
import Loading from "../components/Loading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [playingNow, setPlayingNow] = useState([]);

  const [topRatedMovie, setTopRatedMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const playing = await getData("/movie/now_playing");
        setPlayingNow(playing.data.results);

        const topRated = await getData("/movie/top_rated");
        setTopRatedMovie(topRated.data.results);
      } catch (error) {
        return "Error Fetching Data = ", error;
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className="bg-[url('/bg-hero.jpeg')] bg-fixed bg-cover bg-no-repeat bg-center">
            <Hero
              title="Your Movie Platform"
              description="Experience the immersive viewing of all time Trending Movie and catch up
        on new series of Movie as they come to our screen. Begin your journey
        down great movies with"
              highlight=" Movie.co"
            />
          </header>

          <section className="container mx-auto p-5 sm:pt-10">
            <div className="pb-5 flex items-center">
              <h1 className="flex-1 text-2xl font-medium text-primary cursor-default">
                Now Playing
              </h1>
              <Link to={"/nowplaying"} className="text-base font-light">
                View All
              </Link>
            </div>
            <div>
              <SliderCard movie={playingNow} />
            </div>
          </section>

          <section className="container mx-auto p-5">
            <div className="pb-5 flex items-center">
              <h1 className="flex-1 text-2xl text-primary font-medium cursor-default">
                Top Rated
              </h1>
              <Link to={"/toprated"} className="text-base font-light">
                View All
              </Link>
            </div>
            <div>
              <ListCard movie={topRatedMovie} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;
