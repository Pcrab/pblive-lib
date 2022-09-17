import { KeepLiveTCP } from "bilibili-live-ws";
import parser from "./parser/index.js";
import {
    DanmuRaw,
    HotRankChangedRaw,
    InteractWordRaw,
    MsgHandlers,
    SendGiftRaw,
    WatchedChangeRaw,
} from "./types.js";

const open = (roomId: number, handlers: MsgHandlers): void => {
    const live = new KeepLiveTCP(roomId);
    live.on("heartbeat", (count: number) => {
        handlers.onHeartBeat?.(count);
    });

    live.on("DANMU_MSG", (danmu: DanmuRaw) => {
        // console.log(JSON.stringify(danmu));
        handlers.onDanmuMsg?.(parser.parseDanmu(danmu));
    });

    live.on("INTERACT_WORD", (interactWord: InteractWordRaw) => {
        handlers.onInteractWord?.(parser.parseInteractWord(interactWord));
    });

    live.on("SEND_GIFT", (sendGift: SendGiftRaw) => {
        handlers.onSendGift?.(parser.parseSendGift(sendGift));
    });

    live.on("WATCHED_CHANGE", (watchedChange: WatchedChangeRaw) => {
        handlers.onWatchedChange?.(parser.parseWatchedChange(watchedChange));
    });

    live.on("HOT_RANK_CHANGED_V2", (hotRankChanged: HotRankChangedRaw) => {
        handlers.onHotRankChanged?.(parser.parseHotRankChanged(hotRankChanged));
    });

    return;
};

open(10360, {});

export default open;
