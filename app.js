// sort an array from loweost to highest
let arr1 = [10,8,7,6,5,4,3,2,1]
arr1.sort()
console.table(arr1)  //😥😥 does not arrange the numbers as expected
/*  --10 comes before 2,3,4,4,5,6,7,9,  */

//-----🙌🙌🪄🪄-----//   //problem-solved-solved
/*- -in order to get a correct arrangement use comparison functions */

let arr2 = [3,5,67,89,9,10]
arr2.sort((a,b) => a-b)
console.log(arr2);

