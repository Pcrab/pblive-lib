interface BaseBadge {
    isActive: boolean;
    name: string;
    color: string;
    level: number;
}

interface DanmuBadge extends BaseBadge {
    anchor: {
        uid: number;
        username: string;
        roomId: number;
    };
}

interface Identity {
    rank: number;
    member: number;
    isAdmin: boolean;
}

interface BaseUser {
    uid: number;
    username: string;
}

interface DanmuUser extends BaseUser {
    badge: DanmuBadge | undefined;
    identity: Identity;
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
    user: DanmuUser;
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

export interface InteractWordRaw {
    cmd: "INTERACT_WORD";
    data: {
        contribution: {
            grade: number;
        };
        dmscore: number;
        fans_medal: {
            anchor_roomid: number;
            guard_level: number;
            icon_id: number;
            is_lighted: number;
            medal_color: number;
            medal_color_border: number;
            medal_color_end: number;
            medal_color_start: number;
            medal_level: number;
            medal_name: string;
            score: number;
            special: string;
            target_id: number;
        };
        identities: [number, number];
        is_spread: number;
        msg_type: number;
        privilege_type: number;
        roomid: number;
        score: number;
        spread_desc: string;
        spread_info: string;
        tail_icon: number;
        timestamp: number;
        trigger_time: number;
        uid: number;
        uname: string;
        uname_color: string;
    };
}

interface InteractWordUser extends BaseUser {
    badge: BaseBadge;
}

export interface InteractWord {
    user: InteractWordUser;
    timestamp: number;
    color: string;
}

export interface SendGift {
    user: DanmuUser;
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
