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
let operatorD;
let value1D;
let value2D;
let totalD;
let operatorP;
let value1P;
let value2P;
let totalP;


// Variables de conversor de medidas
let convertions = document.getElementById("convertions");
let select_Measure = document.getElementById("toMeasure")
let start = document.getElementById("startProcess")

// Variables of geometric figures
let btn_areaS = document.getElementById("calculateSquareA");
let btn_areaR = document.getElementById("calculateRectangleA");
let btn_areaT = document.getElementById("calculateTriangleA");
let btn_areaC = document.getElementById("calculateCircleA")

// Creando variables de texto
let paragraph = document.createElement("p");


