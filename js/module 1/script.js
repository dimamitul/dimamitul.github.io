const string1 = "qwertyuiop[]\\"; console.log("first string: " + string1);
const string2 = "asdfghjkl;'"; console.log("second string: " + string2);
const string3 = "zxcvbnm,./"; console.log("third string: " + string3);

const string1Length = string1.length; console.log("first string length: " + string1Length);

const string2Length = string2.length; console.log("second string length: " + string2Length);

const string3Length = string3.length; console.log("third string length: " + string3Length);



let string1FirstChar = string1.charAt(0); console.log("first char from first string: " + string1FirstChar);
let string1LastChar = string1.charAt(string1Length - 1); console.log("last char from first string: " + string1LastChar);

let string2FirstChar = string2.charAt(0); console.log("first char from second string: " + string2FirstChar);
let string2LastChar = string2.charAt(string2Length - 1); console.log("last char from second string: " + string2LastChar);

let string3FirstChar = string3.charAt(0); console.log("first char from third string: " + string3FirstChar);
let string3LastChar = string3.charAt(string3Length - 1); console.log("last char from third string: " + string3LastChar);

let char1ToFind = '[';
let char2ToFind = ']';

let char1IndexInString1 = string1.indexOf(char1ToFind); console.log("index of char \"" + char1ToFind + "\" first string : "+ char1IndexInString1);
let char1IndexInString2 = string2.indexOf(char1ToFind); console.log("index of char \"" + char1ToFind + "\" second string : "+ char1IndexInString2);
let char1IndexInString3 = string3.indexOf(char1ToFind); console.log("index of char \"" + char1ToFind + "\" third string : "+ char1IndexInString3);



let char2IndexInString1 = string1.indexOf(char2ToFind); console.log("index of char \"" + char2ToFind + "\" first string : "+ char2IndexInString1);
let char2IndexInString2 = string2.indexOf(char2ToFind); console.log("index of char \"" + char2ToFind + "\" second string : "+ char2IndexInString2);
let char2IndexInString3 = string3.indexOf(char2ToFind); console.log("index of char \"" + char2ToFind + "\" third string : "+ char2IndexInString3);