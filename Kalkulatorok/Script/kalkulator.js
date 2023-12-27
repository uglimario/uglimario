function fontKilogrammkonverter(valNUM, decimalPlaces) {
    var kilogrammErtek = (valNUM * 0.4536).toFixed(3);
    document.getElementById("outputkilogramm").innerHTML = kilogrammErtek;
}

function Kilogrammfontkonverter(valNUM, decimalPlaces) {
    var fontErtek = (valNUM / 0.4536).toFixed(3);
    document.getElementById("outputfont").innerHTML = fontErtek;
}

function Inchcentikonverter(valNUM, decimalPlaces) {
    var centiErtek = (valNUM * 2.54).toFixed(3);
    document.getElementById("outputcenti").innerHTML = centiErtek;
}

function centiInchkonverter(valNUM, decimalPlaces) {
    var inchErtek = (valNUM / 2.54).toFixed(3);
    document.getElementById("outputinch").innerHTML = inchErtek;
}