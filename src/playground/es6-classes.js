class Person {
    constructor(name='Anonymous', age=25) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hello, my name is ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(age, name)
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription()
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting()
        return !!this.homeLocation ? greeting += ` I'm visiting from ${this.homeLocation}.` : greeting += ` No Location Found`
        
    }
}

let newStudent = new Traveler('Alan Ordorica', 28, 'Oakland')
console.log(newStudent.getGreeting())

let traveler = new Traveler()
console.log(traveler.getGreeting())