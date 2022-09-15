interface User {
    badge?: {
        level: number;
    };
}

export interface Danmu {
    user: User;
}

export interface InteractWord {
    user: User;
}

export interface SendGift {
    user: User;
}

export interface WatchedChange {
    num: number;
}

export interface HotRankChanged {
    rank: number;
}

type MsgHandler<T> = (msg: T) => void;

export interface MsgHandlers {
    onHeartBeat?: MsgHandler<number>;
    onDanmuMsg?: MsgHandler<Danmu>;
    onInteractWord?: MsgHandler<InteractWord>;
    onSendGift?: MsgHandler<SendGift>;
    onWatchedChange?: MsgHandler<WatchedChange>;
    onHotRankChanged?: MsgHandler<HotRankChanged>;
}
