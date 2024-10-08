import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ProjectImage from "./project_image";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/app/data/entity/project_entity";
import AkTypography from "@/components/akira_uikit/typography/typography";

type Props = {
  project: Project;
};

const ProjectCard = (props: Props) => {
  const project = props.project.attributes;
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <ProjectImage
          imageUrl={project.imageUrl ?? ""}
          link={project.url ?? ""}
          github={project.githubUrl ?? ""}
        />
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5 text-onPrimary">
          {project.category ?? "Uncategorized"}
        </Badge>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold leading-none tracking-tight text-center">
            {project.name ?? "Untitled"}
          </h1>
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground text-center mt-2">
              {project.description ?? "No description"}
            </p>
            <div
              className="flex gap-2 mt-4 justify-center
            items-center"
            >
              {project.technologies.map((tech: string, index: number) => (
                <Badge className="text-xs text-onPrimary" key={index}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
