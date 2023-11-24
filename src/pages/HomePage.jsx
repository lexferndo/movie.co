import Hero from "../components/Hero";
import { useContext } from "react";
import SliderCard from "../components/SliderCard";

import ListCard from "../components/ListCard";
import { Link } from "react-router-dom";
import { AnimeContext } from "../context/AnimeContext";

const HomePage = () => {
  const { playingNow, popularAnime, topRatedAnime } = useContext(AnimeContext);

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
          <Link to={"/nowp"} className="text-base font-light">
            More
          </Link>
        </div>
        <div>
          <SliderCard anime={playingNow} />
        </div>
      </section>

      <section className="container mx-auto p-5">
        <h1 className="text-2xl text-primary font-medium">Popular</h1>
        <div className="py-10">{/* <ListCard anime={popularAnime} /> */}</div>
      </section>

      <section className="container mx-auto p-5">
        <h1 className="text-2xl text-primary font-medium">Popular</h1>
        <div className="py-10">{/* <ListCard anime={topRatedAnime} /> */}</div>
      </section>
    </div>
  );
};

export default HomePage;
