/* "for in loop" other hand used to iterate over the enumerable properties of an objects
it allows you to access keys of an objects rather then the values 
for in loop (for iterating over object properties)        */

//1.
const array = [12,1,2,3,4];

for(let ele in array){
   console.log(ele,array[ele])
}

//2.

 let  student = {
   name:'suman', 
   garde:12, 
   rollno:12
}
for(let key in student){
   console.log(key,student[key])
};

//3.

const student ={name:'suman',grade:'bachelor',rollno:1};
for(const i in student){
   console.log(` key:${i} value: ${student[i]}`)
}
