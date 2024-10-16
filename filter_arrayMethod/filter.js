//Array filter() method: filter method will return boolean values true or false with creating new arrays..


//1.
const arr = [23,134,56,70,26];

let filter = arr.filter((ele,index,array)=>{
  console.log(ele,index,array)
  return ele<=50
});
console.log(arr,filter)

//2.

const books = [
  { title:'book1', genere:'fiction', publishYear: 1996, edition: 2002},
   { title:'book2', genere:'mathematics', publishYear: 1985, edition: 2001},
    { title:'book3', genere:'science', publishYear: 1975, edition: 2010},
     { title:'book4', genere:'history', publishYear: 1998, edition: 2020},
   ]

const resultOfBooks = books.filter(bk=>bk.genere ==='science')
console.log(resultOfBooks);

const booksYear = books.filter(bk =>{return bk.edition>2002});
console.log(booksYear);