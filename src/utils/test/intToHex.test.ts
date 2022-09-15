import { intToHex } from "../intToHex";

describe("IntToHex", () => {
    test("intToHex", () => {
        expect(intToHex(1)).toEqual("#000001");
    });
});
