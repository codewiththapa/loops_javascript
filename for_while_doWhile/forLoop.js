//1.

let marks = [
  {id:'s9102' , science:99},
  {id:'s2340' , science: 90},
  {id:'s94u0' , science: 80}];

let studentAbove90Marks =[];

for(j=0; j<marks.length; j++){
  if(marks[j].science>=90){
     studentAbove90Marks.push(marks[j])
  }
};
console.log(studentAbove90Marks);

//2.

const ourNum = [ 2,3,4,5];

function multiplyBy2(number,index){
   console.log('index :', index)
   console.log(`${number}*2 = ${number*2}`)
};

for(j=0; j<ourNum.length; j=j+1){
   
   multiplyBy2(ourNum[j],j)
}

//