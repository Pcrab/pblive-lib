export const intToHex = (color: number): `#${string}` => {
    const hex = color.toString(16);
    let result = "";
    for (let i = 0; i < 6 - hex.length; ++i) {
        result += "0";
    }
    return `#${result}${hex}`;
};
