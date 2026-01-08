/*
    What do you think happens to the first element here? Does it throw an error?

    ```
        let uint8Arr = new Uint8Array([0, 255, 127, 128]);
        uint8Arr[1] = 300;
    ```
*/


let bytes = new Uint8Array([0,255,127,128]);
console.log(bytes);
bytes[1]=400;
console.log(bytes);

