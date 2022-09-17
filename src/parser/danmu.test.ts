import { parseDanmu } from "./danmu.js";
import danmuMsgBiaoqing from "../../mock/danmu_msg_biaoqing.json";
import danmuMsgNoBadge from "../../mock/danmu_msg_no_badge.json";
import { DanmuRaw } from "../types.js";
describe("DANMU_MSG", () => {
    test("parse", () => {
        expect(parseDanmu(danmuMsgBiaoqing as DanmuRaw)).toEqual({
            user: {
                uid: 22303314,
                username: "Pcrab",
                badge: {
                    isActive: false,
                    level: 13,
                    name: "光水晶",
                    color: "#be6686",
                    anchor: {
                        uid: 6747203,
                        username: "绫濑光Official",
                        roomId: 3428783,
                    },
                },
                identity: {
                    isAdmin: false,
                    member: 0,
                    rank: 0,
                },
            },
            content: "赞",
            emoticon: {
                id: "official_147",
                height: 60,
                width: 150,
                url: "http://i0.hdslb.com/bfs/live/bbd9045570d0c022a984c637e406cb0e1f208aa9.png",
            },
        });
    });
    test("no badge", () => {
        expect(parseDanmu(danmuMsgNoBadge as DanmuRaw)).toEqual({
            content: "赞",
            user: {
                badge: undefined,
                identity: {
                    isAdmin: false,
                    member: 0,
                    rank: 0,
                },
                uid: 22303314,
                username: "Pcrab",
            },
        });
    });
});
