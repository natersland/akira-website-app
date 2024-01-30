import { fetchProjects } from '../data/datasource/project_datasource';
import { Project } from '../data/entity/project_entity';


export class ProjectController {
    static async getAllProjects(): Promise<Project[]>{
        return await fetchProjects();
    }
}
