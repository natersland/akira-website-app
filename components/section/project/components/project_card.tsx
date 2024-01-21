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
import AkTypography from "@/components/typography/typography";

type Props = {
  project: Project;
};

const ProjectCard = (props: Props) => {
  const project = props.project.attributes;
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <ProjectImage
          imageUrl={project.image.data.attributes.formats.small.url}
          link={project.url ?? ""}
          github={""}
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
          <p className="text-sm text-muted-foreground text-center mt-2">
            {project.description ?? "No description"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
