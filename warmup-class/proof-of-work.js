/*
Assignment #1
What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

ans: You will have to brute force until you find a value that starts with 00000
*/

const crypto = require('crypto');

function findHashWithPrefix(prefix) {
    let input = 0;
    while(true) {
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash}
        }
        input ++;
    }
}

const result = findHashWithPrefix('0000');
console.log(`input: ${result.input}`);
console.log(`hash:${result.hash}`);
