import Image from "next/image";
import { AppWindow, Palette, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    image: <AppWindow size={72} strokeWidth={0.5} />,
    title: "Web Development",
    description:
      "I build robust and scalable web applications tailored to your business needs, ensuring high performance and seamless user experiences.",
  },
  {
    image: <Smartphone size={72} strokeWidth={0.5} />,
    title: "App Development",
    description:
      "I develop intuitive and feature-rich mobile applications for both Android and iOS platforms, enhancing your mobile presence.",
  },
  {
    image: <Palette size={72} strokeWidth={0.5} />,
    title: "Web Designing",
    description:
      "I create visually appealing and user-friendly web designs that captivate your audience and drive engagement, making your brand stand out.",
  },
];

const Services = () => {
  return (
    <div className="mb-12 xl:mb-36 mt-12">
      <div className=" container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className=" w-full max-w-[424px] h-[200px] flex flex-col pt-16 pb-18 items-center relative"
                key={index}
              >
                <CardHeader className="absolute -top-[70px]">
                  <div className="flex justify-center items-center w-[148px] h-[80px] bg-background dark:bg-[#1C1B22] text-[#4F5177] dark:text-white">
                    {item.image}
                  </div>
                </CardHeader>
                <CardContent>{item.description}</CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
