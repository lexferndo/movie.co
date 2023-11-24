import PropTypes from "prop-types";
import Card from "./Card";
import { useEffect, useState } from "react";

const ListCard = ({ anime }) => {
  const [limitAnime, setLimitAnime] = useState(0);

  const changeLimit = () => {
    if (window.innerWidth <= 500) {
      setLimitAnime(6);
    } else if (window.innerWidth <= 1000) {
      setLimitAnime(8);
    } else {
      setLimitAnime(14);
    }
  };

  useEffect(() => {
    changeLimit();
    window.addEventListener("resize", changeLimit);
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
      {anime
        .filter((value, index, self) => {
          return (
            index ===
            self.findIndex(
              (result) =>
                result.title.length <= 25 && result.mal_id === value.mal_id
            )
          );
        })
        .slice(0, limitAnime)
        .map((value) => {
          return (
            <Card
              key={value.mal_id}
              id={value.mal_id}
              image={value.images.webp.image_url}
              title={value.title}
            />
          );
        })}
    </div>
  );
};

ListCard.propTypes = {
  anime: PropTypes.array.isRequired,
};

export default ListCard;
