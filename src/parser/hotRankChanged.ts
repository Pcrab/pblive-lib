import { HotRankChanged, HotRankChangedRaw } from "../types.js";

export const parseHotRankChanged = (
    hotRankChanged: HotRankChangedRaw
): HotRankChanged => {
    return {
        rank: hotRankChanged.data.rank,
        area: hotRankChanged.data.area_name,
        icon: hotRankChanged.data.icon
    };
};
