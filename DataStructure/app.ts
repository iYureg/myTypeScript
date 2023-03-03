"use strict";

console.log("---------- Массивы в объектах в TypeScript ---------");

let prod1: { name: string; colors: string[] };
prod1 = { name: "notebook", colors: ["red", "black", "grey"] };
console.log("prod1 -> ", prod1.name, " - ", prod1.colors);

console.log("---------- Через интерфейс ---------");
interface Product {
  name: string;
  colors: string[];
}
let prod2: Product = { name: "notebook", colors: ["red", "black", "yellow"] };
console.log("prod2 -> ", prod2.name, " - ", prod2.colors);
