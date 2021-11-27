const theoryData = [
    {
        id: 1,
        title: 'Calculator',
        paragraph: "It is an application with which mathematical operations are performed, it is an electronic machine with which arithmetic calculations can be made.",
        img: "../assets/theory/calculatorTheory.jpg"
    },
    {
        id: 2,
        title: "Sum",
        paragraph: "Arithmetic operation that consists of joining several quantities into one; it is represented by the + sign",
        img: "../assets/theory/sumTheory.png"
    },
    {
        id: 3,
        title: "Substract",
        paragraph: "An arithmetic operation that consists of removing one quantity (the subtrahend) from another (the minuend) to find out the difference between the two; it is represented by the sign -.",
        img: "../assets/theory/substractionTheory.jpg"
    },
    {
        id: 4,
        title: "Multiplication",
        paragraph: "Arithmetic operation that consists of calculating the result (product) of adding the same number (multiplicand) as many times as indicated by another number (multiplier); it is represented by the signs - or ×.",
        img: "../assets/theory/multiplicationTheory.svg"
    },
    {
        id: 5,
        title: "Division",
        paragraph: "Division is the mathematical operation by which a number, which we will call the dividend, is broken down into as many parts as indicated by another number, which we will call the divisor.",
        img: "../assets/theory/divisionTheory.png"
    },
    {
        id: 6,
        title: "Metric Conversor",
        paragraph: "Transform measures to different measures whether they are larger or smaller.",
        img: "../assets/theory/measureTheory.jpg"
    },
    {
        id: 7,
        title: "Geometric Figures",
        paragraph: "Geometric figures are surfaces bounded by lines (curved or straight) or spaces bounded by surfaces.",
        img: "../assets/theory/shapeTheory.png"
    },
    {
        id: 8,
        title: "Area",
        paragraph: "Area is a metric concept that can be used to assign a measure to the extent of a surface, expressed in mathematics as units of measurement called surface units.",
        img: "../assets/theory/areaTheory.png"
    },
    {
        id: 9,
        title: "Perimeter",
        paragraph: "The perimeter is the length that corresponds to the outline of a figure, that is, it is the sum of the sides that form the polygon or, in the case of a circle, the measure of its boundary called circumference.",
        img: "../assets/theory/perimeterTheory.jpg"
    },
    {
        id: 10,
        title: "Radius",
        paragraph: "The radius of a circle is any segment joining the center to any point on the circle.",
        img: "../assets/theory/radiusTheory.svg"
    },
    {
        id: 11,
        title: "Diameter",
        paragraph: "The diameter of a circle is the segment joining two points of the circle and passing through the center.",
        img: "../assets/theory/diameterTheory.png"
    },
    {
        id: 12,
        title: "Circumference",
        paragraph: "Area is a metric concept that can be used to assign a measure to the extent of a surface, expressed in mathematics as units of measurement called surface units.",
        img: "../assets/theory/circumferenceTheory.png"
    },
    {
        id: 13,
        title: "Kelvin",
        paragraph: "A unit of temperature of the International System, symbol K, equal to 1/273.16 of the thermodynamic temperature of the triple point of water, at which the solid, liquid and gas are in equilibrium.",
        img: "../assets/theory/kelvinTheory.jfif"
    },
    {
        id: 14,
        title: "Farenheit",
        paragraph: "The degree Fahrenheit is a temperature scale that establishes the freezing and boiling temperatures of water as 32 °F and 212 °F, respectively.",
        img: "../assets/theory/farenheitTheory.png"
    },
    {
        id: 15,
        title: "Celcius",
        paragraph: "The degree Celsius, historically known as the degree centigrade, is the thermometric unit whose 0 is 0.01 degrees below the triple point of water and whose caloric intensity is equivalent to that of kelvin.",
        img: "../assets/theory/celciusTheory.jfif"
    },
    {
        id: 16,
        title: "BMI",
        paragraph: "Body mass index (BMI) is a person's weight in kilograms divided by the square of height in meters. BMI is an easy and inexpensive assessment method for weight category: underweight, healthy weight, overweight, and obese.",
        img: "../assets/theory/bmiTheory.jpg"
    },
    {
        id: 17,
        title: "URM",
        paragraph: "Uniform rectilinear motion (u.r.m.) is a motion with constant velocity and whose trajectory is a straight line. A clear example is the sliding doors of an elevator, which generally open and close in a straight line and always at the same speed.",
        img: "../assets/theory/mruTheory.png"
    },
    {
        id: 18,
        title: "Interest",
        paragraph: "The following items, among others, are considered interest: The yields of credit of any kind. The yields of public debt, bonds or debentures, including premiums and prizes assimilated to the yields of such securities.",
        img: "../assets/theory/interestTheory.jpg"
    },
    {
        id: 19,
        title: "Second Degree Equation",
        paragraph: "A second degree equation or quadratic equation of one variable is an equation that has the general expression: where x is the variable, and a, b and c are constants; a is the quadratic coefficient, b is the linear coefficient and c is the independent term.",
        img: "../assets/theory/eqscndgradeTheory.gif"
    },
    {
        id: 20,
        title: "Wave Motions",
        paragraph: "Wave motion is the transfer of energy and momentum from one point of the medium to another point of the medium without actual transport of matter between two points.",
        img: "../assets/theory/wavemotionTheory.png"
    }
]
const binariesData = [
    {
        id: 1,
        normalValue: "a",
        binaryCode: "01100001"
    },
    {
        id: 2,
        normalValue: "b",
        binaryCode: "01100010"
    },
    {
        id: 3,
        normalValue: "c",
        binaryCode: "01100011"
    },
    {
        id: 4,
        normalValue: "d",
        binaryCode: "01100100"
    },
    {
        id: 5,
        normalValue: "e",
        binaryCode: "01100101"
    },
    {
        id: 6,
        normalValue: "f",
        binaryCode: "01100110"
    },
    {
        id: 7,
        normalValue: "g",
        binaryCode: "01100111"
    },
    {
        id: 8,
        normalValue: "h",
        binaryCode: "01101000"
    },
    {
        id: 9,
        normalValue: "i",
        binaryCode: "01101001"
    },
    {
        id: 10,
        normalValue: "j",
        binaryCode: "01101010"
    },
    {
        id: 11,
        normalValue: "k",
        binaryCode: "01101011"
    },
    {
        id: 12,
        normalValue: "l",
        binaryCode: "01101100"
    },
    {
        id: 13,
        normalValue: "m",
        binaryCode: "01101101"
    },
    {
        id: 14,
        normalValue: "n",
        binaryCode: "01101110"
    },
    {
        id: 15,
        normalValue: "o",
        binaryCode: "01101111"
    },
    {
        id: 16,
        normalValue: "p",
        binaryCode: "01110000"
    },
    {
        id: 17,
        normalValue: "q",
        binaryCode: "01110001"
    },
    {
        id: 18,
        normalValue: "r",
        binaryCode: "01110010"
    },
    {
        id: 19,
        normalValue: "s",
        binaryCode: "01110011"
    },
    {
        id: 20,
        normalValue: "t",
        binaryCode: "01110100"
    },
    {
        id: 21,
        normalValue: "u",
        binaryCode: "01110101"
    },
    {
        id: 22,
        normalValue: "v",
        binaryCode: "01110110"
    },
    {
        id: 23,
        normalValue: "w",
        binaryCode: "01110111"
    },
    {
        id: 24,
        normalValue: "x",
        binaryCode: "01111000"
    },
    {
        id: 25,
        normalValue: "y",
        binaryCode: "01111001"
    },
    {
        id: 26,
        normalValue: "z",
        binaryCode: "01111010"
    },
    {
        id: 27,
        normalValue: "A",
        binaryCode: "01000001"
    },
    {
        id: 28,
        normalValue: "B",
        binaryCode: "01000010"
    },
    {
        id: 29,
        normalValue: "C",
        binaryCode: "01000011"
    },
    {
        id: 30,
        normalValue: "D",
        binaryCode: "01000100"
    },
    {
        id: 31,
        normalValue: "E",
        binaryCode: "01000101"
    },
    {
        id: 32,
        normalValue: "F",
        binaryCode: "01000110"
    },
    {
        id: 33,
        normalValue: "G",
        binaryCode: "01000111"
    },
    {
        id: 34,
        normalValue: "H",
        binaryCode: "01001000"
    },
    {
        id: 35,
        normalValue: "I",
        binaryCode: "01001001"
    },
    {
        id: 36,
        normalValue: "J",
        binaryCode: "01001010"
    },
    {
        id: 37,
        normalValue: "K",
        binaryCode: "01001011"
    },
    {
        id: 38,
        normalValue: "L",
        binaryCode: "01001100"
    },
    {
        id: 39,
        normalValue: "M",
        binaryCode: "01001101"
    },
    {
        id: 40,
        normalValue: "N",
        binaryCode: "01001110"
    },
    {
        id: 41,
        normalValue: "O",
        binaryCode: "01001111"
    },
    {
        id: 42,
        normalValue: "P",
        binaryCode: "01010000"
    },
    {
        id: 43,
        normalValue: "Q",
        binaryCode: "01010001"
    },
    {
        id: 44,
        normalValue: "R",
        binaryCode: "01010010"
    },
    {
        id: 45,
        normalValue: "S",
        binaryCode: "01010011"
    },
    {
        id: 46,
        normalValue: "T",
        binaryCode: "01010100"
    },
    {
        id: 47,
        normalValue: "U",
        binaryCode: "01010101"
    },
    {
        id: 48,
        normalValue: "V",
        binaryCode: "01010110"
    },
    {
        id: 49,
        normalValue: "W",
        binaryCode: "01010111"
    },
    {
        id: 50,
        normalValue: "X",
        binaryCode: "01011000"
    },
    {
        id: 51,
        normalValue: "Y",
        binaryCode: "01011001"
    },
    {
        id: 52,
        normalValue: "Z",
        binaryCode: "01011010"
    },
    {
        id: 53,
        normalValue: "!",
        binaryCode: "00100001"
    },
    {
        id: 54,
        normalValue: "#",
        binaryCode: "00100011"
    },
    {
        id: 55,
        normalValue: "$",
        binaryCode: "00100100"
    },
    {
        id: 56,
        normalValue: "%",
        binaryCode: "00100101"
    },
    {
        id: 57,
        normalValue: "&",
        binaryCode: "00100110"
    },
    {
        id: 58,
        normalValue: "'",
        binaryCode: "00100111"
    },
    {
        id: 59,
        normalValue: "(",
        binaryCode: "00101000"
    },
    {
        id: 60,
        normalValue: ")",
        binaryCode: "00101001"
    },
    {
        id: 61,
        normalValue: "*",
        binaryCode: "00101010"
    },
    {
        id: 62,
        normalValue: "+",
        binaryCode: "00101011"
    },
    {
        id: 63,
        normalValue: ",",
        binaryCode: "00101100"
    },
    {
        id: 64,
        normalValue: "-",
        binaryCode: "00101101"
    },
    {
        id: 65,
        normalValue: ".",
        binaryCode: "00101110"
    },
    {
        id: 66,
        normalValue: "/",
        binaryCode: "00101111"
    },
    {
        id: 65,
        normalValue: "0",
        binaryCode: "00110000"
    },
    {
        id: 67,
        normalValue: "1",
        binaryCode: "00110001"
    },
    {
        id: 68,
        normalValue: "2",
        binaryCode: "00110010"
    },
    {
        id: 69,
        normalValue: "3",
        binaryCode: "00110011"
    },
    {
        id: 70,
        normalValue: "4",
        binaryCode: "00110100"
    },
    {
        id: 71,
        normalValue: "5",
        binaryCode: "00110101"
    },
    {
        id: 72,
        normalValue: "6",
        binaryCode: "00110110"
    },
    {
        id: 73,
        normalValue: "7",
        binaryCode: "00110111"
    },
    {
        id: 74,
        normalValue: "8",
        binaryCode: "00111000"
    },
    {
        id: 75,
        normalValue: "9",
        binaryCode: "00111001"
    },
    {
        id: 76,
        normalValue: "?",
        binaryCode: "00111111"
    },
    {
        id: 77,
        normalValue: "@",
        binaryCode: "01000000"
    },
    {
        id: 78,
        normalValue: "_",
        binaryCode: "01011111"
    },
    {
        id: 79,
        normalValue: " ",
        binaryCode: "00100000"
    }
]
const indexData = [
    {
        id: "m1",
        section: "Calculator",
        img: "assets/svg/calculator.svg",
        html: "./pages/calculator.html"
    },
    {
        id: "c1",
        section: "Measures Conversions",
        img: "assets/svg/measures.svg",
        html: "./pages/measures.html"
    },
    {
        id: "g1",
        section: "Geometric figures",
        img: "assets/img/geometry.png",
        html: "./pages/geometricFigures.html"
    },
    {
        id: "c2",
        section: "Temperatures Conversions",
        img: "assets/img/temperature.png",
        html: "./pages/temperatureConversion.html"
    },
    {
        id: "h1",
        section: "BMI Calculator",
        img: "assets/img/imc.png",
        html: "./pages/imccalculator.html"
    },
    {
        id: "f1",
        section: "MRU",
        img: "assets/img/MRU.png",
        html: "./pages/mru.html"
    },
    {
        id: "e1",
        section: "Interest",
        img: "assets/img/interest.png",
        html: "./pages/interest.html"
    },
    {
        id: "m2",
        section: "Equation Second Grade",
        img: "assets/img/equation.png",
        html: "./pages/equationscndgrade.html"
    },
    {
        id: "f2",
        section: "Movements Undolatories",
        img: "assets/img/undulatory.png",
        html: "./pages/undolatory.html"
    },
    {
        id: "f3",
        section: "Contact Force",
        img: "assets/img/contact.png",
        html: "./pages/contactforce.html"
    },
    {
        id: "c3",
        section: "Mass Conversions",
        img: "assets/img/mass.png",
        html: "./pages/conversormass.html"
    },
    {
        id: "f4",
        section: "Energies",
        img: "assets/img/energy.png",
        html: "./pages/energies.html"
    },
    {
        id: "f5",
        section: "Specific Heat",
        img: "assets/img/heat.png",
        html: "./pages/heattransferred.html"
    },
    {
        id: "g2",
        section: "Pythagoras Theorem",
        img: "assets/img/pitagoras.png",
        html: "./pages/pythagorastheorem.html"
    },
    {
        id: "c4",
        section: "Volume Conversions",
        img: "assets/img/volume.png",
        html: "./pages/volumeconversor.html"
    },
    {
        id: "m3",
        section: "Theory",
        img: "assets/img/theory.png",
        html: "./pages/theory.html"
    },
    {
        id: "c5",
        section: "Text to Binaries nums",
        img: "assets/img/binary.png",
        html: "./pages/binariesnumbers.html"
    }
]