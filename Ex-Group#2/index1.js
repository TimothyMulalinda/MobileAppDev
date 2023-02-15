let title1 = "Medussa";

let objek = {
    title : "Medussa",
    subtitle : "Child of Yunta",
    latar : "Medussa is a woman and she the strongest woman in Vrugla Island",
};

export{title1, objek};

//=====================================================================================

let warna = "Hitam";

let Kota = {
        nama : "Denver",
        umur : 200,
        alamat : "Colorado",
    };

function katakanPeta(user){
    console.log(`Peta, ${user}!`);
}

export{warna as color, Kota as city, katakanPeta as Peta};

//=========================================================================================

function sayHello(user) {
    console.log(`Hello, ${user}!`);
  }

export default sayHello;