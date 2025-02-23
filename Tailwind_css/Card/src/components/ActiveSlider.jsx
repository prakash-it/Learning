import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { RxArrowTopRight } from 'react-icons/rx';

export default function ActiveSlider() {
  const slides = [
    { id: 1, image: 'https://via.placeholder.com/150' },
    { id: 2, image: 'https://via.placeholder.com/150' },
    { id: 3, image: 'https://via.placeholder.com/150' },
    { id: 4, image: 'https://via.placeholder.com/150' },
    { id: 5, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="p-4 rounded-lg flex flex-col items-center">
            <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-auto mb-4 rounded-lg" />
            <div className="flex items-center justify-between w-full">
              <RxArrowTopRight className="text-[#6c34af]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
