/* 'forEach()' method in js calls a function for each element in an array in order
 
 syntax : forEach(callbackfunction(currentVal[,index,[Array]])[,thisArg])  */

 const favLang = ['js','react','java','linux'];


console.log(favLang.indexOf('linux'))

console.log(favLang[0])
console.log(favLang[1])
console.log(favLang[2])

 for(i=0;i<favLang.length;i=i+1){
   console.log(favLang[i])
 }


 //create forEach elements Array add the value 100 to each item and update the element value.

const arrayElement = [10,12,13,14];

arrayElement.forEach(function(element,index,array){
   console.log(array[index]+100)
})


//

const names = ['suman','thapa','magar','mina thapa'];

names.forEach(function(value,index,array){
     document.write(`${index}:${value} <br>`)
})


//

const fruits = ['apple','banana','dragon Fruits','watermelon'];

function loops(value,index,array){
   document.write(`${index}:${value} <br>`)
}

fruits.forEach(loops)

//

const arryNum = [2,3,4,5]


// arryNum.forEach(dobule)
// arryNum.forEach(triple)
arryNum.forEach(square)
arryNum.forEach(displayArry)

function displayArry (element){
   console.log(element);
}

// double the arryNum elements:

function dobule(element,index,array){
    array[index] = element*2
}

//triple the element

function triple(element,index,array){
  array[index] = element*3
}

//square the elements

function square(element,index,array){
    array[index] = Math.pow(element,2)
}
