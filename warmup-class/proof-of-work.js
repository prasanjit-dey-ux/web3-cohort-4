/*
Assignment #1
What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

ans: You will have to brute force until you find a value that starts with 00000
*/

// const crypto = require('crypto');

// function findHashWithPrefix(prefix) {
//     let input = 0;
//     while(true) {
//         let inputStr = input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
//         if(hash.startsWith(prefix)) {
//             return { input: inputStr, hash: hash}
//         }
//         input ++;
//     }
// }

// const result = findHashWithPrefix('00000');
// console.log(`input: ${result.input}`);
// console.log(`hash:${result.hash}`);

/*
    Assignment #2
    What if I ask you that the input string should start with 100xdevs ? How would the code change?
*/


// const crypto = require('crypto');

// function findHashWithPrefix(prefix){
//     let input = 0;
//     while(true) {
//         let inputStr = "100xdevs" + input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex')
//         if(hash.startsWith(prefix)) {
//             return{ input: inputStr, hash: hash};
//         }
//         input++;
//     }    
// }

// const result = findHashWithPrefix('00000');
// console.log(`input: ${result.input}`);
// console.log(`hash: ${result.hash}`);


/*
    Assignment-3
    What if I ask you to find a nonce for the following input - 
    
    harkirat => Raman | Rs 100
    Ram => Ankit | Rs 10
*/

const crypto = require('crypto');

function findNonce(prefix) {
    let input = 0;
    while(true) {
        const baseData =
        "harkirat => Raman | Rs 100" +
        "Ram => Ankit | Rs 10\n";

        let inputStr = baseData + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)) {
            return {input: inputStr, hash: hash};
        }
        input++;
    }
}

const result = findNonce('00000')
console.log(`input: ${result.input}`);
console.log(`hash: ${result.hash}`);