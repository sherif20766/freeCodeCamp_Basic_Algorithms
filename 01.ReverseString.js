//Create a function that reverses a string


function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");


//ES6 Code

const reverseString2 = str=>str.split("").reverse().join("");

reverseString2("hello");
