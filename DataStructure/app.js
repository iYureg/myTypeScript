"use strict";
console.log("---------- Структура объекта в TypeScript ---------");
var user1; // объявление переменной с типами данных для полей name и age
user1 = { name: "john", age: 30 }; // записываем в переменную соответствующий объект
// user.name = 134; // ошибка
console.log("user1 -> ", user1.name, " - ", user1.age);
console.log("--------------------------------------");
var user2 = { name: "eric", age: 33 }; // можно в одну строку
// user.age = "123"; // ошибка
console.log("user2 -> ", user2.name, " - ", user2.age);
// ====== Необязательные свойства ======
console.log("---------- Необязательные свойства ---------");
var user3 = { name: "karl" }; // объявление с необязательным свойством age
console.log("user3 -> ", user3.name, " - ", user3.age);
user3.age = 55; // можем присвоить занчение необязательному свойству
//user3.age = "55";  // ошибка
console.log("user3 -> ", user3.name, " - ", user3.age);
