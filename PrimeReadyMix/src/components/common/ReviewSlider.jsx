"use client";

import { Rating } from "@material-tailwind/react";
import { FaUserAlt } from "react-icons/fa";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const ReviewSlider = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={'auto'}
      autoplay={{
        disableOnInteraction: true,
        pauseOnMouseEnter: false
      }}
      className="py-6"
    >
      {[1, 2, 3, 4, 5, 6, 7].map((item, key) => (
        <SwiperSlide style={{ maxWidth: 360 }} className="p-3">
          <figure className="p-6 border-2 border-primary bg-primary-50 rounded-md">
            <Rating value={4} readonly className="mb-3" ratedColor="primary" color="primary" unratedColor="gray" />
            <p className="text-lg text-dark-500 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eum ullam voluptate ex deleniti, reprehenderit iusto neque quas similique magnam molestias necessitatibus aspernatur omnis temporibus nulla quo optio eius exercitationem!
            </p>
            <p className="text-small flex gap-2 items-center"> <FaUserAlt className="inline-block"/> User Name</p>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
