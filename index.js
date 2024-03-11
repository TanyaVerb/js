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


  // let userName = prompt('ваше имя')
  
  // let balance = prompt(`Ваш баланс составляет ${balance} и вы можете совершить покупку`)


  // let balance = prompt(`Ваш баланс составляет? `)

  // Number (balance) >= 10000?
  // console.log (`Ваш баланс составляет ${balance} и вы можете совершить покупку`):
  // console.log(`Нужно еще поработать`)

  // let balance = prompt(`Ваш баланс составляет? `)
 
  //   if (typeof +balance === 'number'&& +balance >= 10000) {
  //   console.log (`Ваш баланс составляет ${balance} и вы можете совершить покупку`)
  // } else if (typeof +balance === 'number'&& +balance <= 10000) {
  //   console.log(`Нужно еще поработать`)
  // } else {
  //   console.log(`Вы ввели не числовое значение попробуй еще раз`)
  // }



  let num1 = prompt (`Введите первое число для сравнения`)
  let num2 = prompt (`Введите второе число для сравнения`)

  // console.log ( `num1 больше num2 `)
  // console.log ( `num2 больше num1 `)
  // console.log ( `числа равны `)
  // console.log ( `Нужно ввести цыфры. Вы ввели num1 = ${num1},  num2 =  `)


  if ((!isNaN(Number(num1)) && num1 !== null && num1 !== '') && (!isNaN(Number(num2))&& num2 !== null && num2 !== '' )){
 if (num1>num2){
  console.log ( `num1 больше num2 `)
 } else if (num1<num2){
  console.log ( `num2 больше num1 `)
 }else {
  console.log ( `числа равны `)
 }
  } else {
    console.log ( `Нужно ввести цыфры. Вы ввели num1 => ${num1},  num2 => ${num2} `)
  }