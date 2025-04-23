import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"; // Assuming this path is correct

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

// Interfaces (assuming these are defined correctly elsewhere or keep them here)
interface InfoItem {
  icon: React.ReactNode;
  text: string;
}

interface EducationItem {
  university: string;
  qualification: string;
  year: string;
}

interface ExperienceItem {
  company: string;
  qualification: string;
  year: string;
}

interface QualificationData {
  title: string;
  data: (EducationItem | ExperienceItem)[];
}

interface SkillItem {
  name: string;
  path: string; // Assuming these paths are correct relative to your public folder
}

interface SkillData {
  title: string;
  data: SkillItem[];
}

// Data (keep as is)
const infoData: InfoItem[] = [
  { icon: <User2 size={20} />, text: "Samir Pandey" },
  { icon: <PhoneCall size={20} />, text: "+977 9865366391" },
  { icon: <MailIcon size={20} />, text: "pandesamir3@gmail.com" },
  { icon: <GraduationCap size={20} />, text: "Bachelors of Computer Science" },
  { icon: <HomeIcon size={20} />, text: "44600 Kathmandu Kalimati " },
  { icon: <Calendar size={20} />, text: "Born on 19 Sep, 2003" },
];

const qualificationData: QualificationData[] = [
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
        company: "WebX Nepal",
        qualification: "Full Stack Developer",
        year: "June 2024-Present",
      },
      {
        company: "Namlo Technologies",
        qualification: "Frontend Developer",
        year: "July 2023 - June 2024",
      },
    ],
  },
];

