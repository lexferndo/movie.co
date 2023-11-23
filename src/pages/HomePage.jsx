import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { getRecommendationsAnime } from "../utils";
import Loading from "../components/Loading";
import SliderCard from "../components/SliderCard";

const HomePage = () => {
  const [popularAnime, setPopularAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getRecommendationsAnime();
        setPopularAnime(result);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    <Loading />;
  }

  return (
    <div>
      <header className="bg-[url('./public/bg-hero.jpeg')] bg-fixed bg-cover bg-no-repeat bg-center ">
        <Hero />
      </header>

      <section className="container mx-auto p-5">
        <h1 className="text-2xl font-medium text-primary pb-5">Popular</h1>
        <div>
          <SliderCard anime={popularAnime} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
