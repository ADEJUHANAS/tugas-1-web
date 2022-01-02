// membuat variabel
let myNumber = 16;
let myString = "Hello"
let myBoolean = true
const phi = 3.14
// menampilkan informasi ke console
console.log(myNumber)
console.log(myString)
console.log(myBoolean)
console.log(phi)
// menampilkan informasi dalam bentuk alert pada window
// window.alert("Angka favorit saya adalah : " + myNumber)
// window.alert('Angka favorit saya adalah : ' + myNumber)
// window.alert(`Angka favorit saya adalah : ${myNumber}`)

console.log("\nAritmatika");
let x = 8
let y = 4
console.log(x, y)
console.log('x + y =', x + y)
console.log('x - y =', x - y)
console.log('x * y =', x * y)
console.log('x / y =', x / y)
console.log('x % y =', x % y)
console.log('x++ =', x++)
console.log('++x =', ++x)
console.log('x-- =', x--)
console.log('--x =', --x)

console.log("\nPerbandingan");
let a = 8
let b = 4
console.log(a, b)
console.log('a > b =', a > b)
console.log('a < b =', a < b)
console.log('a >= b =', a >= b)
console.log('a <= b =', a <= b)
console.log('a == b =', a == b)
console.log('a != b =', a != b)
console.log('a === b =', a === b)
console.log('a !== b =', a !== b)

console.log("\noperator logika");
console.log('true && true =', true && true)
console.log('true && false =', true && false)
console.log('false && true =', false && true)
console.log('false && false =', false && false)
console.log('true || true =', true || true)
console.log('true || false =', true || false)
console.log('false || true =', false || true)
console.log('false || false =', false || false)
console.log('!true =', !true)
console.log('!false =', !false)

console.log("\nmembuat fungsi");
console.log("luas persegi\n");
function luas_persegi(lebar){
    var panjang = 20;
    var luas = lebar * panjang;
    console.log(panjang + " + " + lebar + " = " + luas);
}

function luas_segitiga(alas,tinggi){
    var luas = 0.5 * alas * tinggi;
    console.log("0.5 * " + alas + " * " + tinggi + " = " + luas);
}
function volume_balok(panjang,lebar,tinggi){
    var volume = panjang * lebar * tinggi ;
    console.log(panjang + " * " + lebar + " * " + tinggi + " = " + volume);
}
luas_persegi(5);
console.log("luas segitiga\n");
luas_segitiga(20,15)
console.log("volume balok\n");
volume_balok(1,2,3);

console.log("\narray");
var hewan = ["singa" , "Harimau" , "garuda" , "serigala"];
console.log(hewan[0]);
console.log(hewan[1]);
console.log(hewan[2]);
console.log(hewan[3] + "\n");
 
 hewan[1]="gajah";
console.log (hewan);


console.log("\nmethod push");
hewan.push ("ayam");
console.log(hewan);


console.log("\nmethod pop");
hewan.pop();

console.log(hewan);

console.log("\npropertylength");
console.log(hewan.length);

console.log("\nmethod unshift");
hewan.unshift("jerapah");

console.log(hewan);

console.log("\nmethod shift");
hewan.shift();

console.log(hewan);

console.log("\nmethod sort");
hewan.sort();

console.log(hewan);

console.log("\nmethod reverse");
hewan.reverse();
console.log(hewan);

console.log("\nobjek");
let person = { 
    firstName:"Ade",
    lastName: "Juhanas",
    id:1234,
    alamat:"JL.Datuk Laksamana",
    status:"Mahasiswa",
    fullName:function(){
        return this.firstName + " " + this.lastName + " id = " + this.id; 
    }
};

console.log("\nmengakses dengan dot notation");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);
console.log(person.alamat);
console.log(person.status);
console.log(person.fullName());

console.log("\nmengakses dengan bracket notation");
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["id"]);
console.log(person["alamat"]);
console.log(person["status"]);
console.log(person["fullName"]());


console.log("\nanomali pada javasript");
console.log(0.1 + 0.2 == 0.3)
console.log(1 + "1")
console.log(1 - "1")
console.log(1 < 2 < 3)
console.log(3 > 2 > 1)
console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)

