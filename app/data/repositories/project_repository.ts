import { ServerFailure } from "@/app/core/error/failure";
import { ProjectRemoteDataSourceImpl } from "../datasource/remote/project_remote_datasource";
import { Project } from "../entity/project_entity";

export interface ProjectRepository {
  getProjects(): Promise<Project[]>;
}

export class ProjectRepositoryImpl implements ProjectRepository {
  private projectDatasource: ProjectRemoteDataSourceImpl;

  constructor(projectDatasource: ProjectRemoteDataSourceImpl) {
    this.projectDatasource = projectDatasource;
  }

  async getProjects(): Promise<Project[]> {
    try {
      const projects = await this.projectDatasource.fetchProjects();
      return projects;
    } catch (error) {
      console.error('Error in ProjectRepository:', error);
      throw new ServerFailure(String(error)); 
    }
  }
}