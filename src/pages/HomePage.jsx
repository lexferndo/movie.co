import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { getPlayingNow, getPopularAnime, getPopularManga } from "../utils";
import Loading from "../components/Loading";
import SliderCard from "../components/SliderCard";

import ListCard from "../components/ListCard";
import ButtonDropdown from "../components/ButtonDropdown";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularAnime, setPopularAnime] = useState([]);
  const [popularManga, setPopularManga] = useState([]);
  const [dropdownPopularOpen, setDropdownPopularOpen] = useState(false);
  const [buttonPopular, setButtonPopular] = useState("Popular Anime");
  const [dropdownTopRatedOpen, setDropdownTopRatedOpen] = useState(false);
  const [buttonTopRated, setButtonTopRated] = useState("Top Rated Anime");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const playing = await getPlayingNow();
        setNowPlaying(playing);
        const anime = await getPopularAnime();
        setPopularAnime(anime);
        console.log(anime);
        const manga = await getPopularManga();
        setPopularManga(manga);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDropdownPopular = () => {
    setDropdownPopularOpen(!dropdownPopularOpen);
  };

  const changePopularToManga = (e) => {
    e.preventDefault();
    setButtonPopular("Popular Manga");
    setDropdownPopularOpen(false);
  };

  const changePopularToAnime = (e) => {
    e.preventDefault();
    setButtonPopular("Popular Anime");
    setDropdownPopularOpen(false);
  };

  const handleDropdownTopRated = () => {
    setDropdownTopRatedOpen(!dropdownTopRatedOpen);
  };

  const changeTopRatedToManga = (e) => {
    e.preventDefault();
    setButtonTopRated("Top Rated Manga");
    setDropdownTopRatedOpen(false);
  };

  const changeTopRatedToAnime = (e) => {
    e.preventDefault();
    setButtonTopRated("Top Rated Anime");
    setDropdownTopRatedOpen(false);
  };

  if (loading) {
    <Loading />;
  }

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
          <SliderCard anime={nowPlaying} />
        </div>
      </section>

      <section className="container mx-auto p-5">
        <div className="flex gap-x-4">
          <ButtonDropdown
            dropdownOpen={dropdownPopularOpen}
            setDropdownOpen={handleDropdownPopular}
            name={buttonPopular}
            changeNameToAnime={changePopularToAnime}
            changeNameToManga={changePopularToManga}
          />
        </div>

        <div className="py-10">
          {buttonPopular === "Popular Anime" && (
            <ListCard anime={popularAnime} />
          )}
          {buttonPopular === "Popular Manga" && (
            <ListCard anime={popularManga} />
          )}
        </div>
      </section>

      <section className="container mx-auto p-5">
        <div className="flex gap-x-4">
          <ButtonDropdown
            dropdownOpen={dropdownTopRatedOpen}
            setDropdownOpen={handleDropdownTopRated}
            name={buttonTopRated}
            changeNameToAnime={changeTopRatedToAnime}
            changeNameToManga={changeTopRatedToManga}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
