function OtherProducts(arr) {

var newArray = [];
var copyArray = arr.slice();

if (arr.length > 10) {return null;}
else if (arr.length < 1) {return null;}
else {
  for(i = 0; i < arr.length; i++){
    arr.splice(i,1);
	  var x = 1;
      for(j = 0; j < arr.length; j++){
			  x *= arr[j];
      }
		newArray[i] = x;
		arr.splice(i,0,copyArray[i]);
  }
}

return newArray.join('-');

}

// keep this function call here
console.log(OtherProducts([1,2,3,4,5]));  
