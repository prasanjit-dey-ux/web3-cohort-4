function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray)
}

// Example:

const bytes = new Uint8Array([72, 101, 108, 108, 111 ]); // Hello
const asciiString = bytesToAscii(bytes);
console.log(asciiString);