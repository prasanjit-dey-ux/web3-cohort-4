import { generateKeyPair } from "./keypair";
import { messageToBytes } from "./util";
import { signMessage } from "./sign";
import { verifySignature } from "./verify";

const message = process.argv.slice(2).join(" ");

if(!message) {
    console.log("Usage:");
    console.log("bun run src/index.ts \"hello world\" ");
    process.exit(1);
}

const { privateKey, publicKey} = await generateKeyPair();
const messageBytes = messageToBytes(message);

const signature = await signMessage(messageBytes, privateKey);

const isValid = await verifySignature(
    signature,
    messageBytes,
    publicKey
);

console.log("Message:", message);
console.log("Signature valid: ", isValid);