"use strict";
// -------- Типы дынных ---------

var str: string = "it works"; // строковый тип данных

str = "it works too";
// str = 123 ошибка, попытка записи числа в строковый тип

var num: number = 123; // числовой тип данных
num = 456;
// num = "goes't work";

var bool: boolean = true; // логический тип данных (два значения true или false)
bool = false;
//bool = 134; ошибка
//bool = "string";  ошибка

console.log(str, num, bool);

// ---------- Операции над данными -----------
console.log("----------------Операции над данными----------------");

var test1: number = 123;
var test2: string = "abc";
console.log(test1 + test2); // "123abc"

//var test3: number = test3 = test1 + test2;  ошибка - пытаемся записать строку в числовой тип

// ---------- Массивы в TypeScript ----------
console.log("----------------Массивы в TypeScript----------------");

var arr1: string[] = ["a", "b", "c", "d", "e"]; // первый способ
var arr2: Array<number> = [1, 2, 3, 4, 5]; // второй способ

console.log(arr1[0], arr2[0]);

// ---------- Объекты в TypeScript ----------
console.log("-----------------Объекты в TypeScript----------------");

let user = { name: "john", age: 30 };

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

for (let i: number = 0; i <= 10; i++) {
  console.log(i);
}

// в циклах for-of и for-in тип указывать не нужно

var arr: number[] = [1, 2, 3, 4, 5];
for (let elem of arr) {
  console.log(elem);
}

var obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key);
}

// ------------ Функции в TypeScript --------------
console.log("----------------Функции в TypeScript-------------");

function func(a: number, b: string): string {
  return a + b;
}
console.log(func(111, "333"));

function voidFn(test: boolean): void {
  test = true;
  console.log(test);
}
voidFn(false);

// ------------ Кортежи в TypeScript --------------
console.log("----------------Кортежи в TypeScript-------------");

let tuple: [string, number] = ["john", 33];
console.log(tuple[0]);
console.log(tuple[1]);

// --------- кортежи для чтения ---------
let readOnly: readonly [string, number] = ["john", 30];
// readOnly[0] = "eric"; // ошибка

// ------Необязательные элементы кортежей------
console.log("--------Необязательные элементы кортежей-------");

let user2: [string, number, boolean?];
user2 = ["john", 30, true];
console.log(user2);
user2 = ["eric", 32];
console.log(user2);

// ------Деструктуризация кортежей------
console.log("------------Деструктуризация кортежей-----------");

let time: [number, number, number] = [12, 59, 59];
let [hour, min, sec] = time;

console.log(time);
console.log(hour);
console.log(min);
console.log(sec);

// ------оператор rest в кортеже------
console.log("------------оператор rest в кортеже-----------");

let tpl: [string, ...number[]];
tpl = ["str", 1, 2, 3];
console.log(tpl);
tpl = ["string", 1, 2, 3, 4, 5];
console.log(tpl);

//--------перечисления в TypeScript----------
console.log("===========перечисления в TypeScript===========");

enum Season {
  Winter,
  Spring,
  Summer,
  Autumn,
}
let curValue: string = Season[0];
console.log(curValue);

let curIndex: number = Season.Winter;
console.log(curIndex);

//--------перечисление как тип----------
console.log("------------перечисление как тип-----------");

let current: Season = Season.Winter; // переменная типа Season со значением 0
console.log(current);

// let current: Season = 3 // указываем номер сезона вручную
// let current: Season = 'str'; // ошибка, попытка записать данные другого типа

// let current: Season = 7; // диапозон значений не отслеживается,
//                            можно записать отсутствующий номер
//                           ошибки не будет

console.log(typeof current); // отдаст числовой тип

//--------указание ключей в перечислениях----------
console.log("------------указание ключей в перечислениях-----------");

enum Week {
  Monday = 1, //   Monday = 1,   // достаточно указать первый
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}
console.log(Week[3], Week.Wednesday);

// ключами могут быть и строки
enum Months {
  January = "Январь",
  February = "Февраль",
  March = "Март",
  April = "Апрель",
  May = "Май",
  June = "Июнь",
  July = "Июль",
  August = "Август",
  September = "Сентябрь",
  October = "Октябрь",
  November = "Ноябрь",
  December = "Декабрь",
}
console.log(Months["February"], Months.February);
