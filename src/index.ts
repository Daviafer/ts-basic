//==============================
//String, boolean, number
//==============================
let x: number = 10;

x = 26;
console.log(x)

// CASO A PARTE: TIPO any (aceita qualquer)
// any existe somente TS
let q: any = 1
q = "Teste"
q = true
q = []

//==============================
//inferencia X annotation
//==============================
let a = 12;
a = 15

// annotation
let b: string = "Texto"
b = "Texto 2"

//==============================
//tipos básicos
//==============================
let firstName: string = "Fulano"
let age: number = 20
const isAdmin: boolean = true
/*
- Em JS os objetos são com letras maiusculas: String 
- Em JS os tipos são com letras minusculas: string

- Em TS sempre com letras minusculas
 */
firstName = "Outro nome"
console.log(firstName)
console.log(firstName)
console.log(firstName.toUpperCase())  // todos maiúsculo

//==============================
// Object
//==============================
const myNumbers: number[] = [1,2,3]

console.log(myNumbers)
console.log(myNumbers.length)
// adicionando elemento
myNumbers.push(4)
console.log(myNumbers)

//==============================
//Tuplas
//==============================
let myTuple: [number, string, string[]]
myTuple = [5, "Teste", ["as", "df"]]

// {prop: value}
const user: {name: string, age: number} = {
  name: "Fulano",
  age:20,
}
console.log(user)

//==============================
// union type
//==============================
// id aceita somente string ou numero
let id: string | number = "10"
id = 25

//id = true   erro
//id = []   erro

//==============================
// alias type
//==============================
type myIdType = string | number

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123

//==============================
// enum
//==============================
// tamanho roupas (size: Pequeno, size: Médio, size: Grande)
enum Size{
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}
const camisa = {
  name: "Camisa gola V",
  size: Size.M,
}
console.log(camisa)