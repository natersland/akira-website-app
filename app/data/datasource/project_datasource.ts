import axios from "axios"
import { Project } from "../entity/project_entity"

export const fetchProjects = async (): Promise<Project[]> => {
    try {
        const response = await axios.get(`${process.env.AKIRA_WEBSITE_API}/api/projects/?populate=image`)
        const projects = response.data.data as Project[];

        // Sorting the projects array by id in descending order
        projects.sort((a, b) => b.id - a.id);

        return projects;

    } catch (error) {
        console.log('error', error)
        return []
    }
}