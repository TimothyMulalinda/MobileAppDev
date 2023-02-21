let people = ["Vinsen", "Moti", "Shya", "Glo", "Ijil"];

//1
for (let i = 0 ; i<people.length ; i++){
    console.log(people[i]);
};

//2
people.forEach(function(value){
    console.log(value);
});

//3
people.shift();
console.log(people);

//4
people.pop
console.log(people);

//5
people.unshift("Wayan");
console.log(people);

//6
people.push("Denver");
console.log(people);

//7
for (let i = 0; i< people.length; i++){
    console.log(people[i]);
    if(people[i] === "Moti"){
        break;
    }
};

//8
let copy = people.slice(0, 2);
console.log(copy);

//9
people.splice(3, 1);
people.splice(2, 1, "Rolly");
people.splice(3, 1, "Adam");
console.log(people);

//10
let withBob = people.concat("Bob");
console.log(withBob);

//Nama Kelompok : Denver
//Nama anggota :
//Vinsen Supit
//Shyalenn Kolibonso
//Timothy Mulalinda
//Gloria Susanto
//Virgil Weol