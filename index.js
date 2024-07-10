
   //Question no 1
let emptyArray = [];

emptyArray[0].push(1);
emptyArray[0].push(2);


  ///Question no 2
let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
  console.log(matrix)



    ///Question no 3
for(var i = 1; i <= 10; i++){
   console.log(i)
}

  ///Question no 4
let tableInput = +prompt("Enter a number to show its multiplication table");
let lengthInput = +prompt("Enter length multiplication table");

for (let i = 1; i <= lengthInput; i++) {
    document.write(`${tableInput} x ${i} = ${i * tableInput}<br>`);
    
}

  ///Question no 5
let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
for (let fruit of fruits) {
    document.write(fruit + "<br>");
}

for (let i = 0; i < fruits.length; i++) {
    document.write(`Element at ${i} is ${fruits[i]}<br>`);
    
}

  //Question no 6

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write("<h1>Counting</h1>");
document.write(counting.join(", "));

var ReverseCounting  = [10,9,8,7,6,5,4,3,2,1]
document.write("<h1>Reverse Counting</h1>");
document.write(ReverseCounting.join(", "));

var evenCounting  = [0,2,4,6,8,10,12,14,16,18,20]
document.write("<h1>Even</h1>");
document.write(evenCounting.join(", "));

var oddCounting  = [1,3,5,7,9,11,13,15,17,19]
document.write("<h1>Odd</h1>");
document.write(oddCounting.join(", "));

var seriesCounting  = [2,4,6,8,10,12,14,16,18,20]
document.write("<h1>Seires</h1>");
document.write(seriesCounting.join(" k, "));


  //Question no 7
var flag = true;
 var count= 0
 while (flag){
     count += 5
     console.log(count)
     if(count === 100){
         flag = false
     }
    
 }



