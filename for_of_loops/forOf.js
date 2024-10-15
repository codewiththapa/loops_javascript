/* 'for of Loop'  : is used to iterate over the values of an iterable objects 
such as  'strings' and on 'arrays' 
Note: In "for of" Loop we dont need any (initilaization;condition;updation) like in other 
       "for" loops  here in "for of loop" it will be automaticaly initiliaze and update 
"for of loop" : [array, Map, set , string] to iterate  over values     */
          
const str = 'suman';
let length = 0;

for(const i of str){
   console.log(i);             //output: suman
    length++; 
}

console.log(length);   //output: 5