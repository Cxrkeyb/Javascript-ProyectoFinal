// Establenciendo variables
// Variables generales
let number1;
let number2;
let result;
let total;
let select1;
let select2;
let distance;
let index = 0;
let operation = [];
let calculated = {};
let calculation;

// Obteniendo variables desde ids del HTML
// Variables de la calculadora
let calculator = document.getElementById("calculator")
let tableGeneral = document.getElementsByClassName("tableGeneral")
let btn_addition = document.getElementById('addition');
let btn_substraction = document.getElementById("substraction");
let btn_multiply = document.getElementById("multiply");
let btn_divide = document.getElementById("divide");

// Variables de conversor de medidas
let convertions = document.getElementById("convertions");
let select_Measure = document.getElementById("toMeasure")
let btn_metric = document.getElementById("metricConverted")

// Variables of geometric figures
let btn_areaS = document.getElementById("calculateSquareA");
let btn_areaR = document.getElementById("calculateRectangleA");
let btn_areaT = document.getElementById("calculateTriangleA");
let btn_areaC = document.getElementById("calculateCircleA")
let btn_perimeterS = document.getElementById("calculateSquareP");
let btn_perimeterR = document.getElementById("calculateRectangleP");
let btn_perimeterT = document.getElementById("calculateTriangleP");
let btn_perimeterC = document.getElementById("calculateCircleP")
let btn_radiusC = document.getElementById("calculateCircleR");
let btn_diameterC = document.getElementById("calculateCircleD");
let btn_circumferenceC = document.getElementById("calculateCircleC");

// Variables of MRU
let btn_dispMRU = document.getElementById("calculateDispMRU");
let btn_distMRU = document.getElementById("calculateDistanceMRU");
let btn_timeMRU = document.getElementById("calculateTimeMRU");
let btn_speedMRU = document.getElementById("calculateSpeedMRU");
let btn_averagespeedMRU = document.getElementById("calculateAverageSpeedMRU");

// Variables of Interest
let btn_composedI = document.getElementById("calculateCI");
let btn_simpleI = document.getElementById("calculateSI");

// Variables of temperature convertions
let btn_temperature = document.getElementById("calculateTemperature");

// Variables of BMI Calculator
let btn_BMI = document.getElementById("calculateBMI");

// Creando variables de texto
let paragraph = document.createElement("p");

// Detectar el nombre del html
function filename(){
    var absoluteRoute = self.location.href;   
    var positionLastBar = absoluteRoute.lastIndexOf("/");
    var relativeRoute = absoluteRoute.substring( positionLastBar + "/".length , absoluteRoute.length );
    return relativeRoute;  
}
var file_name = filename();

// Eventos de la calculadora
// Comparar el nombre para ejecutarse
if(file_name == "calculator.html"){
    btn_addition.addEventListener('click', additionC);
    btn_substraction.addEventListener('click', substractionC);
    btn_multiply.addEventListener("click", multiplyC);
    btn_divide.addEventListener("click", divideC);
}

// Evento botón BMI
// Comparar el nombre para ejecutarse
if(file_name == "imccalculator.html"){
    btn_BMI.addEventListener("click", IMCCalculator);
}
// Evento botón Metric
// Comparar el nombre para ejecutarse
if(file_name == "measures.html"){
    btn_metric.addEventListener("click", measureMeters);
}
// Eventos de la temperatura
// Comparar el nombre para ejecutarse
if(file_name == "temperatureConversion.html"){
    btn_temperature.addEventListener('click', temperatureConversor);
}
// Eventos geometric 
// Comparar el nombre para ejecutarse
if(file_name == "geometricFigures.html"){
    btn_areaS.addEventListener("click", squareA);
    btn_areaR.addEventListener("click", rectangleA);
    btn_areaT.addEventListener("click", triangleA);
    btn_areaC.addEventListener("click", circleA);
    btn_perimeterS.addEventListener("click", squareP);
    btn_perimeterR.addEventListener("click", rectangleP);
    btn_perimeterT.addEventListener("click", triangleP);
    btn_perimeterC.addEventListener("click", circleP);
    btn_radiusC.addEventListener("click", circleR);
    btn_diameterC.addEventListener("click", circleD);
    btn_circumferenceC.addEventListener("click", circleC);
}
// Eventos MRU
// Comparar el nombre para ejecutarse
if(file_name == "mru.html"){
    btn_timeMRU.addEventListener("click", mruTime);
    btn_distMRU.addEventListener("click", mruDistance);
    btn_dispMRU.addEventListener("click", mruDisplacement);
    btn_speedMRU.addEventListener("click", mruSpeed);
    btn_averagespeedMRU.addEventListener("click", mruAverageS);
}
if(file_name == "interest.html"){
    btn_composedI.addEventListener("click", composedInterest);
    btn_simpleI.addEventListener("click", simpleInterest);
}