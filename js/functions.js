// FUNCTIONS
// Añadir al texto dom el resultado
function totalDom(ubication, find, measure){
    $(ubication).empty();
    $(ubication).append(`<p class="totalTxt">${find} = ${total} ${measure}</p>`)
}
// Obtener dos valores de Id del dom
function get2ID(firstElementId, secondElementId){
    value1 = Number(document.getElementById(firstElementId).value);
    valueSelectorTo = document.getElementById(secondElementId).value;
}
// Obtener tres valores de Id del dom
function get3ID(firstElementId,secondElementId,thirdElementId){
    value1 = (document.getElementById(firstElementId).value);
    value2 = document.getElementById(secondElementId).value;
    valueSelectorTo = document.getElementById(thirdElementId).value;
}
function get4ID(firstElementId,secondElementId,thirdElementId,fourthElementId){
    value1 = Number(document.getElementById(firstElementId).value);
    value2 = Number(document.getElementById(secondElementId).value);
    value3 = Number(document.getElementById(thirdElementId).value);
    valueSelectorTo = document.getElementById(fourthElementId).value;
}
//Funciones calcular
function getValues(){
    number1 = parseFloat(document.getElementById('valor1').value)
    number2 = parseFloat(document.getElementById('valor2').value)
}
// Suma
const addition = (a,b) => {
    total = a + b
}
// Resta
const substraction = (a,b) => {
    total = a - b
}
// Multiplication
const multiplication = (a,b) => {
    total = a * b
}
// Divide
const divide = (a,b) => {
    total = a / b
}
// Funciones de la calculadora
// Almacenar valores y mostrarlos en pantalla
function getStorageC(a){
    operation = sessionStorage.getItem('OCalculated');
    if(!operation){
        operation = [];
    }else{
    operation = JSON.parse(operation);
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
