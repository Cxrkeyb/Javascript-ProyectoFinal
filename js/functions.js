// FUNCTIONS
//Funciones generales
function getValues(){
    number1 = parseFloat(document.getElementById('valor1').value)
    number2 = parseFloat(document.getElementById('valor2').value)
}
function addition(a,b){
    if(a - Math.floor(a) == 0){
        total = (a+b);
    }
    else{
        total = (a+b).toFixed(2);
    }
}
function substraction(a,b){
    if(a - Math.floor(a) == 0){
        total = (a-b);
    }
    else{
        total = (a-b).toFixed(2);
    }
}
function multiply(a,b){
    if(a - Math.floor(a) == 0){
        total = (a*b);
    }
    else{
        total = (a*b).toFixed(2);
    }
}
function divide(a,b){
    if(a - Math.floor(a) == 0){
        total = (a/b).toFixed(2);
    }
    else{
        total = (a/b).toFixed(5);
    }
}

// Funciones de la calculadora
// Almacenar valores y mostrarlos en pantalla
function getStorageC(a){
    operation = sessionStorage.getItem('OCalculated');
    if(!operation){
        operation = []
    }else{
    operation = JSON.parse(operation)
    }
    calculated = {
        number: number1,
        number2: number2,
        operator: a,
        total: total
    }    
    operation.push(calculated);
    valueBefore();
    index = index + 1;  
    operation = JSON.stringify(operation);
    sessionStorage.setItem('OCalculated', operation)
}
// Suma de dos valores  
function additionC(){
    getValues();
    addition(number1,number2);
    paragraph.innerHTML = `<p> The result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
    getStorageC("+");
    
}
// Resta de dos valores  
function substractionC(){
    substraction(number1,number2);
    paragraph.innerHTML = `<p> The result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
    getStorageC("-");
}
// Multiplicación de dos valores  
function multiplyC(){
    multiply(number1,number2);
    paragraph.innerHTML = `<p> The result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
    getStorageC("*");
}
// Suma de dos valores  
function divideC(){
    divide(number1,number2);
    paragraph.innerHTML = `<p> The result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
    getStorageC("/");
}
function valueBefore(){
    let divTable = document.createElement("div");
    operatorD = document.createElement("div");
    value1D = document.createElement("div");
    value2D = document.createElement("div");
    totalD = document.createElement("div");
    operatorP = document.createElement("p");
    value1P = document.createElement("p");
    value2P = document.createElement("p");
    totalP = document.createElement("p");
    operatorP.innerHTML = (operation[index]).operator
    // let text = document.createTextNode(`Operation ${index+1}( ${(operation[index]).number} ${(operation[index]).operator} ${(operation[index]).number2} = ${(operation[index]).total})`);
    operatorD.appendChild(operatorP)
    operatorD.classList.toggle('tableInside')
    value1P.innerHTML = (operation[index]).number
    value1D.appendChild(value1P)
    value1D.classList.toggle('tableInside')
    value2P.innerHTML = (operation[index]).number2
    value2D.appendChild(value2P)
    value2D.classList.toggle('tableInside')
    totalP.innerHTML = (operation[index]).total
    totalD.appendChild(totalP)
    totalD.classList.toggle('tableInside')
    divTable.appendChild(operatorD)
    divTable.appendChild(value1D)
    divTable.appendChild(value2D)
    divTable.appendChild(totalD)
    tableBeforeValues.appendChild(divTable)
    divTable.classList.toggle('tableGeneral')
}

// Funciones de cambios de medidas
function measureMeters(){
    metering = ["mm", "cm", "dm", "m", "Dm", "Hm", "Km"];
    number1 = parseFloat(document.getElementById('valor1').value)
    select1 = document.getElementById('measure').value;
    select2 = document.getElementById('toMeasure').value;
    substraction(metering.indexOf(select1), metering.indexOf(select2))
    if (Math.sign(total) == 1){
        distance = PadRight(1, total+1);
        result = number1 * distance;
        paragraph.innerHTML = `<p>The convertion of ${number1} ${select1} to ${select2} is ${result}${select2} <p>`
        convertions.appendChild(paragraph);
    }
    else if (Math.sign(total) == -1){
        distance = PadRight(1, (total*-1)+1);
        result = number1 / distance;
        paragraph.innerHTML = `<p>The convertion of ${number1} ${select1} to ${select2} is ${result}${select2} <p>`
        convertions.appendChild(paragraph);
    }
    else{
        paragraph.innerHTML = `<p>There isn't a convertion ${number1} ${select1}<p>`
        convertions.appendChild(paragraph);
    }
}
// Añade ceros a la parte derecha para las conversiones
function PadRight(value, length) {
    return (value.toString().length < length) ? PadRight(value + "0", length) : 
    value;
}
