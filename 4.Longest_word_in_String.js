// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
 var x= str.split(" ");
 
 var y = x.map(function(e){
    return e.length;
  });
  return Math.max.apply(null, y);
}

findLongestWord("The quick brown fox jumped over the lazy dog");



//ES6 Code

const findLongestWord = str => Math.max.apply(null, str.split(" ").map(x=>x.length));
