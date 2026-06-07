class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

    let encodedString = "";

    for(let str of strs){
        encodedString +=str.length + '#' + str;
    }
    return encodedString;
    }

    decode(str) {

const result = [];
let i =0;
while(i<str.length){
    let j=i;

    while(str[j] !=="#"){
        j++;
    }

    let length = Number(str.substring(i,j));

    let word = str.substring(j+1 , j+1+length);

    result.push(word);

    i=j+1+length;
}
return result;


    }
}
