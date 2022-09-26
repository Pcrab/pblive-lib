import { SuperChatMessage, SuperChatMessageRaw } from "../types.js";

export const parseSuperChatMessage = (
    superChatMessage: SuperChatMessageRaw,
): SuperChatMessage => {
    return {
        message: superChatMessage.data.message,
        price: superChatMessage.data.price,
        time: superChatMessage.data.time,
        color: superChatMessage.data.background_price_color,
        user: {
            uid: superChatMessage.data.uid,
            username: superChatMessage.data.user_info.uname,
            badge: superChatMessage.data.medal_info
                ? {
                      isActive:
                          superChatMessage.data.medal_info.is_lighted === 1,
                      name: superChatMessage.data.medal_info.medal_name,
                      level: superChatMessage.data.medal_info.medal_level,
                      color: superChatMessage.data.medal_info.medal_color,
                      guard_level: superChatMessage.data.medal_info.guard_level,
                      anchor: {
                          uid: superChatMessage.data.medal_info.target_id,
                          username:
                              superChatMessage.data.medal_info.anchor_uname,
                          roomId: superChatMessage.data.medal_info
                              .anchor_roomid,
                      },
                  }
                : undefined,
        },
    };
};
