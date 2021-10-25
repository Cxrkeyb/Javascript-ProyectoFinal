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
    getValues();
    substraction(number1,number2);
    paragraph.innerHTML = `<p> The result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
    getStorageC("-");
}
// Multiplicación de dos valores  
function multiplyC(){
    getValues();
    multiply(number1,number2);
    paragraph.innerHTML = `<p> The result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
    getStorageC("*");
}
// Suma de dos valores  
function divideC(){
    getValues();
    divide(number1,number2);
    paragraph.innerHTML = `<p> The result of the operation is  ${total}<p>`
    calculator.appendChild(paragraph);
    getStorageC("/");
}
function valueBefore(){
    $('#tableBeforeValues').prepend(`<div class="tableGeneral"><div class="tableInside">${(operation[index]).operator}</div><div class="tableInside">${(operation[index]).number}</div><div class="tableInside">${(operation[index]).number2}</div><div class="tableInside">${(operation[index]).total}</div></div>`)
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

function characterDiv (){
    $.get(RaMURL, function (res, status) {
        if (status === "success") {
            if (number <= 20 & number >= 0) {
                $(".characterContainer").append(`<div class="container-character">
                <div><img src="${res.results[number].image}" class="characterImage"></div>
                <div class="characterName">${res.results[number].name}</div>
            </div>`)
                $(".navUser").slideUp(1000);
            }
            sessionStorage.setItem("character", number);
        }
    })
}
