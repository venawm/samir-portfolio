import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiBriefcase4Line,
} from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-6 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full-Stack Web Developer{" "}
            </div>
            <h1 className="h1 mb-4"> Hello my name is Samir Pandey</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I am a Full-Stack web developer currently working on NextJS and
              PostgreSQL.As a highly adaptable and skilled web developer,I am
              passionate about creating functional and aesthetically pleasing
              websites that provide a great user experience.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link href={"/hero-naban"}>
                <Button
                  variant="outline"
                  className="gap-x-2 shadow-sm
                "
                >
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-8"
              iconStyles="text-[22px] transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText={"Months Of Experience"}
            />
            {/* second */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={3}
              badgeText={"Projects"}
            />
            <div className="bg-hero_shape2_light w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 "></div>
            <DevImg
              containerStyles="bg-hero_shape2_dark w-[510px] h-[482px] bg-no-repeat relative bg-bottom "
              imgSrc="/developer/dev.png"
              imgClass="absolute left-[-20px] top-[40px]"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
