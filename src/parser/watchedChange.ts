import { WatchedChange, WatchedChangeRaw } from "../types.js";

export const parseWatchedChange = (
    watchedChange: WatchedChangeRaw
): WatchedChange => {
    return {
        num: watchedChange.data.num
    };
};
