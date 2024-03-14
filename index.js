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
function fool(firstName,name,age)  {

  const foo2 = (secondName) => {

    const foo3 = function ( age){
     
      console.log(firstName,secondName,age)
    }
    foo3(age)
  }
  foo2(secondName )
}

fool1('Vlad', 'Sobol', 32)