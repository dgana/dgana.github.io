function PowersofTwo(num) {
var x = 0;
  for(i = 1; x < num; i++){
    x = Math.pow(2,i);
  }
  return(x === num) ? true : false;
}

// keep this function call here
console.log(PowersOfTwo(16)); 
