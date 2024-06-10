import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { RiGithubFill } from "react-icons/ri";
import { Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className=" shadow-sm border border-slate-100 dark:border-[#27272A]">
      <CardHeader className="p-4">
        {/* image */}
        <div className="flex items-center justify-center">
          <Image
            className="shadow-sm rounded-md"
            src={project.image}
            width={500}
            height={350}
          />
          {/* btns */}
          <div>
            <Link
              href={project.link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="mb-2">{project.category}</Badge>
        <h4 className="h-4 mb-1">{project.name}</h4>
        <p className=" text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
