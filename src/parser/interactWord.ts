import { InteractWord } from "../types";

export const parseInteractWord = (
    interactWord: Record<string, unknown>
): InteractWord => {
    return {
        user: interactWord,
    };
};
