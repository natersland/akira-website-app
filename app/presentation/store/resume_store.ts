import { create } from "zustand"

type Store = {
    resumeUrl: string;
    updatedAt: string;
    setResumeData: (url: string, updatedAt: string) => void;
}

export const useResumeStore = create<Store>((set) => ({
    resumeUrl: "",
    updatedAt: "",
    setResumeData: (url: string, updatedAt: string) => set({ resumeUrl: url, updatedAt: updatedAt }),
}));