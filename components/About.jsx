import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Samir Pandey" },
  { icon: <PhoneCall size={20} />, text: "+977 9865366391" },
  { icon: <MailIcon size={20} />, text: "pandesamir3@gmai.com" },
  { icon: <GraduationCap size={20} />, text: "Bachelors of Computer Science" },
  { icon: <HomeIcon size={20} />, text: "44600 Kathmandu Kalimati " },
  { icon: <Calendar size={20} />, text: "Born on 19 Sep, 2003" },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "NCCS",
        qualification: "+2 Management",
        year: "2019-2021",
      },
      {
        university: "Herald College",
        qualification: "Bachelor of Computer Science",
        year: "2021-2024",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Self",
        qualification: "Full Stack Developer",
        year: "2021-Present",
      },
      {
        company: "Herald Development Platform",
        qualification: "React Developer",
        year: "3 Months",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      { name: "HTML, CSS, TailwindCSS" },
      { name: "Front End Development" },
      { name: "Javascript, ReactJS, NextJS, NodeJS" },
      { name: "HTML,CSS" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/as" },
      { imgPath: "/as" },
      { imgPath: "/as" },
      { imgPath: "/as" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] py-12 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-hero_shape2_light dark:bg-hero_shape w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/developer/dev.png"
              imgClass="absolute left-[-50px] top-[35px]"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px]">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Developing Amazing Web Apps for 2 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I excell in creating Scalable Web Apps with great User
                      Experience and Design.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-2">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">1</TabsContent>
                {/* skills */}
                <TabsContent value="skills">Personal skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
