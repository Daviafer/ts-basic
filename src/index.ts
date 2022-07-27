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

//==============================
// literal types
//==============================
// declarando um valor como um tipo ou nulo
let teste: "autenticado" | null
teste = "autenticado" /* não pode ser alterado */
teste = null

//==============================
// function
//==============================
// função precisam ser tipadas
function sum(a: number, b: number) {
  return a + b;  
}
console.log(sum(23,23))

//retornando uma string - (parametro: tipo)
function sayHelloTo(name:string): string {
  return `Hello ${name}`
}
console.log(sayHelloTo("Davi"))

// sem retorno - void
function logger(msg:string): void {
  console.log(msg)
}
logger("Teste...")

// greet - o ? é opcional, mas precisa usar algum tratamento
function greeting(name:string, greet?: string): void  {
  if (greet) {
    console.log(`Olá ${greet} ${name}`)
    return
  }
  console.log(`Olá ${name}`)
}
greeting("José") /* sem o greet  - greet é opcional*/
greeting("Pedro", "sr") /* informando greet */

//==============================
// Interfaces
//==============================
interface MathFunctionParams{
  n1: number
  n2: number
}
function sumNumbers(nums:MathFunctionParams) {
  return nums.n1 + nums.n2
}
console.log(sumNumbers({n1: 1, n2: 2}))

function multiplyNumbers(nums:MathFunctionParams) {
  return nums.n1 * nums.n2
}
// tipando para reutilizar as variáveis
const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 4,
}
// ex
console.log(multiplyNumbers(someNumbers))

//==============================
// narrowing - checagem de tipos
//==============================
function doSomething(info:number | boolean){
  if (typeof info === "number") {
    console.log(`O número é ${info}`)
    return
  }
  console.log("Não foi passado número")
}
doSomething(5)
doSomething(true)

//==============================
// Generics - funções mais genérica
//==============================
function showArraysItems<T>(arr:T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`)
  })
}
const a1 = [1, 2, 3]
const a2 = ["a", "s", "d"]

showArraysItems(a1)
showArraysItems(a2)

//==============================
// Classe
//==============================
class User {
  name: string
  role: string
  isApproved: boolean

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name
    this.role = role
    this.isApproved = isApproved
  }
  // método
  showUserName(){
    console.log(`O nome do usuário é: ${this.name}`)
  }
  //argumento 
  showUserRole(canShow: boolean): void{
    if (canShow) {
      console.log(`Idade do usuário é: ${this.role}`)
      return
    }
    console.log("Informação restrita")
  }
}
const pessoa1 = new User("Fulano", "Admin", true)
console.log(pessoa1)

pessoa1.showUserName()
pessoa1.showUserRole(true) // mostrando role (cargo, função)

//==============================
// Interface
//==============================
interface IVehicle{
  brand: string
  showBrand(): void
}
class Car implements IVehicle {
  brand: string
  wheels: number
  constructor(brand: string, wheels: number) {
    this.brand = brand
    this.wheels = wheels
  }
  showBrand(): void {
    console.log(`A marca do carro é: ${this.brand}`)
  }
}
const fusca = new Car("VW", 4)

fusca.showBrand()

//==============================
// Herança
//==============================
class SuperCar extends Car{
  engine: number

  constructor(brand: string, wheels: number, engine: number){
    super(brand, wheels)
    this.engine = engine
  }
}
const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)
a4.showBrand() /* método classe pai */

//==============================
// Decorators 
//==============================
// validação de dados; construir um evento observável em algum ponto de uma classe / função
// descomentar o "experimentalDecorator" do tsconfig.json

// constructor decorator - inserindo 2 propriedades ao objeto Person
function BaseParameters() {
  return function <T extends { new (... args: any[]): {} }> (constructor: T){
    return class extends constructor {
      id = Math.random()
      createdAt = new Date()
    }
  }
}
@BaseParameters()
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}
const sam = new Person("Ciclano")
console.log(sam)

