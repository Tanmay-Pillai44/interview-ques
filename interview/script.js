const user1 = {
    name: "Tanmay",
    age: 22,
    message: function () {
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }
}

function example() {
    console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
}

const user2 = {
    name: "JOhn",
    age: 26
}

user1.message.call(user2);


