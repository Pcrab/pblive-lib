# PBlive

This is a simple bilibili live helper library, highly inspired by [danmu-console-helper](https://github.com/ddiu8081/danmu-console-helper).

## Usage

```typescript
import open from "@pcrab/pblive-lib"

const roomId = 81004; // https://live.bilibili.com/81004
open(roomId);
```

You can add handlers for different events.

```typescript
import open from "@pcrab/pblive-lib"

open(81004, {
    onDanmuMsg: (danmu) => {
        console.log(JSON.stringify(danmu));
    },
});
```
