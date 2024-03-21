// let userOld = prompt('Введите Ваш возраст');

// if(userOld>=18){
//     confirm('Ваш возраст подтвержден')
// }else{
//     confirm('Ваш возраст не подтвержден')
// }

// userOld>=18 ? confirm('Ваш возраст подтвержден'):confirm('Ваш возраст не подтвержден')

// userOld>=18 && userOld <40
//  ? confirm('Ваш возраст подтвержден')
//  :userOld >=40?
//   confirm('Ваш возраст 40!') :
//   confirm(`Вы ввели ${userOld}`)

// userOld >=0 && userOld <18
// ? confirm('Ваш возраст подтвержден')
//  :userOld >=30 && userOld ==39
//   ? confirm('Ваш возраст 30-39')
//   :userOld >40?
//   confirm('Ваш возраст 40')
//   :userOld ==NaN ?
//   confirm(`Вы ввели ${userOld} !`) :
//   console.log(1)

//   userOld <=18 ? confirm('Ваш возраст подтвержден'):
//   userOld >= 30 && userOld <= 39?
//   confirm('Ваш возраст 30-39') :
//   userOld >40?
//   confirm('Ваш возраст больше 40!'):
//   confirm(`Вы ввели ${userOld} !`)

//   if (userOld <=18 && !!userOld){
//     confirm('Ваш возраст 0-18')
//   } else if (userOld >= 30 && userOld <= 39)
//     confirm('Ваш возраст 30-39')
//   }else if (userOld >40){
//     confirm('Ваш возраст больше 40!')
//   } else {
//     confirm(`Вы ввели ${userOld} !`)
//   }
// 'use strict'

//   let userName = prompt('ваше имя')
//   userName ||=  'Вы не ввели имя'  // если вернется пустая строка

//   confirm( `Привет ${userName}`)

//  userName &&= `Привет ${userName}`

// let balance = prompt(`Ваш баланс составляет? `)

// Number (balance) >= 10000?
// console.log (`Ваш баланс составляет ${balance} и вы можете совершить покупку`):
// console.log(`Нужно еще поработать`)

// =================Задача 1=======================================

// let balance = prompt(`Ваш баланс составляет? `)

//   if (typeof +balance === 'number'&& +balance >= 10000) {
//   console.log (`Ваш баланс составляет ${balance} и вы можете совершить покупку`)
// } else if (typeof +balance === 'number'&& +balance <= 10000) {
//   console.log(`Нужно еще поработать`)
// } else {
//   console.log(`Вы ввели не числовое значение попробуй еще раз`)
// }

// ===========Задача 4====================================

//   let num1 = prompt (`Введите первое число для сравнения`)
//   let num2 = prompt (`Введите второе число для сравнения`)

//   if ((!isNaN(Number(num1)) && num1 !== null && num1 !== '') && (!isNaN(Number(num2))&& num2 !== null && num2 !== '' )){
//  if (num1>num2){
//   console.log ( `num1 больше num2 `)
//  } else if (num1<num2){
//   console.log ( `num2 больше num1 `)
//  }else {
//   console.log ( `числа равны `)
//  }
//   } else {
//     console.log ( `Нужно ввести цыфры. Вы ввели num1 => ${num1},  num2 => ${num2} `)
//   }

// let i = 60
// console.log (i, )

// if (2>5){

// }else {

// }

// for(let i =60; i >=0; i--) {

//   if (i === 30){
//     console.log(`Ты на пол пути к 0`)
//   } else [
//     console.log(i)
//   ]

// }

// let i = 60
// while (i >=0) {
//   if (i === 30){
//     i--
//     console.log(`Ты на пол пути к 0`)
//   } else {
//     console.log(i)
//   }
//   i--
// }

// let balance

//   do {
//     balance = prompt(`Твой баланс`)
// console.log (`Ура`)
//   }while ( balance)

// let theme =  prompt(`Выбери тему`) // white // black //

// switch (theme) {
//   case 'white':{
//     console.log ('пользователь пожелал белую')
//     break
//   };
//    case 'black':{
//     console.log ('пользователь пожелал черную')
//     break // выйти
//   };

//   default:
//   {
//     console.log ('пользователь ничего не выбрал')
//   }

// }

// function logUserInfo(secondName , firstName, userAge, city ){ //локальная переменная
//   console.log(secondName,firstName,userAge, city);
// }
// console.log(secondName)

// //вызвать функцию
// logUserInfo('Sobol', 'Vlad', 31, 'Vitebsk')

//====================================================

//написать функцию сложения, котороя принимает два пареметра

// function calcsum(firstnum , secondnum){ //локальная переменная
//   // console.log(firstnum,secondnum);
//   let sum = firstnum + secondnum

//   console.log(sum)}

// //вызвать функцию
// calcsum(2, 3)

//====================================================

// функцию, которая принимает два аргумента (числовых значения) и выполняет с ними операцию, которую укажет user в качестве 3-го аргумента