const skillData: SkillData[] = [
  {
    title: "Skills", // Capitalized 'S' to match usage below
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

// Type guard functions (keep as is)
const isEducationItem = (
  item: EducationItem | ExperienceItem,
): item is EducationItem => {
  return "university" in item;
};

const isExperienceItem = (
  item: EducationItem | ExperienceItem,
): item is ExperienceItem => {
  return "company" in item;
};

// Generic function (keep as is)
const getData = <T extends QualificationData | SkillData>(
  arr: T[],
  title: string,
): T | undefined => {
  return arr.find(
    (item) => item.title.toLowerCase() === title.toLowerCase(), // Make comparison case-insensitive
  );
};

// The Improved About Component
const About = () => {
  return (
    <section className="py-12 xl:py-24 min-h-[auto] xl:min-h-[860px]">
      {" "}
      {/* Increased vertical padding */}
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-20 text-center mx-auto">
          {" "}
          {/* Increased bottom margin */}
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row gap-x-12 gap-y-10">
          {" "}
          {/* Added gap for spacing */}
          {/* Tabs Section */}
          <div className="flex-1">
            <Tabs defaultValue="qualifications" className="w-full">
              <TabsList className=" grid grid-cols-3 md:w-full xl:border dark:xl:border-none mx-auto xl:mx-0  h-fit">
                {/* Centered on mobile, left on xl */}
                <TabsTrigger
                  defaultChecked
                  className="w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-auto" value="skills">
                  Skills & Tools
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-10">
                {" "}
                {/* Increased top margin */}
                {/* Personal Info Tab */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left space-y-8">
                    {" "}
                    {/* Added vertical spacing */}
                    <h3 className="h3">
                      Developing Amazing Web Apps for 2 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I excel in creating Scalable Web Apps with great User
                      Experience and Design, focusing on clean code and modern
                      practices.
                    </p>
                    {/* Info Items Grid */}
                    <div className="grid xl:grid-cols-2 gap-x-6 gap-y-4 mb-12">
                      {" "}
                      {/* Adjusted gaps */}
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0 justify-center xl:justify-start" // Center on mobile
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>{" "}
                          {/* Ensure icon color */}
                          <div className="font-medium">{item.text}</div>{" "}
                          {/* Added font-weight */}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications Tab */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* Experience & Education Grid */}
                    <div className="grid md:grid-cols-2 gap-y-10 gap-x-8">
                      {" "}
                      {/* Increased gaps */}
                      {/* Experience Section */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-semibold text-xl">
                            {" "}
                            {/* Increased font size */}
                            {getData(qualificationData, "experience")?.title ||
                              "Experience"}
                          </h4>
                        </div>
                        {/* Experience List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience")?.data.map(
                            (item, index) => {
                              if (isExperienceItem(item)) {
                                const { company, qualification, year } = item;
                                return (
                                  <div
                                    className="flex gap-x-6 group"
                                    key={index}
                                  >
                                    {" "}
                                    {/* Slightly reduced gap */}
                                    {/* Timeline Dot & Line */}
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] top-0"></div>{" "}
                                      {/* Removed hover animation for cleaner look */}
                                    </div>
                                    {/* Text Details */}
                                    <div className="flex-1">
                                      {" "}
                                      {/* Ensure text takes available space */}
                                      <div className="font-semibold text-xl leading-snug mb-1">
                                        {" "}
                                        {/* Adjusted leading and margin */}
                                        {company}
                                      </div>
                                      <div className="text-lg leading-snug text-muted-foreground mb-2">
                                        {" "}
                                        {/* Adjusted leading and margin */}
                                        {qualification}
                                      </div>
                                      <div className="text-base font-medium text-muted-foreground/80">
                                        {" "}
                                        {/* Slightly muted year */}
                                        {year}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                              return null;
                            },
                          )}
                        </div>
                      </div>
                      {/* Education Section */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-semibold text-xl">
                            {" "}
                            {/* Increased font size */}
                            {getData(qualificationData, "education")?.title ||
                              "Education"}
                          </h4>
                        </div>
                        {/* Education List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education")?.data.map(
                            (item, index) => {
                              if (isEducationItem(item)) {
                                const { university, qualification, year } =
                                  item;
                                return (
                                  <div
                                    className="flex gap-x-6 group"
                                    key={index}
                                  >
                                    {" "}
                                    {/* Slightly reduced gap */}
                                    {/* Timeline Dot & Line */}
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] top-0"></div>{" "}
                                      {/* Removed hover animation */}
                                    </div>
                                    {/* Text Details */}
                                    <div className="flex-1">
                                      {" "}
                                      {/* Ensure text takes available space */}
                                      <div className="font-semibold text-xl leading-snug mb-1">
                                        {" "}
                                        {/* Adjusted leading and margin */}
                                        {university}
                                      </div>
                                      <div className="text-lg leading-snug text-muted-foreground mb-2">
                                        {" "}
                                        {/* Adjusted leading and margin */}
                                        {qualification}
                                      </div>
                                      <div className="text-base font-medium text-muted-foreground/80">
                                        {" "}
                                        {/* Slightly muted year */}
                                        {year}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                              return null;
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills Tab */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left space-y-12">
                    {" "}
                    {/* Added vertical spacing */}
                    <h3 className="h3">What I Use</h3>
                    {/* Skills Section */}
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Skills</h4>
                      <div className="border-b border-border mb-6"></div>{" "}
                      {/* Increased margin */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4 justify-center xl:justify-start">
                        {" "}
                        {/* Adjusted grid cols and gaps */}
                        {getData(skillData, "Skills")?.data.map(
                          (item, index) => (
                            <div
                              className="group flex items-center gap-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors duration-300 cursor-pointer justify-center xl:justify-start" // Added padding, hover bg, transition
                              key={index}
                            >
                              <Image
                                src={item.path}
                                width={40} // Slightly smaller icons
                                height={40}
                                alt={item.name}
                                className="transition-transform duration-300 group-hover:scale-110" // Subtle scale on hover
                              />
                              <span className="font-medium">{item.name}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    {/* Tools Section */}
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Tools</h4>
                      <div className="border-b border-border mb-6"></div>{" "}
                      {/* Increased margin */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4 justify-center xl:justify-start">
                        {" "}
                        {/* Adjusted grid cols and gaps */}
                        {getData(skillData, "tools")?.data.map(
                          (item, index) => (
                            <div
                              className="group flex items-center gap-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors duration-300 cursor-pointer justify-center xl:justify-start" // Added padding, hover bg, transition
                              key={index}
                            >
                              <Image
                                src={item.path}
                                width={40} // Slightly smaller icons
                                height={40}
                                alt={item.name}
                                priority // Keep priority if these are often visible initially
                                className="transition-transform duration-300 group-hover:scale-110" // Subtle scale on hover
                              />
                              <span className="font-medium">{item.name}</span>
                            </div>
                          ),
                        )}
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
