import { HotRankChanged } from "../types";

export const parseHotRankChanged = (
    hotRankChanged: Record<string, unknown>
): HotRankChanged => {
    return {
        rank: hotRankChanged.rank as number,
    };
};