// function logResult (onearg, twoarg, userInfo){
//   let userInfo = onearg ( `Введите 1й аргумент`);
//   let userInfo = twoarg ( `Введите 2й аргумент`);
//   let userInfo = prompt ( `Введите 3й аргумент`);
//   let result = onearg + userInfo + twoarg;
//   switch (true) {
//     case  userInfo = '+':
//      console.log (result);
//   }

//   console.log ()
// }

// function controller (num1, num2, operator ) {
// switch(operator){
//   case '+':
//     console.log(num1 + num2 )
//     break
//   case '-':
//     console.log(num1 - num2 )
//     break
//   case '/':
//     console.log(num1 / num2 )
//     break
//   case '*':
//     console.log(num1 * num2 )
//     break
//     default:

//     console.log('Введите (+, -, /, *)' )

// }
// }
// controller(8, 4, '*')

//============================================

// for (let index = 1; index < 10; index ++){
//   if (index=== 5){
//     return null
//   }
// }

// Стрелочная функция

// const arrayFoo = () => {
//   console.log (2);

// }
// arrayFoo ()

// let d = ''

//===============================
// function fool(firstName,name,age)  {

//   const foo2 = (secondName) => {

//     const foo3 = function ( age){

//       console.log(firstName,secondName,age)
//     }
//     foo3(age)
//   }
//   foo2(secondName )
// }

// fool1('Vlad', 'Sobol', 32)
// ================================================================Объекты=============================================================================

// let isShowPassword = false

let email = "321321";
const correctEmail = " user@mail.ru";
const incorrectEmail = email;
let errorMessage = null;

// const validateEmail = function () {
//   console.log("Первая функция foo");
// };
// validateEmail();
// _______________________________________________
// const validateEmail2 = function foo(a) {
//   console.log("Вторая функция foo");
//   let c = a;
//   c++;
//   if (c === 10) return;

//   foo(1);
// };

// validateEmail2();
// _______________________________________________

// const validateEmail3 = () =>
//   correctEmail === email ? "Входи" : "Попробуй еще";
// console.log(validateEmail3());
// ----------------------------------
// const validateEmail3 = () => {
//   console.log("Стрелочная функция");
// };
// validateEmail3();
// ____________________________________________

// function validateEmail4() {
//   console.log("Четвертая функция");
// }
// validateEmail4();
// _____________________________________________________________

// const validateEmail = (userEmail) => {
//   let =
//     correctEmail === userEmail ? null : `Обязательно напишите ${correctEmail}`;
//   // !!! null; Обязательно напишите user@mail.ru
//   console.log(errorMessage);
// };
// validateEmail();
// __________________________________
// switch (
//   error //null
// ) {
//   case `Обязательно напишите ${correctEmail}`:
//     alert(error);
//     break;
//   default:
//     confirm("Вы успешно ввошли. Продолжить");
// }

// if (!!error) {
//   alert(error);
// } else {
//   confirm("Вы успешно ввошли. Продолжить");
// }

// !!error ? alert(error) : confirm("Вы успешно ввошли. Продолжить"); //3й вариант

// }
// validateEmail(email)
// validateEmail(correctEmail);

// ================================================
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// let d = 'global' //строка
// const fool = (firstName,name,age) => {

//     const foo2 = (secondName) => {

//       const foo3 = function ( age){
//         let c = ('foo3')
//         console.log(firstName,secondName,age)
//       }
//       foo3(age)
//     }
//     foo2(secondName )
//   }

//   fool1('Vlad', 'Sobol', 32)

//  Объекты====================
<<<<<<< HEAD
// kk
=======
// let str = "Stroka";
// let str2 = ``;
// let str3 = String("");

// let name = " Tanya";

// let user1 = {
//   name: "Tanya",
//   age: 35,
//   hasJob: true,
//   salary: 100,
//   isMarried: true,
//   emptyValye: null,
//   emptyValye2: undefined,
//   sayHello: function () {
//     //функция - это метод
//     console.log("  Привет, я ", user1.name);
//     //  return  2
//   },
//   pet: {
//     cat: {
//       petName: "Tosya",
//       age: 3,
//     },
//     dog: {
//       petName: "Rex",
//       age: 20,
//     },
//   },
// };

// console.log(user1.pet.cat.petName);
// console.log(user1.pet.dog.petName);
// console.log(user1.pet.dog.petName);
// delete user1.emptyValye;
// delete user1.emptyValye2;
// console.log(user1);

// console.log(user1.age); // рекомендуется смотреть через точку
// console.log(user1); // при раскрытии новое значение
// user1.age = 25;
// console.log(user1.age);
// console.log(user1);
>>>>>>> 58d8e1cb5dda582cff283f0022045b8c10490178

// let user2 = {
// name: 'Dima',
// age:35,
// hasJob: true,
// salary:100,
// isMarried: true,
// emptyValye: null,
// emptyValye2: undefined,
// sayHello: function (){ //функция - это метод
//  console.log(" Привет, я ", user2.name);
//  console.log(" Привет, мне ", user2.age);
// }
// }
// let user3 = {
// name: 'Sveta',
// age:35,
// hasJob: true,
// salary:100,
// isMarried: true,
// emptyValye: null,
// emptyValye2: undefined,
// sayHello: function (){ //функция - это метод
//  console.log(" Привет, я ", user3.name);
//  console.log(" Привет, мне ", user3.age);
// }
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.sayHello());
<<<<<<< HEAD

