import { InteractWord, InteractWordRaw } from "../types.js";
import { intToHex } from "../utils/intToHex.js";

export const parseInteractWord = (
    interactWord: InteractWordRaw,
): InteractWord => {
    return {
        user: {
            uid: interactWord.data.uid,
            username: interactWord.data.uname,
            badge: {
                guard_level: interactWord.data.fans_medal.guard_level,
                isActive: interactWord.data.fans_medal.is_lighted === 1,
                name: interactWord.data.fans_medal.medal_name,
                color: intToHex(interactWord.data.fans_medal.medal_color),
                level: interactWord.data.fans_medal.medal_level,
            },
        },
        timestamp: interactWord.data.timestamp,
        color: interactWord.data.uname_color,
    };
};
