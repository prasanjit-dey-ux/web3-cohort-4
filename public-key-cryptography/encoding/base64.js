// encode

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encode = Buffer.from(uint8Array).toString("base64");
console.log(base64Encode);


// decode
const bytes = Buffer.from(base64Encode, "base64"); // we need to convert the string into bytes as textdecoder never decode strings.
const text = new TextDecoder().decode(bytes);
console.log(text);