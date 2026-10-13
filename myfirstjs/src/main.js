//javascript -->Programming Languange
/*
Programming languange
1. output and input
2. variable and data type
3. condition (if else)
4. looping(pengulangan)
5. fungsion
*/

1.//output
//1. using console.log();
console.log("Hello world!");
console.log("Welcome to SMA ABBS Surakarta");
//2. using alert();
alert(" Welcome to My Website")
//3. using innerHTML
document.getElementById("name").innerHTML="My Name is Muhammd Rakha Arkan Sasmita";

//variable --> to store data (untuk menyimpan data)
//variable : let, var, const
//let
let firstname = "Rakha";
console.log(firstname);
let lastname ="Sasmita";
console.log(lastname);
console.log(firstname, lastname);
let a = 5;
a = 6; //--> bisa merubah tampilan 5 jadi 6
console.log(a);
var b =5;
var b =6;
console.log(b)
const c= 5;
console.log(c);

//Type Data
//1, string = character(angka,huruf,dll)--> use ""/''
//2. number (integer-->bialngan bulat, float--bilangan pecahan/desimal)
//3. boolean = True/False
let data1 = "SMA ABBS Surakarta";//string
let data2 = "100"; //string
let data3 = 50; //integer
let data4 = 25.25; //float
let data5 = true; //boolean

2//Operator
/* 1. operator aritmatika
- penjumlahan(+)
-pengurangan(-)
-perkalian(*)
-pembagian(/)
-perpangkatan(**)
-modulus(%)-->sisa hasil bagi
*/
//Example:
let number1 = 200;
let number2 = 25;
console.log(number1 + number2);

let number3 = 14;
let number4 = 11;
console.log(number3 - number4);

let number5 = 13;
let number6 = 12;
console.log(number5 * number6);

let number7 = 16
let number8 = 2
console.log(number7 / number8);

let number9 = 18
console.log(number9**2);

//Menghitung Luas Persegi Panjang --> Luas= panjang*lebar
let panjang = 10;
let lebar = 5;
let luas = panjang*lebar;
console.log("Luas Persegi Panjang adalah ", luas);

//Membuat Rumus BMI--> BMi=Berat badan / Tinggi badan*Tinggi badan
let berat = 60;
let tinggi = 1.72;
let BMI= berat/tinggi*tinggi;
console.log("Berat Badan=",berat);
console.log("Tinggi Badan=",tinggi);
console.log("BMI=", BMI);
/*2. Comperation operators(operator perbandingan)
- equal to(==)
-not aqual(!=)
-greather than(>)
-great than or aqual(>=)
-less than(>)
-less than or aqual(<=)
*/
let x =10
console.log (x == 10); //true
console.log (x != 10); //false
console.log (x > 10); //false
console.log (x >= 20); //true
console.log (x <= 20); //true
/*
3. Logical operators
- AND (&&)--> jika semua nilai true resultnya true
- OR (!!)--> ada 1 true= true
- NOT (!)-->kebalikan dari A(kalo ada A=true resultnya jadi false)
*/

3.//Condition
/*1 condition
if (codition){
    action;
}
*/
let y=10;
if (y >=10){
    console.log("Good Morning");
}

/* 2 conditionn
if (condition){
    action 1;
}
else{
    action 2;
}
*/
let p = 10;
if (p >= 10){
    console.log("Good Morning")
}
else{
    console.log("Good afternoon")
}