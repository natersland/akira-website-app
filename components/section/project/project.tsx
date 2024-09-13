"use client"; // Ensures this is a client-side component
import React, { useEffect } from "react";
import ProjectCard from "./components/project_card";
import AkTypography from "@/components/akira_uikit/typography/typography";
import { useProjectStore } from "@/app/presentation/store/project_store";

type Props = {};

const Project: React.FC<Props> = () => {
  const { projects, fetchProjects } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const projectCategory: string[] = ["All", "Web", "Mobile", "Game", "Others"];

  return (
    <section className="relative mb-16 mt-16 xl:mb-48" id="project">
      <div className="container mx-auto">
        {/* text */}
        <div className="mx-auto text-center flex flex-col justify-center items-center">
          <AkTypography
            intent={"display"}
            color={"primary"}
            text={"All Projects"}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
          {projects.map((project: any, index: number) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
