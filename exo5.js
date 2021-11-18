let firstNumber = 5
let secondNumber = 2

while (firstNumber * secondNumber <= 250) {
    let p = document.createElement("p")
    p.innerText = firstNumber * secondNumber
    document.body.append(p)
    secondNumber *= firstNumber
}
