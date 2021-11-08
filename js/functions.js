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
    get3ID("valor1", "measure", "toMeasure");
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

// Funciones de área
function squareA(){
    get2ID("areaSquare", "measureAS");
    total = value1 * value1;
    totalDom("#totalAreaS", "Area", valueSelectorTo);
}
function rectangleA(){
    get3ID("areaRectangleB", "areaRectangleH", "measureAR");
    total = value1 * value2;
    totalDom("#totalAreaR", "Area", valueSelectorTo);
}
function triangleA(){
    get3ID("areaTriangleB", "areaTriangleH", "measureAT");
    total = ((value1 * value2)/2);
    totalDom("#totalAreaT", "Area", valueSelectorTo);
}
function circleA(){
    get2ID("areaCircleR","measureAC");

    total = Math.PI * Math.pow(value1, 2);
    totalDom("#totalAreaC", "Area", valueSelectorTo);
}
// Funciones de perimetro
function squareP(){
    get2ID("perimeterSquare", "measurePS")
    total = value1 * 4;

    totalDom("#totalPerimeterS", "Perimeter", valueSelectorTo);
}
function rectangleP(){
    get3ID("perimeterRectangleB", "perimeterRectangleH","measurePR");
    total = (2*value1)+(2*value2);

    totalDom("#totalPerimeterR", "Perimeter", valueSelectorTo);
}
function triangleP(){
    get4ID("perimeterTriangleA", "perimeterTriangleB", "perimeterTriangleC", "measurePT")
    total = value1 + value2 + value3;

    totalDom("#totalPerimeterT", "Perimeter", valueSelectorTo);
}
function circleP(){
    get2ID("perimeterCircleR", "measurePC");
    total = (2 * Math.PI * value1);

    totalDom("#totalPerimeterC", "Perimeter", valueSelectorTo);
}
// Funciones de radio, diametro y circunfenrencia (Circulo)
function circleR(){
    get2ID("radiusCircle","measureRC");
    total = (value1 / ( 2 * Math.PI))

    totalDom("#totalRadiusC", "Radius", valueSelectorTo)
}
function circleD(){
    get2ID("diameterCircle","measureDC");
    total = 2 * value1;

    totalDom("#totalDiameterC", "Diameter", valueSelectorTo)
}
function circleC(){
    get2ID("circumferenceCircle","measureCC");
    total = value1 * Math.PI;

    totalDom("#totalCircumferenceC", "Circumference", valueSelectorTo)
}
// Conversor de Temperaturas
function temperatureConversor(){
    get3ID("temperatureValue", "temperatureInitial", "temperatureFinal");
    if(valueSelectorTo === "Farenheit"){
        if (value2 === "Kelvin"){
            total = ((9*(value1 - 273.15))/5)+32;
        }
        else if (value2 === "Celcius"){
            total = ((9*value1)/5)+32;
        }
        totalDom("#finalTemperature", "Farenheit")
    }
    else if(valueSelectorTo === "Celcius"){
        if (value2 === "Kelvin"){
            total = ((9*(value1 - 273.15))/5)+32;
        }
        else if (value2 === "Farenheit"){
            total = (5*(value1 - 32))/9;
        }
        totalDom("#finalTemperature", "Celcius")
    }
    else if(valueSelectorTo === "Kelvin"){
        if (value2 === "Celcius"){
            value1 = Number(value1);
            total = value1 + 273.15;
        }
        else if (value2 === "Farenheit"){
            total = ((5*(value1 - 32))/9)+273.15;
        }
        totalDom("#finalTemperature", "Kelvin")
    }
}
// Calcular IMC de la persona
function IMCCalculator(){
    get2ID("weightValue", "heightValue");
    total = (value1 / (Math.pow(valueSelectorTo, 2))).toFixed(2);
    if(total < 18.5){
        totalDom("#calculatedBMI", "Underweight", "BMI")
    }else{
        if(total >= 18.5 && 24.9 <= total){
            totalDom("#calculatedBMI", "Normal", "BMI")
        }
        if(total >= 25 && 29.9 <= total){
            totalDom("#calculatedBMI", "Overweight", "BMI")
        }
        if(total >= 30.0 ){
            totalDom("#calculatedBMI", "Obesity", "BMI")
        }
    }
}
// MRU Operaciones
function mruDisplacement(){
    get2ID("mrudisfinalD", "mrudisinitialD");
    total = valueSelectorTo - value1;
    totalDom("#dispCalculatedMru", "Displacement", "m")
}
function mruDistance(){
    get2ID("mruspeedD", "mrutimeD");
    total = value1 * valueSelectorTo;
    totalDom("#distCalculatedMru", "Distance", "m");
}
function mruTime(){
    get2ID("mrudistanceT", "mruspeedT");
    total = value1 / valueSelectorTo;
    totalDom("#timeCalculatedMru", "Time", "s");
}
function mruSpeed(){
    get2ID("mrudistanceS", "mrutimeS");
    total = value1 / valueSelectorTo;
    totalDom("#speedCalculatedMru", "Speed", "m/s")
}
function mruAverageS(){
    get2ID("mrudispAS", "mrutimeAS");
    total = value1 / valueSelectorTo;
    totalDom("#averagespeedCalculatedMru", "Average speed", "m/s")
}
// Calculate Interest
function simpleInterest(){
    get3ID("initialCapitalSI", "interestrateSI", "periodSI");
    total = (value1 * (1+(value2/100)*valueSelectorTo)).toFixed(2);
    totalDom("#calculatedSI", "Simple Interest", "$")
}
function composedInterest(){
    get3ID("initialCapitalCI", "interestrateCI", "periodCI");
    total = (value1 * (1 + Math.pow((value2/100), valueSelectorTo))).toFixed(2);
    totalDom("#calculatedCI", "Composed Interest", "$")
}
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
// Personajes creación de div en navbar
function characterDiv (a){
    $.get(RaMURL, function (res, status) {
        if (status === "success") {
            if (number <= 20 & number >= 0) {
                $(".characterContainer").empty();
                $(".characterContainer").append(`<div class="container-character">
                <div><img src="${res.results[number].image}" class="characterImage"></div>
                <div class="characterName">${res.results[number].name}</div>
            </div>`)
                $(".navUser").slideUp(a);
            }
            sessionStorage.setItem("character", number);
        }
    })
}
