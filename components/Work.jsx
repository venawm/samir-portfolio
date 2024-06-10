"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/projects/digicommerce.png",
    category: "NEXT JS",
    name: "Digicommerce",
    description:
      "A full Stack E-Commerce website developed using NextJS and MongoDB with TailwindCSS for styling",
    link: "https://digicommerce-chi.vercel.app/",
    github: "https://github.com/venawm/digicommerce",
  },
  {
    image: "/projects/digicommerce.png",
    category: "NEXT JS",
    name: "Digicommerce",
    description:
      "A full Stack E-Commerce website developed using NextJS and MongoDB with TailwindCSS for styling",
    link: "https://digicommerce-chi.vercel.app/",
    github: "https://github.com/venawm/digicommerce",
  },
  {
    image: "/projects/digicommerce.png",
    category: "NEXT JS",
    name: "Digicommerce",
    description:
      "A full Stack E-Commerce website developed using NextJS and MongoDB with TailwindCSS for styling",
    link: "https://digicommerce-chi.vercel.app/",
    github: "https://github.com/venawm/digicommerce",
  },
  {
    image: "/projects/digicommerce.png",
    category: "NEXT JS",
    name: "Digicommerce",
    description:
      "A full Stack E-Commerce website developed using NextJS and MongoDB with TailwindCSS for styling",
    link: "https://digicommerce-chi.vercel.app/",
    github: "https://github.com/venawm/digicommerce",
  },
];

const Work = () => {
  return (
    <section className="relative ">
      <div className="container mx-auto relative flex flex-col items-center">
        {/* text */}
        <div className="max-w-[400px] text-center flex flex-col justify-center items-center">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="xl:max-w-[1000px] w-full">
          <Swiper
            style={{
              "--swiper-pagination-color": "#4F5177",
              "--swiper-pagination-bullet-inactive-color": "#C1C1C9",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "14px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            className="h-[488px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            {/* Swiper Slides */}
            {projectData.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
