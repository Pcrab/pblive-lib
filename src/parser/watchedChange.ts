import { WatchedChange } from "../types.js";

export const parseWatchedChange = (
    watchedChange: Record<string, unknown>
): WatchedChange => {
    return {
        num: watchedChange.num as number
    };
};
