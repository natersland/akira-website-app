import { useNavBarStore } from "../store/navbar_store";

export function useNavBarSelector() {
    const { setToggle } = useNavBarStore();

    const handleToggle = (value: boolean) => {
        setToggle(value)
    }

    return {
        handleToggle,
    }
}