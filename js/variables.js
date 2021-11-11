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

// Variables of EqScndGrade
let btn_eqscndgrade = document.getElementById("calculateEqScndGrade");

// Variables of waves
let btn_propagationsW = document.getElementById("calculatePropagationSW");
let btn_lineardW = document.getElementById("calculatelineardW");
let btn_keystroketW = document.getElementById("calculatekeystroketW");
let btn_keystrokefW = document.getElementById("calculatekeystrokefW");
let btn_periodwW = document.getElementById("calculateperiodW");
let btn_frequencywW = document.getElementById("calculatefrequencykW");
let btn_wavelenghtW = document.getElementById("calculatewavelenghtWave");

// Variables of Resultant Force
let btn_resultingforcemaCF = document.getElementById("calculatemaRS");
let btn_resultingforcefrCF = document.getElementById("calculatefrRS");
let btn_resultingforceaCF = document.getElementById("calculateaRS");

// Variables of Conversion mass
let btn_conversionMass = document.getElementById("convertmass");

// Variables of Conversion volume
let btn_conversionVolume = document.getElementById("conversionvolume");

// Variables of Energies
let btn_kinecticE = document.getElementById("calculatekinecticE");
let btn_potentialE = document.getElementById("calculatepotentialE");
let btn_mechanicalE = document.getElementById("calculatemechanicalE");

// Variables of heat transferred
let btn_heattHT = document.getElementById("calculateheattransferredHT");
let btn_massHT = document.getElementById("calculateMass");
let btn_specifichHT = document.getElementById("calculateSpecificHeat");
let btn_temperaturevhmsHT = document.getElementById("calculatehmsTV");
let btn_temperaturevtf = document.getElementById("calculatetftiTV");

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
if (file_name == "equationscndgrade.html"){
    btn_eqscndgrade.addEventListener("click", eqscndgrade);
}
if (file_name == "undolatory.html"){
    btn_propagationsW.addEventListener("click", propagationsWave);
    btn_lineardW.addEventListener("click", lineardWave);
    btn_keystrokefW.addEventListener("click", keystrokefWave);
    btn_keystroketW.addEventListener("click", keystrokepWave);
    btn_periodwW.addEventListener("click", periodWave);
    btn_frequencywW.addEventListener("click", frequencyWave);
    btn_wavelenghtW.addEventListener("click", wavelengthWave)
}
if (file_name == "contactforce.html"){
    btn_resultingforcefrCF.addEventListener("click", resultingforcefrCF);
    btn_resultingforcemaCF.addEventListener("click", resultingforcemaCF);
    btn_resultingforceaCF.addEventListener("click", resultingforceaCF)
}
if(file_name =="conversormass.html"){
    btn_conversionMass.addEventListener("click", measureGrams)
}
if(file_name == "energies.html"){
    btn_potentialE.addEventListener("click", potentialEnergy);
    btn_kinecticE.addEventListener("click", kinecticEnergy);
    btn_mechanicalE.addEventListener("click", mechanicalEnergy);
}
if(file_name == "heattransferred.html"){
    btn_heattHT.addEventListener("click", heattransferredHT);
    btn_massHT.addEventListener("click", massHT);
    btn_specifichHT.addEventListener("click", specificheatHT);
    btn_temperaturevhmsHT.addEventListener("click", hmstemperatureVariation);
    btn_temperaturevtf.addEventListener("click", tftemperatureVariation);
}
if(file_name == "volumeconversor.html"){
    btn_conversionVolume.addEventListener("click", convertVolume)
}