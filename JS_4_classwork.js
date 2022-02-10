// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function minNumber (a,b,c){
//     if (a<b && a<c) {
//         console.log(a)
//     } else if (b<a && b<c) {
//         console.log(b)
//     } else if (c<a && c<b) {
//         console.log(c)
//     } else {
//         console.log('there are two or more equal numbers')
//     }
// }
//
// minNumber(100,80,50);
// minNumber(10,80,50);
// minNumber(100,8,50);
// minNumber(100,50,50);

// // створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function maxNumber (a,b,c){
//     if (a>b && a>c) {
//         console.log(a)
//     } else if (b>a && b>c) {
//         console.log(b)
//     } else if (c>a && c>b) {
//       console.log(c)
//     } else {
//          console.log('there are two or more equal numbers')
//     }
// }
// maxNumber(100,200,500);
// maxNumber(100,2,50);
// maxNumber(100,2000,50);
// maxNumber(100,200,100);

// - створити функцію яка повертає найбільше число з масиву

// let array = [100,10,800,100500,-18,0,1000];
// function maxOfArray (array) {
//     let max=array[0];
//     for  (const item of array)
//         if (item>max) {
//             max=item
//         }
//     return max;
// }
//  document.write (`${maxOfArray(array)}`);

// - створити функцію яка повертає найменьше число з масиву

// let array = [100,10,800,100500,-18,0,1000];
// function minOfArray (array) {
//     let min=array[0];
//     for  (const item of array)
//         if (item<min) {
//             min=item
//         }
//     return min;
// }
//  document.write (`${minOfArray(array)}`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13?

// let array = [100,10,50,5];
// function sumOfArray (array){
//     let sum=0;
//     for (const item of array) {
//         sum=item+sum;
//     }
//     return sum;
// }
//
// document.write(`${sumOfArray(array)}`);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [100, 500, 1000, 500];
// function median (array) {
//     let sum=0;
//     for (const item of array){
//         sum=item+sum;
//     }
//     let median=sum/array.length;
//     return median;
// }
//   document.write(`${median(array)}`);

//   - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

   // function minMax(argument) {
   //      let min = arguments[0];
   //      let max = arguments[0];
   //      for (const item of arguments) {
   //          if (item > max) {
   //              max = item;
   //          }
   //          if (item < min) {
   //              min = item;
   //          }
   //      }
   //      console.log(max);
   //      return min;
   //  }
   //  document.write (`${minMax(500,1,100500,100)}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function arrayRandom (length){
//     let array =[];
//     for (let i=0; i<length; i++) {
//         array.push (Math.floor(Math.random()*100))
//     }
//     return array
// }
//
// document.write(arrayRandom(10));
//


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// function arrayRandom (limit, length) {
//     let array=[];
//     for (let i=0; i<length; i++){
//         array.push(Math.floor(Math.random()*limit))
//     }
//     return array
// }
//     document.write(arrayRandom(1000,5))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array1=[1,2,3];
// function arrayReverced (array1) {
//     let array2=[];
//     for (let i=array1.length-1; i>=0; i--) {
//     array2.push(array1[i])
//     }
//     return array2
// }
//    document.write(arrayReverced(array1))



