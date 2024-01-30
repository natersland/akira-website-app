import { create } from "zustand"

type Store = {
    toggle: boolean;
    setToggle: (value: boolean) => void;
}

export const useNavBarStore = create<Store>((set) => ({
    toggle: false,
    setToggle: (value: boolean) => set({ toggle: value })
}));