import { ResumeRemoteDataSourceImpl } from "@/app/data/datasource/remote/resume_remote_datasource";
import { MappedResume } from "@/app/data/entity/resume_entity";
import { ResumeRepositoryImpl } from "@/app/data/repositories/resume_repository";
import { create } from "zustand"


interface ResumeStore {
    loading: boolean;
    error: string | null;
    resumeUrl: string;
    updatedAt: string;
    isEnabledDownloadCV: boolean;
    fetchResumeData : () => Promise<MappedResume>;
}

export const useResumeStore = create<ResumeStore>((set) => ({
    resumeUrl: "",
    updatedAt: "N/A",
    loading: false,
    error: null,
    isEnabledDownloadCV: false,

    fetchResumeData: async (): Promise<MappedResume> => {
        set({ loading: true, error: null });

        try {
            const resumeDatasource = new ResumeRemoteDataSourceImpl();
            const resumeRepository = new ResumeRepositoryImpl(resumeDatasource);

            const resume = await resumeRepository.getResume();
            set({ resumeUrl: resume.url, updatedAt: resume.updatedAt, loading: false, isEnabledDownloadCV: true });

            return resume;
        } catch (error) {
            set({ error: `Failed to fetch resume: ${error}`, loading: false, isEnabledDownloadCV: false });
            return {
                url: '',
                updatedAt: 'N/A'
            };
        }
    }
}));
