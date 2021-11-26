// Detectar el nombre del html
function filename(){
    var absoluteRoute = self.location.href;   
    var positionLastBar = absoluteRoute.lastIndexOf("/");
    var relativeRoute = absoluteRoute.substring( positionLastBar + "/".length , absoluteRoute.length );
    return relativeRoute;  
}
var file_name = filename();

// Comparar el nombre para ejecutarse
switch(file_name){
    case "calculator.html":
        btn_addition.addEventListener('click', additionC);
        btn_substraction.addEventListener('click', substractionC);
        btn_multiply.addEventListener("click", multiplyC);
        btn_divide.addEventListener("click", divideC);
        break;
    case "imccalculator.html":
        btn_BMI.addEventListener("click", IMCCalculator);
        break;
    case "measures.html":
        btn_metric.addEventListener("click", measureMeters);
        break;
    case "temperatureConversion.html":
        btn_temperature.addEventListener('click', temperatureConversor);
        break;
    case "geometricFigures.html":
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
        break;
    case "mru.html":
        btn_timeMRU.addEventListener("click", mruTime);
        btn_distMRU.addEventListener("click", mruDistance);
        btn_dispMRU.addEventListener("click", mruDisplacement);
        btn_speedMRU.addEventListener("click", mruSpeed);
        btn_averagespeedMRU.addEventListener("click", mruAverageS);
        break;
    case "interest.html":
        btn_composedI.addEventListener("click", composedInterest);
        btn_simpleI.addEventListener("click", simpleInterest);
        break;
    case "equationscndgrade.html":
        btn_eqscndgrade.addEventListener("click", eqscndgrade);
        break;
    case "undolatory.html":
        btn_propagationsW.addEventListener("click", propagationsWave);
        btn_lineardW.addEventListener("click", lineardWave);
        btn_keystrokefW.addEventListener("click", keystrokefWave);
        btn_keystroketW.addEventListener("click", keystrokepWave);
        btn_periodwW.addEventListener("click", periodWave);
        btn_frequencywW.addEventListener("click", frequencyWave);
        btn_wavelenghtW.addEventListener("click", wavelengthWave)
        break;
    case "contactforce.html":
        btn_resultingforcefrCF.addEventListener("click", resultingforcefrCF);
        btn_resultingforcemaCF.addEventListener("click", resultingforcemaCF);
        btn_resultingforceaCF.addEventListener("click", resultingforceaCF)
        break;
    case "conversormass.html":
        btn_conversionMass.addEventListener("click", measureGrams)
        break;
    case "energies.html":
        btn_potentialE.addEventListener("click", potentialEnergy);
        btn_kinecticE.addEventListener("click", kinecticEnergy);
        btn_mechanicalE.addEventListener("click", mechanicalEnergy);
        break;
    case "heattransferred.html":
        btn_heattHT.addEventListener("click", heattransferredHT);
        btn_massHT.addEventListener("click", massHT);
        btn_specifichHT.addEventListener("click", specificheatHT);
        btn_temperaturevhmsHT.addEventListener("click", hmstemperatureVariation);
        btn_temperaturevtf.addEventListener("click", tftemperatureVariation);
        break;
    case "volumeconversor.html":
        btn_conversionVolume.addEventListener("click", convertVolume);
        break;
    case "pythagorastheorem.html":
        btn_hypothenusePT.addEventListener("click", hypothenusePT);
        btn_rednackaPT.addEventListener("click", rednackaPT);
        btn_rednackbPT.addEventListener("click", rednackbPT);
        break;
    case "binariesnumbers.html":
        btn_textToBinaries.addEventListener("click", textToBinaries);
        break;
}