//Array filter() method:

const arr = [23,134,56,70,26];

let filter = arr.filter((ele,index,array)=>{
  console.log(ele,index,array)
  return ele<=50
});
console.log(arr,filter)
