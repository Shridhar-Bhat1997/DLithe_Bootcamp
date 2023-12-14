//---------------------array in javascript-----------------------------

let arr=[1,2.4,true,'rain'];
arr[5]="shri"; // it will add 1 empty item in 4th position
console.log(arr); // o/p: [ 1, 2.4, true, 'rain', <1 empty item>, 'shri' ]
console.log(arr.length); // 5
console.log(arr[arr.length-1]); // to find last element - shri

//to find the middle element

let b=[1,2,3,4,5];
let mid=0;
mid=(b[(b.length-1)/2]);
console.log(mid); // o/p: 3

//find the sum of middle elements

let d=[1,2,3,4]
result=d[(d.length/2)-1]+d[(d.length)/2]
console.log(result) // o/p:5

//-----------------------array methods--------------------------------

var arr=[1,2,3,4,5]
arr.push(8); // Appends new elements to the end of an array
arr.push(9,91); // returns the new length of the array
console.log(arr); // o/p: [1,2,3,4,5,8,9,91]

var arr=[1,2,3,4,5]
arr.pop();// Removes the last element from an array and returns it
console.log(arr); // o/p : [1,2,3,4]

var arr=[10,20,30];
arr.unshift(4); // Inserts new elements at the start of an array &
arr.unshift(1,2); // shifts other elements to higher index.
console.log(arr); // o/p: [ 1, 2, 4, 10, 20, 30 ]

var arr=[10,20,30];
arr.shift(); // Removes the first element from an array & shifts other elements to lower index.
console.log(arr); // o/p: [ 20, 30 ]

var arr=[10,20,30,40,50];
var arr1=arr; // it will effect original array
arr.splice(0,3,10);
console.log(arr1); // o/p: [ 10, 40, 50 ]
console.log(arr); o/p: [ 10, 40, 50 ]

let a=[1,2,3,4,5,6,7]; // accepts both +ve & -ve values
let b=a.slice(0,4); // start index & end index (excluded)
console.log(b); // o/p: [ 1, 2, 3, 4 ]

var c=[2,4,6,7];
var d=c.slice(0,-2); // extract specific part of an array
console.log(d); // o/p: [ 2, 4 ]

var a=[1,2,3,4,0,6,9,8];
var b=a.reverse(); // reverse the array elements
console.log(b); // o/p: [8, 9, 6, 0, 4, 3, 2, 1]

var a=[1,2,3,4];
var b=a.includes(3); // checks the existent of an element and returns boolean value
console.log(b); //o/p: true


//Javascript find() method:

//The JavaScript array find() method returns the first element of the given array
//that satisfies the provided function condition.

let arr=[10,20,30,40,50,60]
console.log(arr.find(m=>m>10)); // return one element which satisfy condition at first o/p:20

console.log(arr.some(m=>m>10)); // returns true if any one element satisfy condition
console.log(arr.every(m=>m>10)); // return false if any one element doesn't satisfy condition

//----------------Array Traversing--------------------------

var arr=["hii",2.4,56,true]

arr.forEach((val,index)=>{
    console.log(val,index);
    })


//iterate values - for of loop
var arr=["hii",2.4,56,true]
for(let i of arr){
    console.log(i);
}


//iterate index - for in loop
var arr=["hii",2.4,56,true]
for(let i in arr){
    console.log(i);
 }