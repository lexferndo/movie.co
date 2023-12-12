import PropTypes from "prop-types";
import Card from "./Card";
import { useEffect, useState } from "react";

const imageUrl = import.meta.env.VITE_API_IMAGEURL;

const ListCard = ({ movie }) => {
  const [limitMovie, setLimitMovie] = useState(0);

  const changeLimit = () => {
    if (window.innerWidth <= 500) {
      setLimitMovie(6);
    } else if (window.innerWidth <= 1000) {
      setLimitMovie(8);
    } else {
      setLimitMovie(14);
    }
  };

  useEffect(() => {
    changeLimit();
    window.addEventListener("resize", changeLimit);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
      {movie.slice(0, limitMovie).map((value) => {
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
  );
};

ListCard.propTypes = {
  movie: PropTypes.array.isRequired,
};

export default ListCard;
