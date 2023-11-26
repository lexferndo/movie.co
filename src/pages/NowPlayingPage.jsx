import { useContext } from "react";
import Hero from "../components/Hero";
import { MovieContext } from "../context/MovieContext";
import ButtonFilter from "../components/ButtonFilter";
import Card from "../components/Card";

const imageUrl = import.meta.env.VITE_API_IMAGEURL;

const NowPlayingPage = () => {
  const { playingNow } = useContext(MovieContext);

  return (
    <div>
      <header className="bg-[url('/bg-hero.jpeg')] bg-fixed bg-cover bg-no-repeat bg-center">
        <Hero title="Now Playing List" />
      </header>

      <section className="container mx-auto p-5">
        <div className="grid gap-y-2">
          <ButtonFilter />
        </div>
        <div className="grid grid-cols-2 py-5 gap-y-5 sm:grid-cols-5">
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
      </section>
    </div>
  );
};

export default NowPlayingPage;
