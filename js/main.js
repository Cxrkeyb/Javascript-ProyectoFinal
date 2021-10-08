function PadRight(value, length) {
    return (value.toString().length < length) ? PadRight(value + "0", length) : 
    value;
}

// function calculator(){
//     const array = [];
//     let quantity = parseInt(prompt("Type the quantity of numbers for calculate"));
//     for (i = 1; i <= quantity; i++) {
//         array.push(parseFloat(prompt("Type a number")));
//     }
//     operation = prompt("Type the operation by the number\n 1. Addition  \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Square \n 6. Squareroot");
//     switch (operation){
//         case '1':
//             let addition = parseFloat(prompt("What do you want to add?"));
//             console.log('The numbers selected are '+array);
//             const adittionarray = array.map(x => x+=addition);
//             console.log("Adittions in order are " + adittionarray);
//             break;
//         case '2':
//             let substraction = parseFloat(prompt("What do you want to substract?"));
//             console.log('The numbers selected are '+array);
//             const substractionarray = array.map(x => x-substraction);
//             console.log("Substractions in order are " + substractionarray);
//             break;
//         case '3':
//             let multiplication = parseFloat(prompt("What do you want to multiply?"));
//             console.log('The numbers selected are '+array);
//             const multiplicationarray = array.map(x => x*multiplication);
//             console.log("Multiplications in order are " + multiplicationarray );
//             break;
//         case '4':
//             let division = parseFloat(prompt("What do you want to divide?"));
//             console.log('The numbers selected are '+array);
//             const divisionarray = array.map(x => x/division);
//             console.log("Divisions in order are " + divisionarray );
//             break;  
//         case '5':
//             console.log('The numbers selected are '+array);
//             const sqrt = array.map(x => Math.sqrt(x));
//             console.log("Squareroots in order are " + sqrt);
//             break;
//         case '6':
//             console.log('The numbers selected are '+array);
//             const square = array.map(x => x * x);
//             console.log("Squares in order are " + square);
//             break;
//         default:
//             console.log("You did not select any operation")
//     }
// }
function measureMeters(){
    metering = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
    let inputFirst = prompt("Type the measure initial. (mm, cm, dm, m, dam, hm, km)");
    let number = parseFloat(prompt("Type the number of " + inputFirst));
    let inputSecond = prompt("Type the measure final. (mm, cm, dm, m, dam, hm, km)");
    let difference = metering.indexOf(inputFirst) - metering.indexOf(inputSecond);
    if (Math.sign(difference) == 1){
        let multiply = PadRight(1, difference+1);
        number = number * multiply;
        alert(number + inputSecond);
    }
    else if(Math.sign(difference) == -1){
        let denominator = PadRight(1, ((difference*-1)+1));
        number = number / denominator;
        alert(number + " " + inputSecond);
    }
    else{
        alert(number + inputFirst);
    }
}
// DESAFIO CLASE 9
// Obtener valores del html
let calculator = document.getElementById("calculator")
let numero2 = document.getElementById("valor2");
let btnsuma = document.getElementById('suma');
let btn_resta = document.getElementById("resta");
let btn_multiplicar = document.getElementById("multiplicar");
let btn_dividir = document.getElementById("dividir");
let parrafo = document.createElement("p");


//  Enter funcionando, no entiendo porque cuando tengo el enter así no me deja escribir solo con las flechitas del form
// function enter(e){
//     e.preventDefault();
//     if (e.keyCode == 13)
//     parrafo.innerHTML = `<p>No seleccionaste ninguna operación<p>`
//     document.body.appendChild(parrafo);;
// }
// window.onkeydown = enter;

// AÑADIR EVENTO
btnsuma.addEventListener('click', suma);
btn_resta.addEventListener("click", resta);
btn_multiplicar.addEventListener("click", multiplicar);
btn_dividir.addEventListener("click", dividir);

//Funciones de los botones
function suma(){
    let numero1 = parseFloat(document.getElementById('valor1').value)
    let numero2 = parseFloat(document.getElementById('valor2').value)
    let total = numero1 + numero2;
    parrafo.innerHTML = `<p>Bienvenido el primer número que digitó es ${numero1} y el segundo número es ${numero2}, el resultado de la operación es ${total}<p>`
    calculator.appendChild(parrafo);
}
function resta(){
    let numero1 = parseFloat(document.getElementById("valor1").value)
    let numero2 = parseFloat(document.getElementById("valor2").value)
    let total = numero1 - numero2;
    parrafo.innerHTML = `<p>Bienvenido el primer número que digitó es ${numero1} y el segundo número es ${numero2}, el resultado de la operación es ${total}<p>`
    calculator.appendChild(parrafo);
}

function multiplicar(){
    let numero1 = parseFloat(document.getElementById("valor1").value)
    let numero2 = parseFloat(document.getElementById("valor2").value)
    let total = numero1 * numero2;
    parrafo.innerHTML = `<p>Bienvenido el primer número que digitó es ${numero1} y el segundo número es ${numero2}, el resultado de la operación es ${total}<p>`
    calculator.appendChild(parrafo);
}
function dividir(){
    let numero1 = parseFloat(document.getElementById("valor1").value)
    let numero2 = parseFloat(document.getElementById("valor2").value)
    let total = numero1 / numero2;
    parrafo.innerHTML = `<p>Bienvenido el primer número que digitó es ${numero1} y el segundo número es ${numero2}, el resultado de la operación es ${total}<p>`
    calculator.appendChild(parrafo);
}