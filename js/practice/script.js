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




