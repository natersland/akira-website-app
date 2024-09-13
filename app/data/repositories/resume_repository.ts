import { ResumeRemoteDataSourceImpl } from "../datasource/remote/resume_remote_datasource";
import { MappedResume } from "../entity/resume_entity";
import { ServerFailure } from "@/app/core/error/failure";

export interface ResumeRepository {
    getResume(): Promise<MappedResume>;
    }

export class ResumeRepositoryImpl implements ResumeRepository {
    private resumeDatasource: ResumeRemoteDataSourceImpl;

    constructor(resumeDatasource: ResumeRemoteDataSourceImpl) {
        this.resumeDatasource = resumeDatasource;
    }

    async getResume(): Promise<MappedResume> {
        try {
            const resume = await this.resumeDatasource.fetchResume();
            return resume;
        } catch (error) {
            new ServerFailure(String(error));
        }
        return {
            url: '',
            updatedAt: ''
        };
    }
}