//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Method 1:
function largestOfFour(arr) {
  return arr.map(function(e){ 
    return e.reduce(function(x,y){
      return  x > y ? x : y;
    });
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




//ES6 code of Method 1:

const largestOfFour = arr => arr.map(e=>e.reduce((x,y)=>x>y?x:y));

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



/*-------------------------------------------------------------------------------------*/


// Method 2:

function largestOfFour(arr) {
  return arr.map(function(e){ 
    return Math.max.apply(null, e);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




//ES6 code for Method 2:

const largestOfFour = arr => arr.map(e=> Math.max.apply(null, e));

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


