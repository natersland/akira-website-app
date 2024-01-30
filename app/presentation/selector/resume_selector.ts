import { useResumeStore } from "../store/resume_store";

export function useResumeSelector() {
    const { resumeUrl, updatedAt } = useResumeStore();

    return {
        resumeUrl,
        updatedAt,
    }
}