//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  var x = str.split(" ");
  var y = x.map(function(e){
   e = e[0].toUpperCase() + e.slice(1).toLowerCase();
    return e;
  });
  
  return y.join(" ");
}

titleCase("sHoRt AnD sToUt");




//ES6 Code

const titleCase = str => (str.split(" ").map(e=>e = e[0].toUpperCase()+e.slice(1).toLowerCase())).join(" ");
	

titleCase("I'm a little tea pot")
