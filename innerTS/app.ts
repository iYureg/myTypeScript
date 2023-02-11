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

var test3: number;

// test3 = test1 + test2;  ошибка - пытаемся записать строку в числовой тип

// ---------- Массивы в TypeScript ----------
console.log("----------------Массивы в TypeScript----------------");

var arr1: string[] = ["a", "b", "c", "d", "e"]; // первый способ
var arr2: Array<number> = [1, 2, 3, 4, 5]; // второй способ

console.log(arr1[0], arr2[0]);
