const add = (a,b)=> (a+ b,console.log(a+b))

const multiply =(a,b) => (a*b,console.log(a*b))

const divide =(a,b) => (a/b,console.log(a/b))

const subtract = (a,b)=> (a-b,console.log(a-b))


const operate = (a,b,operator) =>
{
           switch(operator){
            case '+':
                add(a,b)
            break;
            case  '-':  
                subtract(a,b)
            break;
            case 'X':
                multiply(a,b)
            break;
            case "/":
                divide(a,b)
            break;  
            default:
                console.log('that is not a valid operator')  
            }


}

operate(2,2,'+')
//operate('3','4',"X")


const container = document.querySelector('#root')

let divForCalc = document.createElement('div')
divForCalc.className ='calc'

container.appendChild(divForCalc)

let calc = document.querySelector('.calc')
//console.log(calc)

let displayPanel = document.createElement('div')
displayPanel.className = 'disp'
//displayPanel.textContent = '920191'

calc.appendChild(displayPanel)


let divForButtons =document.createElement('div')
divForButtons.className ='buttons'
calc.appendChild(divForButtons)

let display = document.querySelector('.disp')
function createIntButtons(){
    //let display = document.querySelector('.disp')

    let buttonDiv= document.querySelector('.buttons')
    for (let n=9; n>=0; n--){
        let button = document.createElement('button')
        button.id = `number${n}`
        button.textContent= `${n}`
        button.onclick =()=> {
            let text = display.textContent +=`${button.textContent}`
            //console.log('hello')
            //console.log(button.textContent)
            return text
        
        }
        buttonDiv.appendChild(button)
    }
}
createIntButtons()
 
function createFuncButtons() {

    let buttonDiv = document.querySelector('.buttons')
    buttons =['+','-','X','/','=','Del']
    //console.log(buttons.length)
    //let display = document.querySelector('.disp')

    for (let n=0; n < buttons.length;n++){
        let button = document.createElement('button')
        button.id = `${buttons[n]}`
        button.textContent= `${buttons[n]}`
        button.onclick =()=> {

            if (button.textContent == '='){
             displayTextContent()
            }
            
            else {let text = display.textContent += `${button.textContent}`}
            //console.log('hello')
            //console.log(button.textContent)
            
        
        }
        buttonDiv.appendChild(button)
    }
}
createFuncButtons()


function displayTextContent() {
    let displayValue = display.textContent.split('')
    console.log(displayValue)

    for (let i=0; i<= displayValue.length;i++){

        if (displayValue[i] == '+'){

            operate(Number(displayValue[i-1]),Number(displayValue[i+1]),displayValue[i])


        }


    }




    //operate(displayValue)
    
}


