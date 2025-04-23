"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/projects/game.png",
    category: "NEXT JS ",
    name: "Game(In Progress)",
    description:
      "A simple top down pixel game made using javascript for practice.",
    link: "https://game-amber-pi.vercel.app/",
    github: "https://github.com/venawm/mock-interview",
  },
  {
    image: "/projects/bachelor-nepal.png",
    category: "NEXT JS ",
    name: "Bachelor Nepal(In Progress)",
    description:
      "A Comprehensive study resources, notes, and courses for Nepali bachelor's students.",
    link: "https://bachelor-nepal.vercel.app/",
    github: "https://github.com/venawm/mock-interview",
  },
  {
    image: "/projects/interviewsathi.png",
    category: "NEXT JS ",
    name: "Interview Sathi",
    description:
      "A full Stack AI mock interview website made using NextJS and PostgreSQL with Tailwind for styiling and GeminiAPI",
    link: "https://github.com/venawm/mock-interview",
    github: "https://github.com/venawm/mock-interview",
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
    image: "/projects/rentalx.webp",
    category: "ReactJS",
    name: "RentalX",
    description:
      "A full Stack Car Rental website made using React and PostgreSQL with styled components for styling",
    link: "https://github.com/venawm/RentalX",
    github: "https://github.com/venawm/RentalX",
  },
  {
    image: "/projects/web2app.png",
    category: "ReactJS",
    name: "Web 2 APP",
    description:
      "A full Stack Blogsite developed using ReactJS and Firebase with ChakraUI for styling",
    link: "https://blog-main-nu.vercel.app/",
    github: "https://github.com/venawm/blog-main",
  },
];

const Work = () => {
  return (
    <section className="relative ">
      <div className="container  mx-auto relative flex flex-col items-center">
        {/* text */}
        <div className="max-w-[400px] text-center flex flex-col justify-center items-center">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Some of the projects i am currently working on.
          </p>
        </div>
        <div className="xl:max-w-7xl w-full">
          <Swiper
            style={
              {
                "--swiper-pagination-color": "#4F5177",
                "--swiper-pagination-bullet-inactive-color": "#C1C1C9",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "14px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              } as React.CSSProperties
            }
            className="h-[488px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
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
