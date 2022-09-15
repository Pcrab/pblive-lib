import { InteractWord, InteractWordRaw } from "../types";
import { intToHex } from "../utils/intToHex";

export const parseInteractWord = (
    interactWord: InteractWordRaw
): InteractWord => {
    return {
        user: {
            uid: interactWord.data.uid,
            username: interactWord.data.uname,
            badge: {
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
