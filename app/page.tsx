import { Project } from "./data/entity/project_entity";
import { getAllProjects } from "./controllers/project_controller";
import Image from "next/image";

export default async function Home() {
  const projects = await getAllProjects();
  return projects.map((project: Project, index: number) => (
    <div key={index}>
      <div> ID: {project.id}</div>
      <p>Category: {project.attributes.category}</p>
      <h1>Name: {project.attributes.name}</h1>
      <p>Description: {project.attributes.description}</p>
      <Image
        src={`${process.env.AKIRA_WEBSITE_API}${project.attributes.image.data.attributes.formats.medium.url}`}
        width={500}
        height={500}
        alt={project.attributes.name}
      />
    </div>
  ));
}
