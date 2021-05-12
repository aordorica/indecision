const multiply = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }
}

const newNums = multiply.multiply()

console.log(newNums)