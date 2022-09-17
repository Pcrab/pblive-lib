import { HotRankChangedRaw } from "types.js";
import hotRankChanged from "../../mock/hot_rank_changed_v2.json";
import { parseHotRankChanged } from "./hotRankChanged.js";

describe("HOT_RANK_CHANGED_V2", () => {
    test("test", () => {
        expect(
            parseHotRankChanged(hotRankChanged as HotRankChangedRaw),
        ).toEqual({
            area: "虚拟主播",
            icon: "https://i0.hdslb.com/bfs/live/cb2e160ac4f562b347bb5ae6e635688ebc69580f.png",
            rank: 47,
        });
    });
});
