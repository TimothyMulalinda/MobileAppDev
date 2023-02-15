//let vs const
// contoh ES5 dan ES6

const join  = {
    fullname:"Joy",
    age:19,
    address:"Bitung"
};

const es5 = "Halo, Nama saya " + join.fullname + " umur saya " + join.age + ", kemudian saya tinggal di " + join.address;

console.log(es5);

const es6 = `Halo, nama saya ${join.fullname}, umur saya ${join.age}, dan saya tinggal di ${join.address}`;

console.log(es6);

//===============================================================================================================================

//ARROW FUNCTION

//Cara Lama ES5
function greetings5(){
    return "wassup";
}
let output5 = greetings5();
console.log(output5)

//ES6
const greetings6 = () => {
    return "yoo wassupp";
}
let output6 = greetings6();
console.log(output6);

//implicit return value
// const greetings6 = () => `Yoo, ${join.fullname}`;

//latihan kecil
let numbers = [1, 2, 3, 4, 5];
let output4 = numbers.map((item) => item * 2);

console.log(output4);

//==========================================================================================

//DEFAULT PARAMETER
let login = (user, pass = 123) => {

    console.log(`Username : ${user}, password : ${pass}`);
};

login("joy");

//============================================================================================

//Rest Parameter (dipakai ketika banyak skli parameter)
let absent = (...o) => {
    console.log("Selalu Alpa",o);
  }
absent("Vito", "Erick", "Clement", "Alo", "Utu", "Yanto");

//Rest Parameter digunakan sebagai parameter terakhir
const absen = (a1, a2, a3, ... aa) => {
    console.log("Hadir",a1);
    console.log("Hadir",a2);
    console.log("Hadir",a3);
    console.log("Tidak Hadir ",aa);
  }
  absen("Vito", 10, "Clement", "Alo", "Utu", "Yanto");







