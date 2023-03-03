"use strict";
console.log("---------- Сложные объекты в TypeScript ---------");
var myEvent = {
    name: "my new event",
    time: {
        start: "2030-11-01",
        finish: "2030-12-31"
    }
};
console.log("---------- объект myEvent через интерфейс MyEvent ---------");
console.log(myEvent.name, " - time ->", myEvent.time.start, " - ", myEvent.time.finish);
var employee = {
    name: "ivan",
    position: {
        name: "programmer",
        salary: 1000
    },
    addr: {
        country: "Russia",
        city: "Stalingrad"
    }
};
console.log("---------- объект employee через интерфейс Employee ---------");
console.log(employee.name, " - ", employee.position.name, " - ", employee.position.salary, " - ", employee.addr.city, " - ", employee.addr.country);
