import { Danmu, DanmuRaw } from "../types.js";
import { intToHex } from "../utils/intToHex.js";

export const parseDanmu = (danmu: DanmuRaw): Danmu => {
    const badge: Danmu["user"]["badge"] = danmu.info[3].length
        ? {
              isActive: danmu.info[3][7] !== 12632256,
              level: danmu.info[3][0],
              name: danmu.info[3][1],
              color: intToHex(danmu.info[3][4]),
              anchor: {
                  uid: danmu.info[3][12],
                  username: danmu.info[3][2],
                  roomId: danmu.info[3][3],
              },
              guard_level: danmu.info[7],
          }
        : undefined;
    const emoticon: Danmu["emoticon"] = danmu.info[0][13]?.emoticon_unique
        ? {
              id: danmu.info[0][13].emoticon_unique,
              height: danmu.info[0][13].height,
              width: danmu.info[0][13].width,
              url: danmu.info[0][13].url,
          }
        : undefined;
    const content = danmu.info[1];
    const identity: Danmu["user"]["identity"] = {
        rank: danmu.info[4][4],
        member: danmu.info[7],
        isAdmin: danmu.info[2][2] === 1,
    };
    return {
        user: {
            uid: danmu.info[2][0],
            username: danmu.info[2][1],
            badge,
            identity,
        },
        content,
        emoticon,
    };
};
