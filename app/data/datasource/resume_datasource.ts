import axios from "axios";
import { MappedResume, Resume } from "../entity/resume_entity";

export const fetchResume = async (): Promise<MappedResume> => {
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
        console.log('error', error);
        return {
            url: '',
            updatedAt: ''
        };
    }
}