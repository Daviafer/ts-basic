"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//==============================
//String, boolean, number
//==============================
let x = 10;
x = 26;
console.log(x);
// CASO A PARTE: TIPO any (aceita qualquer)
// any existe somente TS
let q = 1;
q = "Teste";
q = true;
q = [];
//==============================
//inferencia X annotation
//==============================
let a = 12;
a = 15;
// annotation
let b = "Texto";
b = "Texto 2";
//==============================
//tipos básicos
//==============================
let firstName = "Fulano";
let age = 20;
const isAdmin = true;
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
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// adicionando elemento
myNumbers.push(4);
console.log(myNumbers);
//==============================
//Tuplas
//==============================
let myTuple;
myTuple = [5, "Teste", ["as", "df"]];
// {prop: value}
const user = {
    name: "Fulano",
    age: 20,
};
console.log(user);
//==============================
// union type
//==============================
// id aceita somente string ou numero
let id = "10";
id = 25;
const userId = 10;
const productId = "00001";
const shirId = 123;
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
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
//==============================
// literal types
//==============================
// declarando um valor como um tipo ou nulo
let teste;
teste = "autenticado"; /* não pode ser alterado */
teste = null;
//==============================
// function
//==============================
// função precisam ser tipadas
function sum(a, b) {
    return a + b;
}
console.log(sum(23, 23));
//retornando uma string - (parametro: tipo)
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Davi"));
// sem retorno - void
function logger(msg) {
    console.log(msg);
}
logger("Teste...");
// greet - o ? é opcional, mas precisa usar algum tratamento
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("José"); /* sem o greet  - greet é opcional*/
greeting("Pedro", "sr"); /* informando greet */
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
// tipando para reutilizar as variáveis
const someNumbers = {
    n1: 5,
    n2: 4,
};
// ex
console.log(multiplyNumbers(someNumbers));
//==============================
// narrowing - checagem de tipos
//==============================
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado número");
}
doSomething(5);
doSomething(true);
//==============================
// Generics - funções mais genérica
//==============================
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "s", "d"];
showArraysItems(a1);
showArraysItems(a2);
//==============================
// Classe
//==============================
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    // método
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    //argumento 
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const pessoa1 = new User("Fulano", "Admin", true);
console.log(pessoa1);
pessoa1.showUserName();
pessoa1.showUserRole(true); // mostrando role (cargo, função)
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
//==============================
// Herança
//==============================
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand(); /* método classe pai */
//==============================
// Decorators 
//==============================
// validação de dados; construir um evento observável em algum ponto de uma classe / função
// descomentar o "experimentalDecorator" do tsconfig.json
// constructor decorator - inserindo 2 propriedades ao objeto Person
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Ciclano");
console.log(sam);
