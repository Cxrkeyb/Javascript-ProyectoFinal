function PadRight(value, length) {
    return (value.toString().length < length) ? PadRight(value + "0", length) : 
    value;
}

function calculator(){
    const array = [];
    let quantity = parseInt(prompt("Type the quantity of numbers for calculate"));
    for (i = 1; i <= quantity; i++) {
        array.push(parseFloat(prompt("Type a number")));
    }
    operation = prompt("Type the operation by the number\n 1. Addition  \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Square \n 6. Squareroot");
    switch (operation){
        case '1':
            let addition = parseFloat(prompt("What do you want to add?"));
            console.log('The numbers selected are '+array);
            const adittionarray = array.map(x => x+=addition);
            console.log("Adittions in order are " + adittionarray);
            break;
        case '2':
            let substraction = parseFloat(prompt("What do you want to substract?"));
            console.log('The numbers selected are '+array);
            const substractionarray = array.map(x => x-substraction);
            console.log("Substractions in order are " + substractionarray);
            break;
        case '3':
            let multiplication = parseFloat(prompt("What do you want to multiply?"));
            console.log('The numbers selected are '+array);
            const multiplicationarray = array.map(x => x*multiplication);
            console.log("Multiplications in order are " + multiplicationarray );
            break;
        case '4':
            let division = parseFloat(prompt("What do you want to divide?"));
            console.log('The numbers selected are '+array);
            const divisionarray = array.map(x => x/division);
            console.log("Divisions in order are " + divisionarray );
            break;  
        case '5':
            console.log('The numbers selected are '+array);
            const sqrt = array.map(x => Math.sqrt(x));
            console.log("Squareroots in order are " + sqrt);
            break;
        case '6':
            console.log('The numbers selected are '+array);
            const square = array.map(x => x * x);
            console.log("Squares in order are " + square);
            break;
        default:
            console.log("You did not select any operation")
    }
}
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
