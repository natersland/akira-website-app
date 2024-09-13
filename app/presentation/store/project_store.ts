import { ProjectRemoteDataSourceImpl } from "@/app/data/datasource/remote/project_remote_datasource";
import { Project } from "@/app/data/entity/project_entity";
import { ProjectRepositoryImpl } from "@/app/data/repositories/project_repository";
import { create } from "zustand";

interface ProjectStore {
  projects: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => void;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],
  loading: false,
  error: null,

  fetchProjects: () => {
    set({ loading: true, error: null });

    const projectDatasource = new ProjectRemoteDataSourceImpl();
    const projectRepository = new ProjectRepositoryImpl(projectDatasource);

    projectRepository.getProjects()
      .then((projects) => {
        set({ projects, loading: false });
        console.log('Fetched projects:', projects);
      })
      .catch((error) => {
        set({ error: `Failed to fetch projects: ${error}`, loading: false });
      });
  },
}));