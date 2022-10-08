import { KeepLiveTCP } from "bilibili-live-ws";
import parser from "./parser/index.js";
import {
    Danmu,
    DanmuRaw,
    HotRankChanged,
    HotRankChangedRaw,
    InteractWord,
    InteractWordRaw,
    MsgHandlers,
    SendGift,
    SendGiftRaw,
    SuperChatMessage,
    SuperChatMessageRaw,
    WatchedChange,
    WatchedChangeRaw,
} from "./types.js";

const open = (roomId: number, handlers?: MsgHandlers): void => {
    const live = new KeepLiveTCP(roomId);
    live.on("heartbeat", (count: number) => {
        handlers?.onHeartBeat?.(count, count);
        handlers?.onAllMsg?.(count, count);
    });

    live.on("DANMU_MSG", (danmu: DanmuRaw) => {
        handlers?.onDanmuMsg?.(parser.parseDanmu(danmu), danmu);
        handlers?.onAllMsg?.(parser.parseDanmu(danmu), danmu);
    });

    live.on("INTERACT_WORD", (interactWord: InteractWordRaw) => {
        handlers?.onInteractWord?.(
            parser.parseInteractWord(interactWord),
            interactWord,
        );
        handlers?.onAllMsg?.(
            parser.parseInteractWord(interactWord),
            interactWord,
        );
    });

    live.on("SEND_GIFT", (sendGift: SendGiftRaw) => {
        handlers?.onSendGift?.(parser.parseSendGift(sendGift), sendGift);
        handlers?.onAllMsg?.(parser.parseSendGift(sendGift), sendGift);
    });

    live.on("WATCHED_CHANGE", (watchedChange: WatchedChangeRaw) => {
        handlers?.onWatchedChange?.(
            parser.parseWatchedChange(watchedChange),
            watchedChange,
        );
        handlers?.onAllMsg?.(
            parser.parseWatchedChange(watchedChange),
            watchedChange,
        );
    });

    live.on("HOT_RANK_CHANGED_V2", (hotRankChanged: HotRankChangedRaw) => {
        handlers?.onHotRankChanged?.(
            parser.parseHotRankChanged(hotRankChanged),
            hotRankChanged,
        );
        handlers?.onAllMsg?.(
            parser.parseHotRankChanged(hotRankChanged),
            hotRankChanged,
        );
    });

    live.on("SUPER_CHAT_MESSAGE", (superChatMessage: SuperChatMessageRaw) => {
        handlers?.onSuperChatMessage?.(
            parser.parseSuperChatMessage(superChatMessage),
            superChatMessage,
        );
        handlers?.onAllMsg?.(
            parser.parseSuperChatMessage(superChatMessage),
            superChatMessage,
        );
    });

    return;
};

export default open;

export {
    type Danmu,
    type DanmuRaw,
    type HotRankChanged,
    type HotRankChangedRaw,
    type InteractWord,
    type InteractWordRaw,
    type SendGift,
    type SendGiftRaw,
    type SuperChatMessage,
    type SuperChatMessageRaw,
    type WatchedChange,
    type WatchedChangeRaw,
};
