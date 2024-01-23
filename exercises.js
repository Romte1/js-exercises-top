// Let’s write some functions! Write these in the script tag of a skeleton HTML file. If you’ve forgotten how to set it up, review the instructions from Fundamentals Part 1.

// For now, just write each function and test the output with console.log.

// Write a function called add7 that takes one number and returns that number + 7.
// Write a function called multiply that takes 2 numbers and returns their product.
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

////

let num = 15;
let add7 = (num) => num+7;
console.log(add7(num));

////

let num2 = 2;
let num3 = 3;
let multiply = (num2, num3) => num2*num3;
console.log(multiply(num2, num3));

/////
let string = 'hola';
let capitalize = (string) => {
    let modString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return modString;
};

    console.log(capitalize(string));

/////
string = 'pizza de don cangrejo';
let lastLetter = (string) => {
    let stringLast = string.charAt(string.length-1);
    return stringLast;
}

    console.log (lastLetter(string));
