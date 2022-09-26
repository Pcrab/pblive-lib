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
    SuperChatMessageRaw,
    WatchedChange,
    WatchedChangeRaw,
} from "./types.js";

const open = (roomId: number, handlers?: MsgHandlers): void => {
    const live = new KeepLiveTCP(roomId);
    live.on("heartbeat", (count: number) => {
        handlers?.onHeartBeat?.(count);
    });

    live.on("DANMU_MSG", (danmu: DanmuRaw) => {
        handlers?.onDanmuMsg?.(parser.parseDanmu(danmu));
    });

    live.on("INTERACT_WORD", (interactWord: InteractWordRaw) => {
        handlers?.onInteractWord?.(parser.parseInteractWord(interactWord));
    });

    live.on("SEND_GIFT", (sendGift: SendGiftRaw) => {
        handlers?.onSendGift?.(parser.parseSendGift(sendGift));
    });

    live.on("WATCHED_CHANGE", (watchedChange: WatchedChangeRaw) => {
        handlers?.onWatchedChange?.(parser.parseWatchedChange(watchedChange));
    });

    live.on("HOT_RANK_CHANGED_V2", (hotRankChanged: HotRankChangedRaw) => {
        handlers?.onHotRankChanged?.(
            parser.parseHotRankChanged(hotRankChanged),
        );
    });

    live.on("SUPER_CHAT_MESSAGE", (superChatMessage: SuperChatMessageRaw) => {
        handlers?.onSuperChatMessage?.(
            parser.parseSuperChatMessage(superChatMessage),
        );
    });

    return;
};

export default open;

export {
    type Danmu,
    type InteractWord,
    type SendGift,
    type WatchedChange,
    type HotRankChanged,
};
