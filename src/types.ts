export interface BaseBadge {
    isActive: boolean;
    name: string;
    color: string;
    level: number;
    guard_level: number;
}

export interface AnchorBadge extends BaseBadge {
    anchor: {
        uid: number;
        username: string;
        roomId: number;
    };
}

export interface Identity {
    rank: number;
    member: number;
    isAdmin: boolean;
}

export interface BaseUser {
    uid: number;
    username: string;
}

export interface DanmuUser extends BaseUser {
    badge: AnchorBadge | undefined;
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
            Record<string, unknown>,
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
                  number,
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
        number,
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

export interface InteractWordUser extends BaseUser {
    badge: BaseBadge;
}

export interface InteractWord {
    user: InteractWordUser;
    timestamp: number;
    color: string;
}

export interface SendGiftRaw {
    cmd: "SEND_GIFT";
    data: {
        action: string;
        batch_combo_id: string;
        batch_combo_send: {
            action: string;
            batch_combo_id: string;
            batch_combo_num: number;
            blind_gift: null;
            gift_id: number;
            gift_name: string;
            gift_num: number;
            send_master: null;
            uid: number;
            uname: string;
        } | null;
        beatId: string;
        biz_source: string;
        blind_gift: null;
        broadcast_id: number;
        coin_type: string;
        combo_resources_id: number;
        combo_send: {
            action: string;
            combo_id: string;
            combo_num: number;
            gift_id: number;
            gift_name: string;
            gift_num: number;
            send_master: null;
            uid: number;
            uname: string;
        } | null;
        combo_stay_time: number;
        combo_total_coin: number;
        crit_prob: number;
        demarcation: number;
        discount_price: number;
        dmscore: number;
        draw: number;
        effect: number;
        effect_block: number;
        face: string;
        face_effect_id: number;
        face_effect_type: number;
        float_sc_resource_id: number;
        giftId: number;
        giftName: string;
        giftType: number;
        gold: number;
        guard_level: number;
        is_first: boolean;
        is_special_batch: number;
        magnification: number;
        medal_info: {
            anchor_roomid: number;
            anchor_uname: string;
            guard_level: number;
            icon_id: number;
            is_lighted: number;
            medal_color: number;
            medal_color_border: number;
            medal_color_end: number;
            medal_color_start: number;
            medal_level: number;
            medal_name: string;
            special: string;
            target_id: number;
        };
        name_color: string;
        num: number;
        original_gift_name: string;
        price: number;
        rcost: number;
        remain: number;
        rnd: string;
        send_master: null;
        silver: number;
        super: number;
        super_batch_gift_num: number;
        super_gift_num: number;
        svga_block: number;
        switch: boolean;
        tag_image: string;
        tid: string;
        timestamp: number;
        top_list: null;
        total_coin: number;
        uid: number;
        uname: string;
    };
}

export interface SendGiftUser extends BaseUser {
    badge: BaseBadge;
}

export interface SendGift {
    id: number;
    user: SendGiftUser;
    name: string;
    count: number;
    price: number;
    url: string;
}

export interface WatchedChangeRaw {
    cmd: "WATCHED_CHANGE";
    data: {
        num: number;
        text_small: string;
        text_large: string;
    };
}

export interface WatchedChange {
    num: number;
}

export interface HotRankChangedRaw {
    cmd: "HOT_RANK_CHANGED_V2";
    data: {
        rank: number;
        trend: number;
        countdown: number;
        timestamp: number;
        web_url: string;
        live_url: string;
        pc_link_url: string;
        icon: string;
        area_name: string;
        rank_desc: string;
    };
}

export interface HotRankChanged {
    rank: number;
    area: string;
    icon: string;
}

export interface SuperChatMessageRaw {
    cmd: "SUPER_CHAT_MESSAGE";
    data: {
        background_bottom_color: string;
        background_color: string;
        background_color_end: string;
        background_color_start: string;
        background_icon: string;
        background_image: string;
        background_price_color: string;
        color_point: number;
        dmscore: number;
        end_time: number;
        gift: { gift_id: number; gift_name: string; num: number };
        id: number;
        is_ranked: number;
        is_send_audit: number;
        medal_info: {
            anchor_roomid: number;
            anchor_uname: string;
            guard_level: number;
            icon_id: number;
            is_lighted: number;
            medal_color: string;
            medal_color_border: number;
            medal_color_end: number;
            medal_color_start: number;
            medal_level: number;
            medal_name: string;
            special: string;
            target_id: number;
        };
        message: string;
        message_font_color: string;
        message_trans: string;
        price: number;
        rate: number;
        start_time: number;
        time: number;
        token: string;
        trans_mark: number;
        ts: number;
        uid: number;
        user_info: {
            face: string;
            face_frame: string;
            guard_level: number;
            is_main_vip: number;
            is_svip: number;
            is_vip: number;
            level_color: string;
            manager: number;
            name_color: string;
            title: string;
            uname: string;
            user_level: number;
        };
    };
    roomid: number;
}

export interface SuperChatUser extends BaseUser {
    badge: AnchorBadge | undefined;
}

export interface SuperChatMessage {
    message: string;
    price: number;
    time: number;
    color: string;
    user: SuperChatUser;
}

type MsgHandler<T> = (msg: T) => void;

export interface MsgHandlers {
    onHeartBeat?: MsgHandler<number>;
    onDanmuMsg?: MsgHandler<Danmu>;
    onInteractWord?: MsgHandler<InteractWord>;
    onSendGift?: MsgHandler<SendGift>;
    onWatchedChange?: MsgHandler<WatchedChange>;
    onHotRankChanged?: MsgHandler<HotRankChanged>;
    onSuperChatMessage?: MsgHandler<SuperChatMessage>;
}
