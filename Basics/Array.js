const arr = [1,2,3,4,5];
const arr1 = arr;
arr.push(6);//pushes element at end of array
console.log(arr1);
console.log(arr);
arr.pop();//removes the last element from array

arr.unshift(11)//add elements at start and shift all the other elements

arr.shift();//removes element from starting
console.log(arr);


const newArray = arr.slice(0,3);//1.creates shallow copy of original 2.Doesn't change the original array 3.takes startIndex and endIndex as parameters
const newArray1 = arr.splice(0,2);//1.can take 3 parament startIndex,deleteCount and Items to add(can be multiple) 2.Change in original array
console.log(newArray1);
console.log(arr);
const newArray2 = arr+newArray+newArray1;
console.log(newArray2);

const a = [1,2,3];
const b = [4,5,6];
const c = [7,8,9];
console.log(a.concat(b,c));//combines two or more array and returns new array without modifying existing array
console.log(typeof a);

