"use strict";

console.log("---------- Интерфейсы в TypeScript ---------");

interface User {
  name: string;
  age?: number;
}
console.log("---------- User ---------");
let user: User = { name: "john" };
console.log(user.name, " - ", user.age);
user.age = 30;
console.log(user.name, " - ", user.age);

console.log("---------- Employee ---------");
interface Employee {
  name: string;
  surn: string;
  age?: number;
  salary?: number;
}

let employee: Employee = { name: "john", surn: "smit" };
console.log(
  employee.name,
  " - ",
  employee.surn,
  " - ",
  employee.age,
  " - ",
  employee.salary
);
employee.age = 30;
console.log(
  employee.name,
  " - ",
  employee.surn,
  " - ",
  employee.age,
  " - ",
  employee.salary
);
employee.salary = 400;
console.log(
  employee.name,
  " - ",
  employee.surn,
  " - ",
  employee.age,
  " - ",
  employee.salary
);
