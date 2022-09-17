import { intToHex } from "../intToHex.js";

describe("IntToHex", () => {
    test("intToHex", () => {
        expect(intToHex(1)).toEqual("#000001");
    });
});
