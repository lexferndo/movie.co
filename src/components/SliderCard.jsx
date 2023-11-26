import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { Navigation } from "swiper/modules";
import Card from "./Card";

import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";

const imageUrl = import.meta.env.VITE_API_IMAGEURL;

const SliderCard = ({ movie }) => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={false}
        ref={SlideRef}
        onSlideChange={onSlideChange}
        breakpoints={{
          390: {
            slidesPerView: 2,
          },
          802: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 7,
          },
        }}>
        {movie.map((value) => {
          return (
            <SwiperSlide key={value.id}>
              <Card image={`${imageUrl}${value.poster_path}`} {...value} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="hidden lg:flex lg:justify-end lg:items-center lg:gap-x-5">
        <button
          className={`flex items-center text-lg ${
            isFirst ? "opacity-50" : "opacity-100"
          }`}
          onClick={handlePrev}>
          <IoMdArrowDropleft className="text-3xl" />
          Prev
        </button>
        <button
          className={`flex items-center text-lg ${
            isLast ? "opacity-50" : "opacity-100"
          }`}
          onClick={handleNext}>
          Next <IoMdArrowDropright className="text-3xl" />
        </button>
      </div>
    </>
  );
};

SliderCard.propTypes = {
  movie: PropTypes.array.isRequired,
};

export default SliderCard;
