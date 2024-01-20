import { fetchProjects } from '../data/datasource/project_datasource';

export const getAllProjects = async () => {
    return await fetchProjects();
}