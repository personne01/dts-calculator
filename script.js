
// mendefinisikan penampil dan element yang diambil
const calculatorScreen = document.querySelector('.calculator-screen')
const numbers = document.querySelectorAll(".number")

//menambahkan event click ke setiap element dan menjalankan function updateScreen

const updateScreen = (number) => {
    calculatorScreen.value = number // mengisi nilai penampilnya dengan variabel number
}

numbers.forEach((number)=>{ // mengambil setiap nilai numbernya 
    number.addEventListener('click', (event) => { //menambahkan event click
        updateScreen(event.target.value) //menambahkan nilai dari target event
    })
})


//mendefinisikan PrevNumber, currentNumber, calculationOperator
let prevNumber=''
let currentNumber='0'
let calculationOperator=''

const inputNumber = ((number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }
    else{
        currentNumber += number
    }
})

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// ini adalah bagian operator aritmatikanya

const inputOperator = ((operator)=>{
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
})

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', (event) => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += '.'
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})