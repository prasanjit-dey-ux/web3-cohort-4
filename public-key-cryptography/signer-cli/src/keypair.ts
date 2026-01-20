import * as ed from "@noble/ed25519";

export async function generateKeyPair() {
    const privateKey = ed.utils.randomSecretKey();
    const publicKey = await ed.getPublicKeyAsync(privateKey);

    return { privateKey, publicKey };
};
