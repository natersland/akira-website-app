import axios from "axios";
import { Project } from "../../entity/project_entity";
import { ServerFailure } from "@/app/core/error/failure";

abstract class ProjectRemoteDataSource {
  abstract fetchProjects(): Promise<Project[]>;
}

export class ProjectRemoteDataSourceImpl extends ProjectRemoteDataSource {
  async fetchProjects(): Promise<Project[]> {
    try {
      const apiUrl = process.env.AKIRA_WEBSITE_API;

      if (!apiUrl) {
        throw new Error("API URL is not defined in environment variables");
      }

      const response = await axios.get(`${apiUrl}/api/projects/?populate=image`);

      if (response.status !== 200) {
        console.warn(`Failed to fetch projects from API. Status: ${response.status}. Falling back to mock data.`);
        return this.sortProjects(mockProjects);
      }

      const projects = response.data.data as Project[];
      return this.sortProjects(projects);
    } catch (error) {
        new ServerFailure(String(error));
        return this.sortProjects(mockProjects);
    }
  }

  private sortProjects(projects: Project[]): Project[] {
    return projects.sort((a, b) => b.id - a.id);
  }
}

const mockProjects: Project[] = [
    {
        id: 1,
        attributes: {
          name: "Soy Bean Adventure - Mini Math Game in Pixel Style!",
          description: `
          Mini Math Game in Pixel Style!
          Adventure with soybean hero to protect his friends and home!`,
          category: "Game",
          url: "https://scratch.mit.edu/projects/416535872/",
          githubUrl: "",
          imageUrl: "https://res.cloudinary.com/dz74pimt6/image/upload/v1706602725/akira-website/1_w6jtkg.png",
          technologies: ["Scratch"],
        },
      },
  {
    id: 2,
    attributes: {
      name: "Homesick Cody - Back to the planet",
      description: `Mini space adventure game with Cody!`,
      category: "Game",
      url: "https://scratch.mit.edu/projects/417084191/",
      githubUrl: "",
      imageUrl: "https://res.cloudinary.com/dz74pimt6/image/upload/v1706602726/akira-website/2_vdoyzh.png",
      technologies: ["Scratch"],
    },
  },
  {
    id: 3,
    attributes: {
      name: "Get that Job",
      description: "A web application that helps users to find job opportunities.",
      category: "Web",
      url: "https://get-that-job-fantasyy.onrender.com/",
      githubUrl: "https://github.com/natersland/get-that-job-react",
      imageUrl: "https://res.cloudinary.com/dz74pimt6/image/upload/v1706602725/akira-website/3_hudb35.png",
      technologies: ["React", "Javascript", "Node.js", "Express", "MongoDB"],
    },
  },
  {
    id: 4,
    attributes: {
      name: "Pettasy",
      description: "Change the way you take care of your pets into RPG game.",
      category: "Mobile",
      url: "",
      githubUrl: "",
      imageUrl: "https://res.cloudinary.com/dz74pimt6/image/upload/v1706602727/akira-website/4_jenvx9.png",
      technologies: ["Flutter", "Provider", "Firebase"],
    },
  },
  {
    id: 5,
    attributes: {
      name: "Akira Portfolio Website",
      description: "My personal portfolio website.",
      category: "Web",
      url: "https://blogplatform.com",
      githubUrl: "https://github.com/natersland/akira-website-app",
      imageUrl: "https://res.cloudinary.com/dz74pimt6/image/upload/v1706602726/akira-website/5_a6288s.png",
      technologies: ["NextJs", "Zustand", "Golang", "Gin", "Supabase"],
    },
  },
];