/* Reduce() Array method... reduce an array to a single value
 Syntax: array.reduce( function(total, currentValue, currentIndex, arr), initialValue ) */

//1.
const sumAll = [2,5,65.98,2434]

//sum  of all array numbers 

const adding = sumAll.reduce((acummulator,currentValue)=>{
   return acummulator+currentValue
});

console.log(adding);   // outout:2506.98

/*  nOW check how reduce works..  const sumAll = [2,5,65.98,2434]


accumulator     currentValue    return
 2                   5          2+5=7
 7                   65          7+65.98 =72.98
 72.98               2434         72.98+2434 = 2506.98      */ 
 
 

//2.
const reduceMethod = [2,3,4,5,6];

let rdResult = reduceMethod.reduce((accumulator,currentVal,currentIdx,array)=>{
    return accumulator+currentVal
});

document.write(rdResult)   // output: 20


//3

 //reduce syntax .. arr.reduce(function(totalVal,currentVal,indx,array),initialValue)     
const cart = [
    {productId:1, productName:'mobile', price:50000},
      {productId:2, productName:'pant', price:4000},
        {productId:3, productName:'bucket', price:1200},
          {productId:4, productName:'sofa', price:10000},
     ];
  
  const cartOutput = cart.reduce((totalprice,productCurentPrice)=>{
     return totalprice+productCurentPrice.price 
  },0);
  
  console.log(cartOutput);   // 65200