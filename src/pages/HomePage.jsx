import Hero from "../components/Hero";
import { useContext } from "react";
import SliderCard from "../components/SliderCard";

import ListCard from "../components/ListCard";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const HomePage = () => {
  const { playingNow, popularMovie, topRatedMovie } = useContext(MovieContext);

  return (
    <div>
      <header className="bg-[url('/bg-hero.jpeg')] bg-fixed bg-cover bg-no-repeat bg-center ">
        <Hero />
      </header>

      <section className="container mx-auto px-5 pt-16">
        <div className="pb-5 flex items-center">
          <h1 className="flex-1 text-2xl font-medium text-primary">
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

      <section className="container mx-auto p-10">
        <div className="pb-5 flex items-center">
          <h1 className="flex-1 text-2xl text-primary font-medium">Popular</h1>
          <Link to={"/nowplaying"} className="text-base font-light">
            View All
          </Link>
        </div>
        <div>
          <ListCard movie={popularMovie} />
        </div>
      </section>

      <section className="container mx-auto p-5">
        <div className="pb-5 flex items-center">
          <h1 className="flex-1 text-2xl text-primary font-medium">
            Top Rated
          </h1>
          <Link to={"/nowplaying"} className="text-base font-light">
            View All
          </Link>
        </div>
        <div>
          <ListCard movie={topRatedMovie} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
