// nacl is a very famous cryptographic library for siging and verify

import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// generate a new keypair
const keypair = Keypair.generate();

// Extract the public and private keys
const publicKey = keypair.publicKey.toBase58();
const privateKey = keypair.secretKey

console.log("Public Key:",publicKey);
console.log("Private Key:",privateKey);

// conver message "hello world" to Uint8Array
const message = new TextEncoder().encode("Hello");

const signature = nacl.sign.detached(message, privateKey);
const result = nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes(),
);

console.log(result);

