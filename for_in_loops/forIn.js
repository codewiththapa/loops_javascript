/* "for in loop" other hand used to iterate over the enumerable properties of an objects
it allows you to access keys of an objects rather then the values  */

const student ={name:'suman',grade:'bachelor',rollno:1};
for(const i in student){
   console.log(` key:${i} value: ${student[i]}`)
}
