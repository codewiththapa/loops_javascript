/* map() Higher order Array method : creates a new array performing some operations in each elements ...   using map() method.. **always return some value and **also creates new array if you will not return explicitly map method it will give us undefined as output ..   (method to create a new array by applying a function to each element)
syntax: map((currentElement, indexOfElement, array) => { ... } );   */


//chianing in map method

const chaining = [12,1,2,3,4,5,6,7];

const mapChain= chaining
                       .map((num)=>num*10)
                       .map((num)=>num+1)
                       .filter((num)=>num>=25)
console.log(mapChain);



//1
const months = ['jan','feb','march','april'];
months.map((month)=>{
   console.log(month)   
  
}) 


//2.
let mapNum = [2,3,4,5]
 console.log(mapNum);

 const last = mapNum.map((ele)=>{
   console.log(ele)
   return ele+1
 });

 console.log(last);


 //3.   Here we are getting undefined because we are not using 'return' explicitly
 const numbers = [1,2,3,4,5];

// here no return using
const square = function (ele){
    console.log(ele*2);         // output: 2,4,6,8,10
}

const squareNumber = numbers.map(square)
console.log(squareNumber);                //output:[undefined,undefined,...]


//now using return explicitlly..
const numbers = [1,2,3,4,5];

const square = function (ele){
  return (ele*2);        
}
const squareNumber = numbers.map(square)
console.log(squareNumber);              //output : [ 2,4,6,8,10]


//4:


const facebookUsers = [
  {Names:'suman', country:"nepal"},
   {Names:'magarKta', country:"uae"},
    {Names:'thapa', country:"usa"},
  ];

const survey = facebookUsers.map((ele,indx)=>{
  console.log(ele)
  return `Our facebookusers in index ${indx} no. ${ele.Names} is from country ${ele.country}`
});

console.log(survey)