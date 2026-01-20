import * as ed from "@noble/ed25519";

export async function verifySignature(
    signature: Uint8Array,
    messageBytes: Uint8Array,
    publicKey: Uint8Array
) {
    return await ed.verifyAsync(signature, messageBytes, publicKey)
}