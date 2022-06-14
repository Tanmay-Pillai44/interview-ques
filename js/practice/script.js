// function hOFunc (fun) {
//     fun('Hello World')
// }

// function cb (msg) {
//     console.log(msg)
// }

// hOFunc(cb) // cb is callback function

// arthimetic operators (+, -, /, *, %, **, ++, --)
// comparison operators (==, ===, !=, >=, <=, >, <)
// logical operators (&& (AND), || (OR), !(NOT))
// ternary operator => conditon ? ifTure : ifFalse
// Assignment operator (=)

// function myFun(a, b ...args) {
//     console.log("a", a)
//     console.log("args", args)
// }
// myFun("one", "two", "three")


// let a = 4;
// function myFunction() {
//   return a * a;
// }
// debugger;
// myFunction()




// const addCurry =(a) => {
//     return (b)=>{
//         return (c)=>{
//             return a+b+c
//         }
//     }
// }
// console.log(addCurry(2))


// let str = "Hello World";

// function delChar (myStr, ch) {

//     return myStr.split("").filter((i) => i !== ch).join("");
// }

// delChar(str, 'l');


// let john = { name: "John" };
// let map = new Map();
// map.set(john, "...");
// john = null

// console.log(map)


// call, apply, bind are function in js, their purpose they serve is take in object and sets the this keyword in a function to the specified object.
// We use them when we want to call the method in one obj but we want that method to call from another obj so we need them.
// bind() => it returns a new function
// call() and apply() => it set this keyword and immediately executes the function doesnt return anything.
// difference between call() and apply() is call accepts comma seperated arguments and apply accepts array of arguments

// let obj1 = {
//     name: "Tanmay",
//     message: function () {
//         console.log(`hi my name is ${this.name}`)
//     }
// }

// let obj2 = {
//     name: "John"
// }

// obj1.message()

// obj1.message.call(obj2)
// obj1.message.apply(obj2)

// obj1.message.bind(obj2)()


// let myPromise = new Promise((resolve, reject) => {
//     const x = 5;
//     const y = 5;
//     if (x === y ) {
//         resolve("Both are equal")
//     } else {
//         reject("Not equal")
//     }
// })


// async aand await makes promises easier to write. async makes the function return a promise and await makes a function wait
// for a promise.

// function add (a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(a + b), 2000)
//     })
// }

// async function newAdd(a, b) {
//     const newValue = await add(a, b);
//     return newValue;
// } as newAdd does not know how to handle promise the async and await can be used


// ES5 --> 	ECMA script is a scripting language defined by Ecma international. The fifth edition of the  same is known as ES5.
//             It was introduced in 2009.
//             It supports primitive data types that are string, number, boolean, null, and undefined.
//             There are only one way to define the variables by using the var keyword.
//             In ES5, both function and return keywords are used to define a function.

//     ES6 --> ECMA script is a scripting language defined by Ecma international. The sixth edition of the same is known as ES6
//             It was introduced in 2015.
//             In ES6, there are some additions to JavaScript data types. It introduced a new primitive data type ‘symbol’ for supporting unique values.
//             There are two new ways to define variables that are let and const.
//             An arrow function is a new feature introduced in ES6 by which we don’t require the function keyword to define the function.

// variable, arrow, import and export introduced, spread operator, Generator function, map and set, weakmap and weakset

// It is an asynchronous function, it will not pause execution of other functions in call stack. It is part of W


function printLetter(letter, cb) {
    setTimeout(() => {
        console.log(letter);
        cb();
    }, 1000)
}

function print() {
    printLetter("A", () => {
        printLetter("B", () => {
            printLetter("C", () => {
                console.log("Done")
            })
        })
    })
}