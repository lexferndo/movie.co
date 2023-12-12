import { FaPlay } from "react-icons/fa";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { getData } from "../utils";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import ListCard from "../components/ListCard";
import VideoPlayer from "../components/VideoPlayer";

const imageUrl = import.meta.env.VITE_API_IMAGEURL2;

const DetailPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [detailMovie, setDetailMovie] = useState();
  const [recommendedMovie, setRecommendedMovie] = useState([]);
  const [trailerMovie, setTrailerMovie] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const detail = await getData(`/movie/${id}`);
        setDetailMovie(detail.data);

        const recommend = await getData(`/movie/${id}/similar`);
        setRecommendedMovie(recommend.data.results);

        const trailer = await getData(`/movie/${id}/videos`);
        setTrailerMovie(trailer.data.results);
      } catch (error) {
        return "Error Fetching Data = ", error;
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    const hoursString = hours > 0 ? `${hours}h` : "";
    const minutesString = minutes > 0 ? ` ${minutes}m` : "";

    return hoursString + minutesString;
  };

  const trailerKey = trailerMovie.filter(
    (item) => item.type === "Trailer" && item.official === true
  );

  const handleShowTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section
            style={{
              backgroundImage:
                detailMovie?.backdrop_path === null
                  ? `url(/bg-hero.jpeg)`
                  : `url(${imageUrl}${detailMovie?.backdrop_path})`,
            }}
            className="bg-cover bg-center bg-no-repeat">
            <div className="py-28 bg-black bg-opacity-70 ">
              <div className="container mx-auto px-5 flex flex-wrap sm:flex-nowrap">
                <img
                  src={`${imageUrl}${detailMovie?.poster_path}`}
                  alt="poster"
                  className="rounded-lg sm:w-72 "
                />
                <div className="bg-transparent flex flex-col p-5 text-white w-full gap-y-5 sm:justify-evenly ">
                  <div className="grid gap-y-5">
                    <div className="grid items-center gap-y-3 sm:justify-start">
                      <h1 className=" text-2xl font-medium text-primary sm:text-3xl">
                        {detailMovie?.title}{" "}
                        <span className="font-light opacity-80">
                          (
                          {detailMovie?.release_date &&
                            new Date(detailMovie.release_date).getFullYear()}
                          )
                        </span>
                      </h1>
                      <div className="flex items-center gap-x-3">
                        <Rating
                          id={detailMovie?.id}
                          rating={detailMovie?.vote_average}
                        />

                        <button
                          className="flex items-center gap-2 text-lg font-light opacity-70 transition-all duration-300 hover:opacity-100"
                          onClick={handleShowTrailer}>
                          <FaPlay /> Play Trailer
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-5 justify-center sm:justify-start ">
                      <p className="border px-1 text-sm font-light opacity-70 rounded-sm sm:text-base">
                        {detailMovie?.adult ? "D+" : "PG"}
                      </p>
                      <ul className="flex items-center list-disc gap-5">
                        <li className="text-sm font-normal sm:text-base">
                          {detailMovie?.genres
                            .map((genre) => genre.name)
                            .join(", ")}
                        </li>
                        <li className="text-sm font-normal sm:text-base">
                          {formatRuntime(detailMovie?.runtime)}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-justify text-lg font-light italic opacity-80 sm:py-3">
                    {detailMovie?.tagline}
                  </p>
                  <div className="grid gap-3">
                    <h1 className="text-2xl text-primary font-medium">
                      Overview
                    </h1>
                    <p className="text-justify text-lg opacity-80 font-light">
                      {detailMovie?.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto p-5 grid gap-y-5">
            <h1 className="text-2xl text-primary font-medium">
              Similar Movies
            </h1>
            <ListCard movie={recommendedMovie} />
          </section>

          <VideoPlayer
            open={showTrailer}
            youtubeId={trailerKey[0]?.key}
            handleClick={handleShowTrailer}
          />
        </>
      )}
    </div>
  );
};

export default DetailPage;
