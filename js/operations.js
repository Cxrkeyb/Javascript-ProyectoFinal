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
    multiplication(number1,number2);
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
// Funcion de switch para cambio de medidas
function selectorDetect(){
    switch(Math.sign(total)){
        case 1:
            distance = PadRight(1, total+1);
            result = number1 * distance;
            paragraph.innerHTML = `<p>The convertion of ${number1} ${select1} to ${select2} is ${result}${select2} <p>`
            convertions.appendChild(paragraph);
            break;
        case -1:
            distance = PadRight(1, (total*-1)+1);
            result = number1 / distance;
            paragraph.innerHTML = `<p>The convertion of ${number1} ${select1} to ${select2} is ${result}${select2} <p>`
            convertions.appendChild(paragraph);
            break;
        default:
            paragraph.innerHTML = `<p>There isn't a convertion ${number1} ${select1}<p>`
            convertions.appendChild(paragraph);
    }
}
// Funciones de cambios de medidas
function measureMeters(){
    metering = ["mm", "cm", "dm", "m", "Dm", "Hm", "Km"];
    number1 = parseFloat(document.getElementById('valor1').value)
    select1 = document.getElementById('measure').value;
    select2 = document.getElementById('toMeasure').value;
    substraction(metering.indexOf(select1), metering.indexOf(select2))
    selectorDetect();
}
// Funciones de cambios de medidas
function measureGrams(){
    metering = ["mg", "cg", "dg", "g", "Dg", "Hg", "Kg"];
    number1 = parseFloat(document.getElementById('valor1').value)
    select1 = document.getElementById('measure').value;
    select2 = document.getElementById('toMeasure').value;
    substraction(metering.indexOf(select1), metering.indexOf(select2))
    selectorDetect();
}
function convertVolume(){
    metering = ["ml", "cl", "dl", "L"];
    number1 = parseFloat(document.getElementById('valor1').value)
    select1 = document.getElementById('measure').value;
    select2 = document.getElementById('toMeasure').value;
    substraction(metering.indexOf(select1), metering.indexOf(select2))
    selectorDetect();
}
// Añade ceros a la parte derecha para las conversiones
function PadRight(value, length) {
    return (value.toString().length < length) ? PadRight(value + "0", length) : value;
}
// Funciones de área
function squareA(){
    get2ID("areaSquare", "measureAS");
    multiplication(value1,value1)
    totalDom("#totalAreaS", "Area", valueSelectorTo);
}
function rectangleA(){
    get3ID("areaRectangleB", "areaRectangleH", "measureAR");
    multiplication(value1,value2)
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
    multiplication(value1,4)
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
    multiplication(2,value1)
    totalDom("#totalDiameterC", "Diameter", valueSelectorTo)
}
function circleC(){
    get2ID("circumferenceCircle","measureCC");
    multiplication(value1,Math.PI)
    totalDom("#totalCircumferenceC", "Circumference", valueSelectorTo)
}
// Conversor de Temperaturas
function temperatureConversor(){
    get3ID("temperatureValue", "temperatureInitial", "temperatureFinal");
    switch(valueSelectorTo){
        case "Farenheit":
            switch(value2){
                case "Kelvin":
                    total = ((9*(value1 - 273.15))/5)+32;
                    break;
                case "Celcius":
                    total = ((9*value1)/5)+32;
                    break;
                default:
                    total = value1;
                    break;
            }
            totalDom("#finalTemperature", "Farenheit", "°F") 
            break;
        case "Kelvin":
            switch(value2){
                case "Celcius":
                    value1 = Number(value1);
                    total = value1 + 273.15;
                    break;
                case "Farenheit":
                    total = ((5*(value1 - 32))/9)+273.15;
                    break;
                default:
                    total = value1;
                    break;
            }
            totalDom("#finalTemperature", "Kelvin", "°K")
            break;
        case "Celcius":
            switch(value2){
                case "Kelvin":
                    total = ((9*(value1 - 273.15))/5)+32;
                    break;
                case "Farenheit":
                    total = (5*(value1 - 32))/9;
                    break;
                default:
                    total = value1;
                    break;
            }
            totalDom("#finalTemperature", "Celcius", "°C")
            break;
    }
}
// Calcular IMC de la persona
function IMCCalculator(){
    get2ID("weightValue", "heightValue");
    total = (value1 / (Math.pow(valueSelectorTo, 2))).toFixed(2);
    switch(true){
        case (total < 18.5):
            totalDom("#calculatedBMI", "Underweight", "BMI")
            break;
        case (total >= 18.5 && total <= 24.9):
            totalDom("#calculatedBMI", "Normal", "BMI")
            break;
        case (total >= 25 && total <= 29.9):
            totalDom("#calculatedBMI", "Overweight", "BMI")
            break;
        case (total >= 30.0 ):
            totalDom("#calculatedBMI", "Obesity", "BMI")
            break;
    }
}
// MRU Operaciones
function mruDisplacement(){
    get2ID("mrudisfinalD", "mrudisinitialD");
    substraction(value1, valueSelectorTo);
    totalDom("#dispCalculatedMru", "Displacement", "m")
}
function mruDistance(){
    get2ID("mruspeedD", "mrutimeD");
    multiplication(value1, valueSelectorTo);
    totalDom("#distCalculatedMru", "Distance", "m");
}
function mruTime(){
    get2ID("mrudistanceT", "mruspeedT");
    divide(value1, valueSelectorTo);
    totalDom("#timeCalculatedMru", "Time", "s");
}
function mruSpeed(){
    get2ID("mrudistanceS", "mrutimeS");
    divide(value1, valueSelectorTo);
    totalDom("#speedCalculatedMru", "Speed", "m/s")
}
function mruAverageS(){
    get2ID("mrudispAS", "mrutimeAS");
    divide(value1, valueSelectorTo);
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
    total = Math.pow((1 + (value2/100)), valueSelectorTo)
    total = (value1 * total).toFixed(2);
    totalDom("#calculatedCI", "Composed Interest", "$")
}
// Calculate Equation Second Grade
function eqscndgrade(){
    get3ID("aEqScndGrade", "bEqScndGrade", "cEqScndGrade");
    pow = (Math.pow(value2, 2) - (4 * value1 * valueSelectorTo));
    switch(Math.sign(pow)){
        case 1:
            total = ((value2 * -1) + Math.sqrt(pow))/(2*value1);
            break;
        case -1:
            total = ((value2 * -1) + Math.sqrt(pow*-1))/(2*value1);
            break;
    }
    totalDom("#calculatedEqScndGrade", "x", "");
}
// Movements Ondulatories
function propagationsWave(){
    get2ID("periodPropagationS", "lineardPropagationS");
    total = Math.sqrt((value1 / valueSelectorTo));
    totalDom("#calculatedPropagationSW", "Propagation speed", "m/s");
}
function lineardWave(){
    get2ID("kglineardW", "mlineardW");
    divide(value1, valueSelectorTo);
    totalDom("#calculatedlineardW", "Propagation speed", "m/s");
}
function keystrokepWave(){
    value1 = Number(document.getElementById("periodKeystroke").value);
    total = ((2 * Math.PI) / value1);
    totalDom("#calculatedkeystrokefW", "Keystroke", "J");
}
function keystrokefWave(){
    value1 = Number(document.getElementById("frequencyKeystroke").value);
    total = 2 * Math.PI * value1;
    totalDom("#calculatedkeystrokefW", "Keystroke", "J");
}
function periodWave(){
    value1 = Number(document.getElementById("periodkW").value);
    total = (2 * Math.PI) / value1;
    totalDom("#calculatedperiodW", "Period", "s");
}
function frequencyWave(){
    value1 = Number(document.getElementById("keystrokefW").value);
    total = value1 /  (Math.PI * 2);
    totalDom("#calculatedfrequencykW", "Period", "s");
}
function wavelengthWave(){
    get2ID("speedpwlW","periodwlW");
    multiplication(value1, valueSelectorTo);
    totalDom("#calculatedwavelenghtWave", "Wavelenght", "m");
}
// Contact Force
function resultingforcemaCF(){
    get2ID("massRS", "acelerationRS");
    multiplication(value1,valueSelectorTo);
    totalDom("#calculatedRS", "Resulting Force", "N");
}
function resultingforcefrCF(){
    get2ID("froneRS", "frtwoRS");
    substraction(value1,valueSelectorTo);
    totalDom("#calculatedRS", "Resulting Force", "N");
}
function resultingforceaCF(){
    get2ID("resultingforceacelaration", "massaceleration");
    divide(value1, valueSelectorTo);
    totalDom("#calculatedAcelerationCF", "Aceleration", "m/s<sup>2</sup>");
}
// Energies
function kinecticEnergy(){
    get2ID("masskinecticE", "speedkinecticE");
    total = 0.5 * value1 * (Math.pow(valueSelectorTo, 2));
    totalDom("#calculatedkinecticE", "Kinectic Energy", "J");
}
function potentialEnergy(){
    get3ID("masspotentiawlE", "gravitypotentalE", "heightpotentialE");
    total = value1 * value2 * valueSelectorTo;
    totalDom("#calculatedpotentialE", "Potential Energy", "J");
}
function mechanicalEnergy(){
    get2ID("energykinecticE", "energypotentialE");
    total = Number(value1) + Number(valueSelectorTo);
    totalDom("#calculatedmechanicalE", "Mechanical Energy", "J")
}
// Heat transferred
function heattransferredHT(){
    get3ID("masshtHT", "specificheatHT", "temperaturevariationHT");
    total = value1 * value2 * valueSelectorTo;
    totalDom("#calculatedheattransferredHT", "Q", "J/s");
}
function massHT(){
    get3ID("heattransferredM", "specificheatM", "temperaturevariationM");
    total = value1 / (value2 * valueSelectorTo);
    totalDom("#calculatedMass", "Mass", "Kg");
}
function specificheatHT(){-
    get3ID("heattransferredSH", "massSH", "temperaturevariationSH");
    total = value1 / (value2 * valueSelectorTo);
    totalDom("#calculatedSpecificHeat", "Specific Heat", "J/Kg");
}
function hmstemperatureVariation(){
    get3ID("heattransferredTV", "massTV", "specificheatTV");
    total = value1 / (value2 * valueSelectorTo);
    totalDom("#calculatedtemperatureV", "Δt", "°C");
}
function tftemperatureVariation(){
    get2ID("tFinalTV", "tInitialTV");
    substraction(value1, valueSelectorTo)
    totalDom("#calculatedtemperatureV", "Δt", "°C");
}
function rednackaPT(){
    get2ID("hypotenusecRA", "redneckbRA");
    if(value1 > valueSelectorTo){
        total = Math.sqrt((Math.pow(value1, 2)) - (Math.pow(valueSelectorTo, 2)));
        totalDom("#calculatedredneckA", "Rednack A", "(measure)");
    }else{
       $("#calculatedredneckA").empty();
       $("#calculatedredneckA").append(`<p class="totalTxt">This is not possible, the hypotenuse must be greater than the typed rednack.</p>`)
    }
    
}
function rednackbPT(){
    get2ID("hypotenusecRB", "redneckaRB");
    if(value1 > valueSelectorTo){
        total = Math.sqrt((Math.pow(value1, 2)) - (Math.pow(valueSelectorTo, 2)));
        totalDom("#calculatedredneckB", "Rednack B", "(measure)");
    }else{
    $("#calculatedredneckB").empty();
    $("#calculatedredneckB").append(`<p class="totalTxt">This is not possible, the hypotenuse must be greater than the typed rednack.</p>`)
    }
}
function hypothenusePT(){
    get2ID("redneckaH", "redneckbH");
    total = Math.sqrt((Math.pow(value1, 2)) + (Math.pow(valueSelectorTo, 2)));
    totalDom("#calculatedhypotenuseH", "Hypothenuse", "(measure)");
}
function translatedDom(ubication, find, total){
    $(ubication).empty();
    $(ubication).append(`<p class="totalTxt">${find} = ${total}</p>`)
}
// Texto a binario
function textToBinaries(){
    normalText = document.getElementById("textnormalValue").value;
    for (let letters of normalText) {
        binariesData.filter(function(element){
            if(element.normalValue === letters){
                binariesTranslated = `${binariesTranslated} ${element.binaryCode}`;
            }
          })
    }
    translatedDom("#translatedBinaries", "Translated", binariesTranslated);
    binariesTranslated = "";
}
function textToAscii(){
    normalText = document.getElementById("textnormalValue").value;
    const Array = []
    for (let letters of normalText) {
        Array.push(letters);
    }
    const asciicode = Array.map(function(letter){
        return letter.charCodeAt(0);
    })
    asciiCodeString = asciicode.toString();
    const asciiCodeStringSpace = asciiCodeString.replace(/,/g,' ');
    translatedDom("#translatedAscii", "Translated", asciiCodeStringSpace);
    asciiCodeStringSpace = "";
}
function calculateKdr(){
    get3ID("nicknameKdr","killsKdr","deathsKdr");
    class KDR {
        constructor(user, kills, deaths) {
            this.user = user;
            this.kills = Number(kills);
            this.deaths = Number(deaths);
        }
        get product() {
            return this.user;
        }
        get KD() {
            return (this.kills / this.deaths);
        }
        userInfo() {
            return `The KD of ${this.user} is ${this.KD}`;
        }
    }
    const user = new KDR(value1, value2, valueSelectorTo);
    total = user.userInfo();
    totalDom("#calculatedKDR", "KDR", "");
}
