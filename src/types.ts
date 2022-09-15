interface User {
    uid: number;
    username: string;
    badge:
        | {
              isActive: boolean;
              name: string;
              color: string;
              level: number;
              anchor: {
                  uid: number;
                  username: string;
                  roomId: number;
              };
          }
        | undefined;
    identity: {
        rank: number;
        member: number;
        isAdmin: boolean;
    };
}

export interface DanmuRaw {
    cmd: "DANMU_MSG";
    info: [
        [
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            string,
            number,
            number,
            number,
            string,
            number,
            {
                bulge_display: number;
                emoticon_unique: string;
                height: number;
                in_player_area: number;
                is_dynamic: number;
                url: string;
                width: number;
            },
            Record<string, unknown>,
            Record<string, unknown>,
            Record<string, unknown>
        ],
        string,
        [number, string, number, number, number, number, number, string],
        (
            | [
                  number,
                  string,
                  string,
                  number,
                  number,
                  string,
                  number,
                  number,
                  number,
                  number,
                  number,
                  number,
                  number
              ]
            | []
        ),
        [number, number, number, string, number],
        [string, string],
        number,
        number,
        null,
        { ts: number; ct: string },
        number,
        number,
        null,
        null,
        number,
        number
    ];
}

export interface Danmu {
    user: User;
    content: string;
    emoticon:
        | {
              id: string;
              url: string;
              height: number;
              width: number;
          }
        | undefined;
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
