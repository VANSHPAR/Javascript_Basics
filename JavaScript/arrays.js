var arr=[11,222,33,44,55,66];
console.log(arr);
console.log(arr.length);

var arr=[11,222,33,44,55,66];
console.log(arr.includes(222));
console.log(arr.indexOf(222));

var arr=[11,222,33,44,55,66];
arr.push(56);
console.log(arr);


var a=[11,222].push(78,79,99);
console.log(a);

var arr=[11,222,33,44,55,66];
console.log(arr.pop());

var arr=[11,222,33,44,55,66];
arr.unshift(0);
console.log(arr);

var arr=[11,222,33,44,55,66];
var a=arr.shift();
console.log(a);

var arr=[11,222,33,44,55,66];
arr.splice(2,2,34,35);
console.log(arr);
arr.splice(2,2);
console.log(arr);

var arr=[11,222,33,44,55,66];
arr.splice(2,0,34,35);
console.log(arr);

var arr=[11,222,33,44,55,66];
var arr1=arr.slice(2,5);
console.log(arr1);

