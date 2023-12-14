import { useEffect, useState } from "react";
import { getData } from "../utils";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

const imageUrl = import.meta.env.VITE_API_IMAGEURL;

const SearchPage = () => {
  const { keyword } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [resultMovie, setResultMovie] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movie = await getData("/search/movie", `&query=${keyword}`);
        setResultMovie(movie.data);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className="bg-[url('/bg-hero.jpeg')] bg-fixed bg-cover bg-no-repeat bg-center">
            <Hero title="Search Results" />
          </header>

          <section className="container mx-auto px-5 py-16">
            <div className="grid grid-cols-2 py-5 gap-y-5 pb-10 sm:grid-cols-5">
              {resultMovie.results?.map((value) => {
                return (
                  <Card
                    key={value.id}
                    image={
                      value.poster_path === null
                        ? "/not-poster.jpeg"
                        : `${imageUrl}${value.poster_path}`
                    }
                    {...value}
                  />
                );
              })}
            </div>
            <Pagination
              currentPage={currentPage}
              lastPage={resultMovie?.total_pages}
              setCurrentPage={setCurrentPage}
            />
          </section>
        </>
      )}
    </div>
  );
};

export default SearchPage;
