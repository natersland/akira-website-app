import { fetchResume } from "../data/datasource/resume_datasource";
import { useResumeStore } from "../presentation/store/resume_store";
import moment from 'moment';


export class ResumeController {
    static async getResume(): Promise<void> {
        try {
            const mappedResume = await fetchResume();
            const formattedDate = moment(mappedResume.updatedAt).format('LL');
            useResumeStore.getState().setResumeData(mappedResume.url, formattedDate);
        } catch (error) {
            console.error('Error in getResume:', error);
        }
    }
}
