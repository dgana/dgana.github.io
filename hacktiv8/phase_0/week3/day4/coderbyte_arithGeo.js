function ArithGeo(arr){
	return (arr[1] - arr[0] === arr[arr.length-1] - arr[arr.length-2]) ? 'Arithmetic' :
	(arr[1] / arr[0] === arr[arr.length-1] / arr[arr.length-2]) ? 'Geometric' : '-1';
}

console.log(ArithGeo([2,6,10,15]));
