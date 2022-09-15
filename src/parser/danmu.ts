import { Danmu } from "../types";

export const parseDanmu = (danmu: Record<string, unknown>): Danmu => {
    return {
        user: danmu,
    };
};
