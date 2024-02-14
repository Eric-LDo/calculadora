let a = window.document
let numeros = []
let tela1 = a.querySelector('#tela1')
let tela2 =  a.querySelector('#tela2')
let cleaner = a.querySelector('#cleaner') 
let mais = a.getElementsByClassName('operadores')[0]
let menos = a.getElementsByClassName('operadores')[1]
let mult = a.getElementsByClassName('operadores')[2]
let divi = a.getElementsByClassName('operadores')[3]
let op = a.querySelector('#op')
let n1 = 0
let n2 = 0
let operador
let res
let igual = a.querySelector('#igual')

tela1.innerText = ''
tela2.innerText = ''

for (let i = 0; i < a.getElementsByClassName('numeros').length; i++) {
    numeros[i] = a.getElementsByClassName('numeros')[i]   
}
for(let i = 0; i < numeros.length; i++ ){
    numeros[i].addEventListener('click', clicouNum)

}
cleaner.addEventListener('click', limpar)
mais.addEventListener('click', maisClick)
menos.addEventListener('click', menosClick)
mult.addEventListener('click', multClick)
divi.addEventListener('click', diviClick)
igual.addEventListener('click', igualClick)
function maisClick(){
    if(tela2.innerText != ''){
        
    }else if( tela1.innerText != ''){
        op.innerText = '+'
        operador = '+'
        operadorClick()
    }
}
function menosClick(){
    if(tela2.innerText != ''){

    }else if( tela1.innerText != ''){
        op.innerText = '-'
        operador = '-'
        operadorClick()
    }
}
function multClick(){
    if(tela2.innerText != ''){

    }else if( tela1.innerText != ''){
        op.innerText = 'x'
        operador = '*'
        operadorClick()
    }
}
function diviClick(){
    if(tela2.innerText != ''){

    }else if( tela1.innerText != ''){
        op.innerText = '/'
        operador = '/'
        operadorClick()
    }
}
function igualClick(){
    n2 = Number(tela1.innerText)
    switch(operador){
        case '+':
            res = n1 + n2
            tela1.innerText = res
            tela2.innerText = `${n1} + ${n2} `
        break;
        case '-':
            res = n1 - n2
            tela1.innerText = res
            tela2.innerText = `${n1} - ${n2}`
        break;
        case '*':
            res = n1 * n2
            tela1.innerText = res
            tela2.innerText = `${n1} x ${n2}`
        break;
        case '/':
            res = n1 / n2
            tela1.innerText = res
            tela2.innerText = `${n1} / ${n2}`
        break;
    }
}
function operadorClick(){
    n1 = Number(tela1.innerText)
    tela2.innerText = tela1.innerText
    tela1.innerText = ''      
}

function limpar(){
    tela1.innerText = null
    tela2.innerText = null
    op.innerText = null
    n1 = 0
    n2 = 0
    operador = null
}

function clicouNum(){

    tela1.innerText += this.innerText
}



