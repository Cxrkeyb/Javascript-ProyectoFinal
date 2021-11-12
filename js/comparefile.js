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
// Eventos Interest
// Comparar el nombre para ejecutarse
if(file_name == "interest.html"){
    btn_composedI.addEventListener("click", composedInterest);
    btn_simpleI.addEventListener("click", simpleInterest);
}
// Eventos ecuacion de segundo grado
// Comparar el nombre para ejecutarse
if (file_name == "equationscndgrade.html"){
    btn_eqscndgrade.addEventListener("click", eqscndgrade);
}
// Eventos Movimiento ondulatorario
// Comparar el nombre para ejecutarse
if (file_name == "undolatory.html"){
    btn_propagationsW.addEventListener("click", propagationsWave);
    btn_lineardW.addEventListener("click", lineardWave);
    btn_keystrokefW.addEventListener("click", keystrokefWave);
    btn_keystroketW.addEventListener("click", keystrokepWave);
    btn_periodwW.addEventListener("click", periodWave);
    btn_frequencywW.addEventListener("click", frequencyWave);
    btn_wavelenghtW.addEventListener("click", wavelengthWave)
}
// Eventos fuerza de contacto
// Comparar el nombre para ejecutarse
if (file_name == "contactforce.html"){
    btn_resultingforcefrCF.addEventListener("click", resultingforcefrCF);
    btn_resultingforcemaCF.addEventListener("click", resultingforcemaCF);
    btn_resultingforceaCF.addEventListener("click", resultingforceaCF)
}
// Eventos conversion de masa
// Comparar el nombre para ejecutarse
if(file_name =="conversormass.html"){
    btn_conversionMass.addEventListener("click", measureGrams)
}
// Eventos energies
// Comparar el nombre para ejecutarse
if(file_name == "energies.html"){
    btn_potentialE.addEventListener("click", potentialEnergy);
    btn_kinecticE.addEventListener("click", kinecticEnergy);
    btn_mechanicalE.addEventListener("click", mechanicalEnergy);
}
// Eventos calor transferido
// Comparar el nombre para ejecutarse
if(file_name == "heattransferred.html"){
    btn_heattHT.addEventListener("click", heattransferredHT);
    btn_massHT.addEventListener("click", massHT);
    btn_specifichHT.addEventListener("click", specificheatHT);
    btn_temperaturevhmsHT.addEventListener("click", hmstemperatureVariation);
    btn_temperaturevtf.addEventListener("click", tftemperatureVariation);
}
// Eventos conversion de volumen
// Comparar el nombre para ejecutarse
if(file_name == "volumeconversor.html"){
    btn_conversionVolume.addEventListener("click", convertVolume);
}
// Eventos teorema de pitagoras
// Comparar el nombre para ejecutarse
if(file_name == "pythagorastheorem.html"){
    btn_hypothenusePT.addEventListener("click", hypothenusePT);
    btn_rednackaPT.addEventListener("click", rednackaPT);
    btn_rednackbPT.addEventListener("click", rednackbPT);
} 