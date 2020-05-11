let firstName = 'Haley';

const numberOfStates = 50;

let result = 5 + 4;
console.log(result);

function sayHello() {
    alert("Hello World!")
}

sayHello();

function checkAge(name, age) {
    if (age <= 21) {
        alert("Oh no," + name + ", you aren't old enough to view this page!");
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// for (let i = 0; i <= 4; i++) {
//     checkAge([i]);
// }

let favoriteVeg = ['lettuce', 'tomato', 'squash']

for (let i = 0; i < favoriteVeg.length; i++) {
    console.log(favoriteVeg[i]);
}

let ageGate = [
    { name: "Haley A", age: 29 },
    { name: "Haley B", age: 22 },
    { name: "Haley C", age: 40 },
    { name: "Haley D", age: 18 },
    { name: "Haley K", age: 31 },
]

for (let i = 0; i < ageGate.length; i++) {
    checkAge(ageGate[i].name, ageGate[i].age);
}

function getLength(string) {
    return getLength.length;
}

lengthofString = getLength('Hello World');

if (lengthofString % 2 === 0)
    console.log("The world is nice and even!");
else
    console.log("The world is an odd place!");