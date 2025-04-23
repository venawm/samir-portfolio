import { AppWindow, Palette, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import React from "react";

const servicesData = [
  {
    image: <AppWindow />,
    title: "Web Development",
    description:
      "I build robust and scalable web applications tailored to your business needs, ensuring high performance and seamless user experiences.",
  },
  {
    image: <Smartphone />,
    title: "App Development",
    description:
      "I develop intuitive and feature-rich mobile applications for both Android and iOS platforms, enhancing your mobile presence.",
  },
  {
    image: <Palette />,
    title: "Web Designing",
    description:
      "I create visually appealing and user-friendly web designs that captivate your audience and drive engagement, making your brand stand out.",
  },
];

const Services = () => {
  return (
    <div className="mb-12 xl:mb-36 mt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* Grid Layout */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              className="w-full max-w-[424px] flex flex-col items-center relative"
              key={index}
            >
              {/* Icon Container */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-background dark:bg-[#1C1B22] rounded-full border border-border">
                {React.cloneElement(item.image, {
                  className: "w-8 h-8 md:w-12 md:h-12",
                  strokeWidth: 1.5,
                })}
              </div>
              {/* Card Content */}
              <CardContent className="pt-12 text-center">
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
