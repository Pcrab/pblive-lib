import { SendGift } from "../types";

export const parseSendGift = (sendGift: Record<string, unknown>): SendGift => {
    return {
        user: sendGift,
    };
};
