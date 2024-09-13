import axios from "axios";
import { MappedResume, Resume } from "../../entity/resume_entity";
import { ServerFailure } from "@/app/core/error/failure";

abstract class ResumeRemoteDataSource {
    abstract fetchResume(): Promise<MappedResume>;
}

export class ResumeRemoteDataSourceImpl extends ResumeRemoteDataSource {
    async fetchResume(): Promise<MappedResume> {
        try {
            const response = await axios.get(`https://akira-website-api.onrender.com/api/resume`);
            const resume = await response.data.data as Resume;
           
            const selectedResume = resume.attributes;

            return {
                url: selectedResume.url,
                updatedAt: selectedResume.updatedAt
            };
        }
        catch (error) {
            new ServerFailure(String(error));
            return {
                url: '',
                updatedAt: ''
            };
        }
    }
}
