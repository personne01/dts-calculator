
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
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
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
        case '%':
            result = 100 / parseFloat(currentNumber) * parseFloat(prevNumber) + '%'
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


//for styling by user
let mode = 'basicmode'
const custommode = document.querySelectorAll('.mode-button')
custommode.forEach((inputmode)=>{
    inputmode.addEventListener('click', (event) =>{
        mode = event.target.id
        switch (mode) {
            case 'changeBackground':
                darkmode()
                
                break;
            case 'basicmode':
                mode='changeButtonStyle'
                break;
            case 'changeButton':
                changeButton()
                break;
            case 'changeOperator':
                console.log('ini classicmode')
                break;
            default:
                break;
        }
    })
})


const darkmode = () => {
    document.body.classList.toggle("darkbody");
    document.getElementById('#header').classList.toggle = ("headerdark");
}

const changeButton = () => {
    const changeBtn = document.querySelectorAll('.btn')
    const changeOp = document.querySelectorAll('.operator')
    const randomColor = parseInt(Math.random() * 10);
        changeBtn.forEach((newButton) => { 
            console.log(randomColor)
            switch(randomColor){
                case 1:
                    newButton.style.backgroundColor = '#864879'
                    changeOp.forEach((newOp) => {
                        newOp.style.backgroundColor = '#EBE645'
                    })
                    break;
                case 2:
                    newButton.style.backgroundColor = '#632626'
                    changeOp.forEach((newOp) => {
                        newOp.style.backgroundColor = '#9D5353'
                    })
                    break;
                case 3:
                    newButton.style.backgroundColor = '#2C3333'
                    changeOp.forEach((newOp) => {
                        newOp.style.backgroundColor = '#395B64'
                    })
                    break;
                case 4:
                    newButton.style.backgroundColor = '#D885A3'
                    changeOp.forEach((newOp) => {
                        newOp.style.backgroundColor = '#DADBBD'
                    })
                    
                    break;
                case 5:
                    newButton.style.backgroundColor = '#52b788'
                    changeOp.forEach((newOp) => {
                        newOp.style.backgroundColor = '#DADBBD'
                    })
                    
                    break;
                case 6:
                    newButton.style.backgroundColor = '#345B63'
                    changeOp.forEach((newOp) => {
                        newOp.style.backgroundColor = '#112031'
                    })
                default:
                    break;
            }
        })
}