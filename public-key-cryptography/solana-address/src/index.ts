// A Solana address = the Ed25519 public key, encoded in Base58

import * as ed from "@noble/ed25519";
import bs58 from "bs58";

// 1. Generate secret key (wallet identity)
const secretKey = ed.utils.randomSecretKey();

// 2. Derive public key (account identity)
const publicKey =  await ed.getPublicKeyAsync(secretKey);

// 3. Encode public key as Base58 (Solana address)
const solanaAddress = bs58.encode(publicKey);

// output
console.log("Secret key (Bytes):", secretKey);
console.log("Public key (bytes):", publicKey);
console.log("Solana address:", solanaAddress);