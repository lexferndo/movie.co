import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { Navigation } from "swiper/modules";
import Card from "./Card";

import "swiper/css";
import "swiper/css/navigation";

const SliderCard = ({ anime }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={5}
      slidesPerView={8}
      navigation>
      {anime
        .filter((value, index, self) => {
          return (
            index ===
            self.findIndex(
              (result) =>
                result.entry[0].title.length <= 15 &&
                result.entry[0].mal_id === value.entry[0].mal_id
            )
          );
        })
        .slice(0, 20)
        .map((value) => {
          const result = value.entry[0];
          return (
            <SwiperSlide key={value.mal_id}>
              <Card image={result.images.webp.image_url} title={result.title} />
            </SwiperSlide>
          );
        })}
      ...
    </Swiper>
  );
};

SliderCard.propTypes = {
  anime: PropTypes.array.isRequired,
};

export default SliderCard;
