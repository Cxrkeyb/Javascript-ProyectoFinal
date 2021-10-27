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

// Funciones de área
function squareA(){
    side = document.getElementById("areaSquare").value;
    select = document.getElementById('measureAS').value;
    total = side * side;
    totalDom("#totalAreaS", "Area");
}
function rectangleA(){
    getBHS("areaRectangleB", "areaRectangleH", "measureAR");
    total = base * height;
    totalDom("#totalAreaR", "Area");
}
function triangleA(){
    getBHS("areaTriangleB", "areaTriangleH", "measureAT");
    total = ((base * height)/2);
    totalDom("#totalAreaT", "Area");
}
function circleA(){
    getRS("areaCircleR","measureAC");

    total = Math.PI * Math.pow(value1, 2);
    totalDom("#totalAreaC", "Area");
}
// Funciones de perimetro
function squareP(){
    side = document.getElementById("perimeterSquare").value;
    select = document.getElementById('measurePS').value;
    total = side * 4;

    totalDom("#totalPerimeterS", "Perimeter");
}
function rectangleP(){
    getBHS("perimeterRectangleB", "perimeterRectangleH","measurePR");
    total = (2*base)+(2*height);

    totalDom("#totalPerimeterR", "Perimeter");
}
function triangleP(){
    sideA = Number(document.getElementById("perimeterTriangleA").value);
    sideB = Number(document.getElementById("perimeterTriangleB").value);
    sideC = Number(document.getElementById("perimeterTriangleC").value);
    select = document.getElementById('measurePT').value;
    total = sideA + sideB + sideC;

    totalDom("#totalPerimeterT", "Perimeter");
}
function circleP(){
    getRS("perimeterCircleR", "measurePC");
    total = (2 * Math.PI * value1);

    totalDom("#totalPerimeterC", "Perimeter");
}
function circleR(){
    getRS("radiusCircle","measureRC");
    total = (value1 / ( 2 * Math.PI))

    totalDom("#totalRadiusC", "Radius")
}
function circleD(){
    getRS("diameterCircle","measureDC");
    total = 2 * value1;

    totalDom("#totalDiameterC", "Diameter")
}
function circleC(){
    getRS("circumferenceCircle","measureCC");
    total = value1 * Math.PI;

    totalDom("#totalCircumferenceC", "Circumference")
}
function totalDom(ubication, find){
    $(ubication).empty();
    $(ubication).append(`<p class="totalTxt">${find} = ${total + select}</p>`)
}
// Obtener base, altura y el selector
function getBHS(baseGet,heightGet,selectorGet){
    base = document.getElementById(baseGet).value;
    height = document.getElementById(heightGet).value;
    select = document.getElementById(selectorGet).value;
}
// Obtener radio y selector
function getRS(radiusGet, selectorGet){
    value1 = document.getElementById(radiusGet).value;
    select = document.getElementById(selectorGet).value;
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
