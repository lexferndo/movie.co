import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { getData } from "../utils";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

const imageUrl = import.meta.env.VITE_API_IMAGEURL;

const TopRated = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topRated, setTopRated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movie = await getData(`/movie/top_rated`, `&page=${currentPage}`);
        setTopRated(movie.data);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header className="bg-[url('/bg-hero.jpeg')] bg-fixed bg-cover bg-no-repeat bg-center">
            <Hero title="Top Rated List" />
          </header>

          <section className="container mx-auto px-5 py-16">
            <div className="grid grid-cols-2 py-5 gap-y-5 pb-10 sm:grid-cols-5">
              {topRated.results?.map((value) => {
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
              lastPage={topRated?.total_pages}
              setCurrentPage={setCurrentPage}
            />
          </section>
        </>
      )}
    </div>
  );
};

export default TopRated;
