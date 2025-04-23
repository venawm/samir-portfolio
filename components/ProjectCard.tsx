import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";
import { Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

interface Project {
  image: string;
  link: string;
  category: string;
  name: string;
  description: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <Card className="border-2 border-slate-100 shadow-sm overflow-hidden p-0">
        <div className="relative">
          <Image
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={project.image}
            alt={`${project.name} project image`}
            width={500}
            height={350}
            quality={90}
          />

          <Link
            href={project.link}
            target="_blank"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            bg-white/80 dark:bg-black/80 backdrop-blur-sm 
            w-16 h-16 rounded-full flex items-center justify-center 
            opacity-0 group-hover:opacity-100 
            scale-75 group-hover:scale-100 
            transition-all duration-300 ease-in-out 
            hover:bg-white/90 dark:hover:bg-black/90 
            shadow-md hover:shadow-xl"
          >
            <Link2Icon className="text-slate-800 dark:text-slate-200 w-8 h-8" />
          </Link>
        </div>

        <div className="p-6 space-y-2">
          <Badge variant="secondary" className="mb-2 text-xs font-medium">
            {project.category}
          </Badge>

          <h3
            className="text-xl font-semibold text-slate-900 dark:text-slate-100 
            line-clamp-2 leading-tight"
          >
            {project.name}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
            {project.description}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
