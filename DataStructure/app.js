"use strict";
console.log("---------- Массивы в объектах в TypeScript ---------");
var prod1;
prod1 = { name: "notebook", colors: ["red", "black", "grey"] };
console.log("prod1 -> ", prod1.name, " - ", prod1.colors);
console.log("---------- Через интерфейс ---------");
var prod2 = { name: "notebook", colors: ["red", "black", "yellow"] };
console.log("prod2 -> ", prod2.name, " - ", prod2.colors);
