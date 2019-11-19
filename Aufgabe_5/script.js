// Emissionen 2018
var emissionAfrica2018 = 1235.5;
var emissionSouthAmerica2018 = 1261.5;
var emissionEuropa2018 = 4209.3;
var emissionNorthAmerica2018 = 6035.6;
var emissionAsia2018 = 16274.1;
var emissionAustralia2018 = 2100.5;
var total2018 = emissionAfrica2018 + emissionSouthAmerica2018 + emissionEuropa2018 + emissionNorthAmerica2018 + emissionAsia2018 + emissionAustralia2018;
//Emissionen 2008
var emissionAfrica2008 = 1028;
var emissionSouthAmerica2008 = 1132.6;
var emissionEuropa2008 = 4965.7;
var emissionNorthAmerica2008 = 6600.4;
var emissionAsia2008 = 12954.7;
var emissionAustralia2008 = 1993;
var total2008 = emissionAfrica2008 + emissionSouthAmerica2008 + emissionEuropa2008 + emissionNorthAmerica2008 + emissionAsia2008 + emissionAustralia2008;
//Prozente Afrika
var percentAf = emissionAfrica2018 * 100 / total2018;
var percentAf2 = emissionAfrica2018 - emissionAfrica2008;
var percentAf3 = percentAf2 / emissionAfrica2008 * 100;
//Prozente Süd Amerika
var percentSA = emissionSouthAmerica2018 * 100 / total2018;
var percentSA2 = emissionSouthAmerica2018 - emissionSouthAmerica2008;
var percentSA3 = percentSA2 / emissionSouthAmerica2008 * 100;
//Prozente Europa
var percentEu = emissionEuropa2018 * 100 / total2018;
var percentEu2 = emissionEuropa2018 - emissionEuropa2008;
var percentEu3 = percentEu2 / emissionEuropa2008 * 100;
//Prozente Nord Amerika
var percentNA = emissionNorthAmerica2018 * 100 / total2018;
var percentNA2 = emissionNorthAmerica2018 - emissionNorthAmerica2008;
var percentNa3 = percentNA2 / emissionNorthAmerica2008 * 100;
//Prozente Asien
var percentAsia = emissionAsia2018 * 100 / total2018;
var percentAsia2 = emissionAsia2018 - emissionAsia2008;
var percentAsia3 = percentAsia2 / emissionAsia2008 * 100;
//Prozente Australien
var percentAus = emissionAustralia2018 * 100 / total2018;
var percentAus2 = emissionAustralia2018 - emissionAustralia2008;
var percentAus3 = percentAus2 / emissionAustralia2008 * 100;
// Emissionen
var endAfrica = emissionAfrica2018 - emissionAfrica2008;
var endSouthAmerica = emissionSouthAmerica2018 - emissionSouthAmerica2008;
var endEurope = emissionEuropa2018 - emissionEuropa2008;
var endNorthAmerica = emissionNorthAmerica2018 - emissionNorthAmerica2008;
var endAsia = emissionAsia2018 - emissionAsia2008;
var endAustralia = emissionAustralia2018 - emissionAustralia2008;
// Sätze
var a = "Die Emmission von ";
var b = "ist: ";
var c = " kg CO2. ";
var d = "Relativ zur Gesamtemission der Welt verursacht ";
var e = "damit ";
var f = "%";
var g = ". Für ";
var h = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var i = " verändert. ";
var j = "2018 im Vergleich zu 2008 sind das ";
var Africa = "Afrika ";
var SouthAmerica = "Süd Amerika ";
var Europe = "Europa ";
var NorthAmerica = "Nord Amerika ";
var Asia = "Asien ";
var Australia = "Australien ";
// Ausgabe
console.log(a + Africa + b + emissionAfrica2018 + c + d + Africa + e + percentAf + f + g + Africa + h + percentAf3 + f + i + j + endAfrica + c);
console.log(a + SouthAmerica + b + emissionSouthAmerica2018 + c + d + SouthAmerica + e + percentSA + f + g + SouthAmerica + h + percentSA3 + f + i + j + endSouthAmerica + c);
console.log(a + Europe + b + emissionEuropa2018 + c + d + Europe + e + percentEu + f + g + Europe + h + percentEu3 + f + i + j + endEurope + c);
console.log(a + NorthAmerica + b + emissionNorthAmerica2018 + c + d + NorthAmerica + e + percentNA + f + g + NorthAmerica + h + percentNa3 + f + i + j + endNorthAmerica + c);
console.log(a + Asia + b + emissionAsia2018 + c + d + Asia + e + percentAsia + f + g + Asia + h + percentAsia3 + f + i + j + endAsia + c);
console.log(a + Australia + b + emissionAustralia2018 + c + d + Australia + e + percentAus + f + g + Australia + h + percentAus3 + f + i + j + endAustralia + c);
/*Tutorium

var inhalt:HTMLElement=document.getElementById("inhalt");
inhalt inner.Text("Hallo Welt") <--- die einfachste aber nicht schönste Variante, um Text im HTML einzubringen
console.log("inhalt");

<div oncick="machwas()"></div> <-- im HTML Dokument
--> im script:
function machwas(){
    console.log("ich habe etwas gemacht");
}


innerText ersetzt alles was im HTML Element drin stand !!
*/ 
//# sourceMappingURL=script.js.map