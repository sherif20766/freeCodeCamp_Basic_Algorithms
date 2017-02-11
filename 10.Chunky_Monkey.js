//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.



//ES6 Code

const chunkArrayInGroups=(arr,size)=>{
	let answer=[];

	for(var i=0; i<arr.length; i+=size){
      answer.push(arr.slice(i,size+i));
  }

  return answer;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);