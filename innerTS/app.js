"use strict";
// -------- Типы дынных ---------
var str = "it works"; // строковый тип данных
str = "it works too";
// str = 123 ошибка, попытка записи числа в строковый тип
var num = 123; // числовой тип данных
num = 456;
// num = "goes't work";
var bool = true; // логический тип данных (два значения true или false)
bool = false;
//bool = 134; ошибка
//bool = "string";  ошибка
console.log(str, num, bool);
// ---------- Операции над данными -----------
console.log("----------------Операции над данными----------------");
var test1 = 123;
var test2 = "abc";
console.log(test1 + test2); // "123abc"
//var test3: number = test3 = test1 + test2;  ошибка - пытаемся записать строку в числовой тип
// ---------- Массивы в TypeScript ----------
console.log("----------------Массивы в TypeScript----------------");
var arr1 = ["a", "b", "c", "d", "e"]; // первый способ
var arr2 = [1, 2, 3, 4, 5]; // второй способ
console.log(arr1[0], arr2[0]);
// ---------- Объекты в TypeScript ----------
console.log("-----------------Объекты в TypeScript----------------");
var user = { name: "john", age: 30 };
// TypeScript в момент объявления, запоминает, а затем контролирует,
// тип переменной, структуру объекта и типы значений в объекте
// user = "string"; - error
// user = { name: "eric", age: 40, salary: 300 }; - error
// user = { name: "eric" }; - error
// user.name = 123; - error
// user.age = "aaa"; - error
user = { name: "eric", age: 40 };
console.log(user);
user.name = "john";
user.age = 30;
console.log(user);
// ------------ Циклы в TypeScript --------------
console.log("---------------Циклы в TypeScript--------------");
// в цикле for необходимо указывать тип для счетчика
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
// в циклах for-of и for-in тип указывать не нужно
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var elem = arr_1[_i];
    console.log(elem);
}
var obj = { a: 1, b: 2, c: 3 };
for (var key in obj) {
    console.log(key);
}
// ------------ Функции в TypeScript --------------
console.log("----------------Функции в TypeScript-------------");
function func(a, b) {
    return a + b;
}
console.log(func(111, "333"));
function voidFn(test) {
    test = true;
    console.log(test);
}
voidFn(false);
// ------------ Кортежи в TypeScript --------------
console.log("----------------Кортежи в TypeScript-------------");
var tuple = ["john", 33];
console.log(tuple[0]);
console.log(tuple[1]);
