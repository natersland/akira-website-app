import { getAllProjects } from "@/app/controllers/project_controller";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCard from "./components/project_card";
import AkTypography from "@/components/akira_uikit/typography/typography";

type Props = {};

const Project = async (props: Props) => {
  const projects = await getAllProjects();
  const projectCategory: string[] = ["All", "Web", "Mobile", "Game", "Others"];

  return (
    <section className="relative mb-16 mt-16 xl:mb-48" id="project">
      <div className="container mx-auto ">
        {/* text */}
        <div className="mx-auto text-center flex flex-col justify-center items-center ">
          <AkTypography
            intent={"display"}
            color={"primary"}
            text={"All Projects"}
          />
          <p className="subtitle mb-8">
            Step into a world where code meets creativity. Each project in this
            gallery not only showcases technical skills but tells a story of
            challenge, innovation, and triumph in the realm of software
            development.
          </p>
        </div>
        {/* <h2 className="text-2xl md:text-3xl font-bold mb-8">
          My <span className="text-primary">Portfolio</span> Section
        </h2> */}

        {/* <div className="flex flex-row flex-wrap justify-start items-center mb-8">
          {projectCategory.map((item, index) => (
            <div
              key={index}
              // onClick={() => handleWorkFilter(item)}
              className={`cursor-pointer p-2 rounded-lg transition duration-300 ease-in-out m-1
                        `}
            >
              {item}
            </div>
          ))}
        </div> */}
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
