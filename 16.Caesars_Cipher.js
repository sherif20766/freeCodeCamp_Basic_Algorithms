
/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 

In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation)*/


function rot13(str) {

 var x = str.toUpperCase().split("").map(function(x){
    return x.charCodeAt();
  });
  
 var y = x.map(function(x){
   if (x < 78 ){
   return x+13;
   } 
   return x-13;
 });
  
  var z = y.map(function(x){
    return String.fromCharCode(x);
  });

 return z.join("").replace(/\W/g, ' ');  

}

rot13("SERR PBQR PNZC");



// ES6 Code


const rot13 = str =>{
	let x = str.toUpperCase().split("").map(x=>x.charCodeAt());
	let y = x.map(x=>x<78?x+13:x-13);
	let z = y.map(x=>String.fromCharCode(x));
	return z.join("").replace(/\W/g, ' ');
}