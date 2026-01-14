// encode

import bs58 from "bs58"

function uint8ArrayToBase58(uint8Array) {
    return bs58.encode(uint8Array);
}

const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String);

// decode
function base58ToUnitArray(base58String) {
    return bs58.decode(base58String);
};

const base58 = base58String;
const byteArrayFromBase58 = base58ToUnitArray(base58);
console.log(byteArrayFromBase58);

const text = new TextDecoder().decode(byteArrayFromBase58);
console.log(text);



