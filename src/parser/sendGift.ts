import { SendGift, SendGiftRaw } from "../types.js";
import { intToHex } from "../utils/intToHex.js";

export const parseSendGift = (sendGift: SendGiftRaw): SendGift => {
    return {
        user: {
            uid: sendGift.data.uid,
            username: sendGift.data.uname,
            badge: {
                guard_level: sendGift.data.medal_info.guard_level,
                isActive: sendGift.data.medal_info.is_lighted === 1,
                name: sendGift.data.medal_info.medal_name,
                level: sendGift.data.medal_info.medal_level,
                color: intToHex(sendGift.data.medal_info.medal_color),
            },
        },
        id: sendGift.data.giftId,
        name: sendGift.data.giftName,
        count: sendGift.data.num,
        price: sendGift.data.price,
        url: sendGift.data.face,
    };
};
