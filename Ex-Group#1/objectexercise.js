//Object Exercises

let programming = {
    languages : ["Javascript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1
programming.languages.push("Go");
console.log(programming.languages);

//2
programming["difficulty"] = 7;
console.log(programming.difficulty);

//3
delete(programming.jokes);
console.log(programming);

//4
programming.isFun = true;
console.log(programming);

//5
let pro = programming.languages.map(function(languages, index){
    return index + "-" + languages
});
console.log(pro);

//Nama Kelompok : Denver
//Nama anggota :
//Vinsen Supit
//Shyalenn Kolibonso
//Timothy Mulalinda
//Gloria Susanto
//Virgil Weol