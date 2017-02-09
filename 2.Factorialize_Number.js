/* Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n */

const factorialize = num => {
  let x = 1;
  for(let i=1; i<= num; i++){
    x = x*i;
  }
  return x;
}

factorialize(5);
