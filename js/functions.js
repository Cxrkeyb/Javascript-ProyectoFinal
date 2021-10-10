// FUNCTIONS
//Funciones generales
function addition(a,b){
    total = a+b;
}
function substraction(a,b){
    total = a-b;
}
function multiply(a,b){
    total = a*b;
}
function divide(a,b){
    total = a/b;
}

// Funciones de la calculadora
// Suma de dos valores  
function additionC(){
    number1 = parseFloat(document.getElementById('valor1').value)
    number2 = parseFloat(document.getElementById('valor2').value)
    addition(number1,number2);
    paragraph.innerHTML = `<p>Welcome the first number typed was ${number1} and the second was ${number2}, the result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
    // operation = {number: number1, number2: number2, operation: "+" ,total: total}
    // for(i=1; i <= j; i++){
    //     localStorage.setItem("Calculation", JSON.stringify(operation));
    //     calculation = JSON.parse(localStorage.getItem("Calculation"));
    //     paragraph.innerHTML = `<p>Welcome the first number typed was ${number1} and the second was ${number2}, the result of the operation is  ${total}<p>`
    // }
    // j = j + 1
}
// Resta de dos valores  
function substractionC(){
    number1 = parseFloat(document.getElementById('valor1').value)
    number2 = parseFloat(document.getElementById('valor2').value)
    substraction(number1,number2);
    paragraph.innerHTML = `<p>Welcome the first number typed was ${number1} and the second was ${number2}, the result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
}
// Multiplicación de dos valores  
function multiplyC(){
    number1 = parseFloat(document.getElementById('valor1').value)
    number2 = parseFloat(document.getElementById('valor2').value)
    multiply(number1,number2);
    paragraph.innerHTML = `<p>Welcome the first number typed was ${number1} and the second was ${number2}, the result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
}
// Suma de dos valores  
function divideC(){
    number1 = parseFloat(document.getElementById('valor1').value)
    number2 = parseFloat(document.getElementById('valor2').value)
    divide(number1,number2);
    paragraph.innerHTML = `<p>Welcome the first number typed was ${number1} and the second was ${number2}, the result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
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
        distance = PadRight(1, total+1);
        result = number1 / distance;
        paragraph.innerHTML = `<p>The convertion of ${number1} ${select1} to ${select2} is ${result}${select2} <p>`
        convertions.appendChild(paragraph);
    }
    else{
        paragraph.innerHTML = `<p>There isn't a convertion${number1} ${select1}<p>`
        convertions.appendChild(paragraph);
    }
}
// Añade ceros a la parte derecha para las conversiones
function PadRight(value, length) {
    return (value.toString().length < length) ? PadRight(value + "0", length) : 
    value;
}
