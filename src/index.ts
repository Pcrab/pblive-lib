import { KeepLiveTCP } from "bilibili-live-ws";
import parser from "./parser/index.js";
import { DanmuRaw, InteractWordRaw, MsgHandlers, SendGiftRaw } from "./types.js";

const open = (roomId: number, handlers: MsgHandlers): void => {
    const live = new KeepLiveTCP(roomId);
    live.on("heartbeat", (count: number) => {
        handlers.onHeartBeat?.(count);
    });

    live.on("DANMU_MSG", (danmu: DanmuRaw) => {
        handlers.onDanmuMsg?.(parser.parseDanmu(danmu));
    });

    live.on("INTERACT_WORD", (interactWord: InteractWordRaw) => {
        handlers.onInteractWord?.(parser.parseInteractWord(interactWord));
    });

    live.on("SEND_GIFT", (sendGift: SendGiftRaw) => {
        handlers.onSendGift?.(parser.parseSendGift(sendGift));
    });

    live.on("WATCHED_CHANGE", (watchedChange: Record<string, unknown>) => {
        handlers.onWatchedChange?.(parser.parseWatchedChange(watchedChange));
    });

    live.on(
        "HOT_RANK_CHANGED_V2",
        (hotRankChanged: Record<string, unknown>) => {
            handlers.onHotRankChanged?.(
                parser.parseHotRankChanged(hotRankChanged)
            );
        }
    );

    return;
};

export default open;
