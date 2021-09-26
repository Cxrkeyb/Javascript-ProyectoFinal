function firstfinalproyect(){
    const array = [];
    let quantity = parseInt(prompt("Type the quantity of numbers for calculate"));
    for (i = 1; i <= quantity; i++) {
        array.push(parseFloat(prompt("Type a number")));
    }
    operation = prompt("Type the operation by the number\n 1. Addition  \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Square \n 6. Squareroot");
    switch (operation){
        case '1':
            let addition = parseFloat(prompt("What do you want to add?"));
            console.log(array.join('\n'));
            const adittionarray = array.map(x => x+=addition);
            console.log("Adittions in order are " + adittionarray);
            break;
        case '2':
            let substraction = parseFloat(prompt("What do you want to substract?"));
            console.log(array.join('\n'));
            const substractionarray = array.map(x => x-substraction);
            console.log("Substractions in order are " + substractionarray);
            break;
        case '3':
            let multiplication = parseFloat(prompt("What do you want to multiply?"));
            console.log(array.join('\n'));
            const multiplicationarray = array.map(x => x*multiplication);
            console.log("Multiplications in order are " + multiplicationarray );
            break;
        case '4':
            let division = parseFloat(prompt("What do you want to divide?"));
            console.log(array.join('\n'));
            const divisionarray = array.map(x => x/division);
            console.log("Divisions in order are " + divisionarray );
            break;  
        case '5':
            console.log(array.join('\n'));
            const sqrt = array.map(x => Math.sqrt(x));
            console.log("Squareroots in order are " + sqrt);
            break;
        case '6':
            console.log(array.join('\n'));
            const square = array.map(x => x * x);
            console.log("Squares in order are " + square);
            break;
        default:
            console.log("You did not select any operation")
    }
}