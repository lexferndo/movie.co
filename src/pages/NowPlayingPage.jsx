import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ButtonFilter from "../components/ButtonFilter";
import Card from "../components/Card";
import { getData } from "../utils";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const imageUrl = import.meta.env.VITE_API_IMAGEURL;

const NowPlayingPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [playingNow, setPlayingNow] = useState([]);

  const [genreMovie, setGenreMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const playing = await getData("/movie/now_playing");
        setPlayingNow(playing.data.results);

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
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className="bg-[url('/bg-hero.jpeg')] bg-fixed bg-cover bg-no-repeat bg-center">
            <Hero title="Now Playing List" />
          </header>

          <section className="container mx-auto px-5 py-16">
            <div className="grid gap-y-2 pb-5">
              <ButtonFilter genreMovie={genreMovie} />
            </div>
            <div className="grid grid-cols-2 py-5 gap-y-5 pb-10 sm:grid-cols-5">
              {playingNow.map((value) => {
                return (
                  <Card
                    key={value.id}
                    image={`${imageUrl}${value.poster_path}`}
                    {...value}
                  />
                );
              })}
            </div>
            <Pagination />
          </section>
        </>
      )}
    </div>
  );
};

export default NowPlayingPage;
