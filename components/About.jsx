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
      { name: "HTML", path: "/icons/html-5.png" },
      { name: "CSS", path: "/icons/css-3.png" },
      { name: "Javascript", path: "/icons/js.png" },
      { name: "ReactJS", path: "/icons/react.png" },
      { name: "Redux", path: "/icons/redux.png" },
      { name: "NextJS", path: "/icons/next.svg" },
      { name: "TailwindCSS", path: "/icons/tailwind.png" },
      { name: "NodeJS", path: "/icons/node.png" },
      { name: "PostgreSQL", path: "/icons/postgre.png" },
    ],
  },
  {
    title: "tools",
    data: [
      { name: "Vscode", path: "/icons/vscode.png" },
      { name: "Postman", path: "/icons/postman.png" },
      { name: "Figma", path: "/icons/figma.png" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section class="xl:h-[860px] mt-24 py-12">
      <div className="container mx-auto mt-12  xl:mt0">
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
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Qualifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px]">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, qualification, year } = item;
                              return (
                                <div
                                  key={index}
                                  className=" flex gap-x-8 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px]">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div
                                  key={index}
                                  className=" flex gap-x-8 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">My skills</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* List of skills */}
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center">
                        {getData(skillData, "Skills").data.map(
                          (item, index) => {
                            const { name, path } = item;
                            return (
                              <div
                                className="flex font-medium items-center gap-2 py-4 xl:justify-start md:justify-center hover:scale-105 transition duration-500 cursor-pointer"
                                key={index}
                              >
                                <Image
                                  src={path}
                                  width={48}
                                  height={48}
                                  alt={name}
                                />
                                {name}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left mx-auto">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { path, name } = item;
                          return (
                            <div
                              className="flex font-medium items-center gap-2 py-4 xl:justify-start md:justify-center hover:scale-105 transition duration-500 cursor-pointer "
                              key={index}
                            >
                              <Image
                                src={path}
                                width={48}
                                height={48}
                                alt={name}
                                priority
                              />
                              {name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
