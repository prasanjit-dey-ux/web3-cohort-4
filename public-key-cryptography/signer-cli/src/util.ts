export function messageToBytes(message: string): Uint8Array {
    return new TextEncoder().encode(message);    
};