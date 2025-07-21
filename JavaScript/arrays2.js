var arr=[11,222,33,44,55,66];
// var arr1=arr.map(function(item,index){
//      return item*index;
// });
var arr1=arr.map((i,idx)=>{
    return i*idx;
})
console.log(arr1);

var arr=[11,222,33,44,55,66];
var arr2=arr.map((x)=>x>50);
console.log(arr2);


//filter()
var arr=[11,222,33,44,55,66];
var arr1=arr.filter((item,idx)=>{
    return item>50
})
console.log(arr1);

//reduce
var arr=[11,222,33,44,55,66];
var sum=arr.reduce(function(total,item,index){
    return total+=item;
})
console.log(sum);

var arr=[11,-222,33.5,4,555,66];
arr.sort((a,b)=>{
    return a-b;
});
console.log(arr)

var arr=[11,-222,33.5,4,555,66];
var a=arr.find((i,idx)=>{
    return i%2==0
})
console.log(a)

var arr=[11,-222,33.5,4,555,66];
var a=arr.findIndex((i,idx)=>{
    return i%2==0
})
console.log(a)

var arr=[11,-222,33.5,4,555,66];
var a=arr.some((i,idx)=>{
    return i>1;
})
console.log(a)

var arr=[11,-222,33.5,4,555,66];
var a=arr.every((i,idx)=>{
    return i>1;
})
console.log(a)

var arr=[11,-222,33.5,4,555,66];
var a=arr.reverse
console.log(a)

var arr=[11,-222,33.5,4,555,66];
var a=arr.join("-")
console.log(a)
var b=a.split()
console.log(b)