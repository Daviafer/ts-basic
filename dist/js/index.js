"use strict";
//==============================
//String, boolean, number
//==============================
var x = 10;
x = 26;
console.log(x);
// CASO A PARTE: TIPO any (aceita qualquer)
// any existe somente TS
var q = 1;
q = "Teste";
q = true;
q = [];
//==============================
//inferencia X annotation
//==============================
var a = 12;
a = 15;
// annotation
var b = "Texto";
b = "Texto 2";
//==============================
//tipos básicos
//==============================
var firstName = "Fulano";
var age = 20;
var isAdmin = true;
/*
- Em JS os objetos são com letras maiusculas: String
- Em JS os tipos são com letras minusculas: string

- Em TS sempre com letras minusculas
 */
firstName = "Outro nome";
console.log(firstName);
console.log(firstName);
console.log(firstName.toUpperCase()); // todos maiúsculo
//==============================
// Object
//==============================
var myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// adicionando elemento
myNumbers.push(4);
console.log(myNumbers);
//==============================
//Tuplas
//==============================
var myTuple;
myTuple = [5, "Teste", ["as", "df"]];
// {prop: value}
var user = {
    name: "Fulano",
    age: 20,
};
console.log(user);
//==============================
// union type
//==============================
// id aceita somente string ou numero
var id = "10";
id = 25;
var userId = 10;
var productId = "00001";
var shirId = 123;
//==============================
// enum
//==============================
// tamanho roupas (size: Pequeno, size: Médio, size: Grande)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
var camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
