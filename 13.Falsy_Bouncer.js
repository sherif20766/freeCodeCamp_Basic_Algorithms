/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/


function bouncer(arr) {
 return arr.filter(function(x){
    return !!x;
  });
}

bouncer([1, null, NaN, 2, undefined])



//ES6 Code

const bouncer = arr=>arr.filter(x=>!!x);