import * as ed from "@noble/ed25519";

export async function signMessage(
    messageBytes: Uint8Array,
    privateKey: Uint8Array
) {
    return await ed.signAsync(messageBytes, privateKey);
}