// let user = {
//   result: function (name, age, job){
//     user [name] = prompt ("Введите имя");
//     user [age] = prompt ("Введите имя");
//     user [job] = prompt ("Введите имя");
//     console.log (user.name);

//   }
// }
// user.result ()
// // ______________

// const someObject = someFoo()

// function someFoo () {
//   user [name] = prompt ("Введите имя");
// }

// ____________________________________
// const userName = prompt ("Введите имя");
// const userAge = prompt ("Введите имя");
// const userJob = prompt ("Введите имя");

// function createUserObj(){
//   let user = {};
//   user.name = userName;
//   user.age = userAge;
//   user.job = userJob;
//   return user;
// }
// const user = createUserObj();
// console.log(user);

// _____________________________________

// const Foo = () => {
// return 2
// }
// const Foo2 = (param) => typeof param ==='number'?
// 'вы ввели число':'вы ввели не число'                 //однострочная функция

// let user = ({})// выражение
// function f(){
//   return 2
// }

// const fooE = function(){

// }

// let a = Foo2 ();
// console.log("a",a)

// Написать функцию, которая при вызове будет возвращать объект user с заполненными пользователем через prompt при этом, вызов функции допускается 1 раз

// _______________________________________________________________
// создайте переменную и присвойте ей значение которое будет ровняться результатом выполнения сложения 3 функций, принимающих по одному параметру и возвращающие его умноженного на самого себя


// const foo1 = (a)=>  a * a


// const sum = foo1(2) + foo1(3) + foo1(4)


// console.log (sum);

// ____________________________________

// const sum =  foo1(2) + foo1(3) + foo1(4)
// function foo1 (a){
//   return a*a
// }
// function foo2 (b){
// return b*b
// }
// function foo3 (c){
// return c*c
// }

// console.log (sum);
//______________________________


// const foo1 = (a)=> a*a
// const sum =  foo1(2) + foo1(3) + foo1(4);
// console.log (sum);

// console.log(typeof null)

// -------------------------------------

// function  foo1(){
// // console.log (FOO!!!)
// }
// const user1 = { 
//   name: 'Vlad',
//   newObj:
//   {wife:true},
//   method1: function(){
// console.log ('method1', user1);
//   },
//   method2(){
//     console.log ('method2', user1);
//   },
//   method3: () =>{
//     console.log ('method3', user1);
//   },
//   arr:[2, '2,', null, undefined, false , NaN,Infinity,  foo1]
// }
// // console.log(user1.newObj.wife);

// let simpleVar = [2, '2,', null, undefined, false , NaN,Infinity,  foo1]
// let key = prompt('К какому полю ты хочешь обратится в объекте user1')

// console.log(user1[key])// user1.name => user1['name']
// console.log (simpleVar[0])

// let 

// console.log(simpleVar[5]());
// console.log(user1.arr);

// const user2 = { 
//   name: 'Vlad',
//   newObj:
//   {wife:true},
//   method1: function(){
// console.log ('method1', user1);
//   },
//   method2(){
//     console.log ('method2', user1);
//   },
//   method3: () =>{
//     console.log ('method3', user1);
//   },
//   arr:[2, '2,', null, undefined, false , NaN,Infinity, user1, user2, foo1]
// }

// let simpleVar2 = [2, '2,', null, undefined, false , NaN,Infinity,  foo1]
//   console.log(arr);


  // console.log ({} === {});// не равны друг другу
  // console.log ([] === []);// не равны друг другу
  // str
  // num (NaN/Infinity)
  // null
  // undefined
  // Object ({}/function/Arra)
  //Bool (true/false)


  // У нас имеется объект, это объект имеет три ключа:
  // 1 ключ = 10
  // 2 ключ = 100
  // 3 ключ = 1000

  // необходимо данный объект передать в качестве параметра в функцию checkMoney . которая внутри себя должна проверить введенное значение (числовое) через promt 
  // и при вводе меньше 10 руб - выводить сообщение, что "Ничего не купишь"
  // и при вводе больше 10 руб, но меньше 100 - выводить сообщение, что "Деньги есть - можно поесть"
  // и при вводе больше 100 руб, но меньше 1000 - выводить сообщение, что "Пятница"
// при вводе больше 1000 - " Ого ты богач"
// Вводимое значение нужно сравнивать с полями объекта, кот в функцию передается

const pocket = {
  k: 10 ,
  k2: 100,
  k3: 1000

    
}


const pocket2 = {
  k: 5,
  k2: 7,
  k3: 10

    
}
function checkMoney (obj){
  const value = prompt('Inter value')
  if (+value < obj.k ) {
    console.log('Ничего не купишь');
  } else if (true) {

  }
}2
22
checkMoney(pocket2)
=======
>>>>>>> 58d8e1cb5dda582cff283f0022045b8c10490178
