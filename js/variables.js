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

// Variables of pythagoras theorem
let btn_hypothenusePT = document.getElementById("calculatehypotenuseH");
let btn_rednackaPT = document.getElementById("calculateredneckA");
let btn_rednackbPT = document.getElementById("calculateredneckB");

// Creando variables de texto
let paragraph = document.createElement("p");

