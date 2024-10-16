/* 'for of Loop'  : is used to iterate over the values of an iterable objects 
such as  'strings' and on 'arrays' 
Note: In "for of" Loop we dont need any (initilaization;condition;updation) like in other 
       "for" loops  here in "for of loop" it will be automaticaly initiliaze and update 
"for of loop" : [array, Map, set , string] to iterate  over values     */
 
//1.
const Ourusers = [
       {firstName:'suman' , age:28 },
       { firstName:'thapa' , age:29},
       { firstName:'magar' , age:30},
       { firstName:'dipti' , age:40},
        ]
     
     for(key of Ourusers){
        console.log(key.firstName,key['age'])
        console.log(key.age)
     
     }
     


//2
const str = 'suman';
let length = 0;

for(const i of str){
   console.log(i);             //output: suman
    length++; 
}

console.log(length);   //output: 5