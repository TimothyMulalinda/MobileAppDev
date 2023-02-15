//SPREAD PARAMETER 

// function sum(a, b, c){
//     return a * b + c;    
//   } 
//   const angka = [25, 50, 100];
//   console.log(sum(...angka));

//========================================

//Duplicate Array
//   let numbers = [1,2,3,4,5];
//   let numbers2 = [...numbers];
//   numbers.push("Arigatou");
//   console.log(numbers2)
//   console.log(numbers)

//Menggabungkan Array ES5
//  let numbers1 = [1,2,3];
//  let numbers2 = [4,5,6];
//  let numbers3 = [7,8,9];

//  let a = numbers1.concat(4, numbers2, numbers3);
//  console.log(a);

//  //ES6
//  let b = [...numbers1, 4, ...numbers2, ...numbers3];
//  console.log(b);

 //=====================================

 let person = ["Timothy", "Bitung", 19];

let Fulname = person[0];
let Address = person[1];
let Age = person[2];

// let [nama, alamat,  umur] = person;
// console.log(nama, alamat, umur);

// destructuring compare with rest parameter.
let [nama, alamat, ... umur] = person;
console.log(nama, alamat, umur);

//=======================================

 



