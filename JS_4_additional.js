// // - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// // якщо два аргументи - складає або конкатенує їх між собою.
// function foo(arg1,arg2,arg3){
//     if (arguments.length ===1){
//         console.log(arg1)
//     } else if (arguments.length===3 && arg3==='sum'){
//         console.log(arguments[0] + arguments[1])
//     } else {
//        console.log('arguments are'+' '+arg1+' '+arg2)
//     }
// }
// foo(5);
// foo(10,20, 'sum');
// foo(10,20);

// - створити функцію  яка приймає два масиви та скаладає
// значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let sumArray=[];
// function summaryArray (arr1, arr2) {
//     for (let i=0; i < arr1.length; i++) {
//         let itemSummary = arr1[i] + arr2[i];
//         sumArray.push(itemSummary)
//     }
// }
// summaryArray([1,2,3,4], [2,3,4,5]);
// console.log(sumArray);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//
// let keys=[];
// function keysOfObjects (arrayOfObjects){
//     for (let i=0; i<arrayOfObjects.length; i++) {
//         for (let key in arrayOfObjects[i]) {
//             keys.push(key);
//         }
//     }
//  }
// keysOfObjects([{name: 'Dima', age: 31}, {model: 'Camry'}]);
// console.log(keys);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//
// let emptyArray=[];
//  function valuesOfObj (objArr){
//      for (let i=0; i<objArr.length; i++) {
//          emptyArray.push(Object.values(objArr[i]));
//      }
//  }
//  valuesOfObj( [{name: 'Dima', age: 31}, {model: 'Camry'}])
//  console.log(emptyArray.flat(Infinity));
