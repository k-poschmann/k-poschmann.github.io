/*---------------------------- Afrika ------------------------------
-------------------------------------------------------------------*/
function Afrika() {
    //Prozente Afrika
    var percentAf = emissionAfrica2018 * 100 / total2018;
    var percentAf2 = emissionAfrica2018 - emissionAfrica2008;
    var percentAf3 = percentAf2 / emissionAfrica2008 * 100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionAfrica2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentAf.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentAf3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endAfrica.toFixed(1) + " kg CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + percentAf3 + "%");
    console.log(a + Africa + b + emissionAfrica2018 + c + d + Africa + e + percentAf + f + g + Africa + h + percentAf3 + f + i + j + endAfrica + c);
}
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", Afrika);
});
/*---------------------------- Süd Amerika -------------------------
-------------------------------------------------------------------*/
function SuedAmerika() {
    //Prozente Süd Amerika
    var percentSA = emissionSouthAmerica2018 * 100 / total2018;
    var percentSA2 = emissionSouthAmerica2018 - emissionSouthAmerica2008;
    var percentSA3 = percentSA2 / emissionSouthAmerica2008 * 100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionSouthAmerica2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentSA.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentSA3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endSouthAmerica.toFixed(1) + " kg CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "heigh:" + percentSA3 + "%");
    console.log(a + SouthAmerica + b + emissionSouthAmerica2018 + c + d + SouthAmerica + e + percentSA + f + g + SouthAmerica + h + percentSA3 + f + i + j + endSouthAmerica + c);
}
window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("click", SuedAmerika);
});
/*---------------------------- Europa ------------------------------
-------------------------------------------------------------------*/
function Europa() {
    //Prozente Europa
    var percentEu = emissionEuropa2018 * 100 / total2018;
    var percentEu2 = emissionEuropa2018 - emissionEuropa2008;
    var percentEu3 = percentEu2 / emissionEuropa2008 * 100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionEuropa2018 + "";
    document.querySelector(".relativetoworlds h2").innerHTML = percentEu.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentEu3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endEurope.toFixed(1) + " kg CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 15%");
    console.log(a + Europe + b + emissionEuropa2018 + c + d + Europe + e + percentEu + f + g + Europe + h + percentEu3 + f + i + j + endEurope + c);
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", Europa);
});
/*---------------------------- Nord Amerika ------------------------
-------------------------------------------------------------------*/
function NordAmerika() {
    //Prozente Nord Amerika
    var percentNA = emissionNorthAmerica2018 * 100 / total2018;
    var percentNA2 = emissionNorthAmerica2018 - emissionNorthAmerica2008;
    var percentNa3 = percentNA2 / emissionNorthAmerica2008 * 100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionNorthAmerica2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentNA.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentNa3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endNorthAmerica.toFixed(1) + " kg CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 8%");
    console.log(a + NorthAmerica + b + emissionNorthAmerica2018 + c + d + NorthAmerica + e + percentNA + f + g + NorthAmerica + h + percentNa3 + f + i + j + endNorthAmerica + c);
}
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", NordAmerika);
});
/*---------------------------- Asien ------------------------------
-------------------------------------------------------------------*/
function Asien() {
    //Prozente Asien
    var percentAsia = emissionAsia2018 * 100 / total2018;
    var percentAsia2 = emissionAsia2018 - emissionAsia2008;
    var percentAsia3 = percentAsia2 / emissionAsia2008 * 100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionAsia2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentAsia.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentAsia3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endAsia.toFixed(1) + " CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + percentAsia3 + "%");
    console.log(a + Asia + b + emissionAsia2018 + c + d + Asia + e + percentAsia + f + g + Asia + h + percentAsia3 + f + i + j + endAsia + c);
}
window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("click", Asien);
});
/*---------------------------- Australien --------------------------
-------------------------------------------------------------------*/
function Australien() {
    //Prozente Australien
    var percentAus = emissionAustralia2018 * 100 / total2018;
    var percentAus2 = emissionAustralia2018 - emissionAustralia2008;
    var percentAus3 = percentAus2 / emissionAustralia2008 * 100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionAustralia2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentAus.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentAus3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endAustralia.toFixed(1) + " CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + percentAus3 + "%");
    console.log(a + Australia + b + emissionAustralia2018 + c + d + Australia + e + percentAus + f + g + Australia + h + percentAus3 + f + i + j + endAustralia + c);
}
window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("click", Australien);
});
/*------------------------------ von Aufgabe 5 ----------------------------
---------------------------------------------------------------------------*/
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
//Emission Afrika
var emissionAfrica2018 = 1235.5;
var emissionAfrica2008 = 1028;
var endAfrica = emissionAfrica2018 - emissionAfrica2008;
//Emission Süd Amerika
var emissionSouthAmerica2018 = 1261.5;
var emissionSouthAmerica2008 = 1132.6;
var endSouthAmerica = emissionSouthAmerica2018 - emissionSouthAmerica2008;
//Emission Europa
var emissionEuropa2018 = 4209.3;
var emissionEuropa2008 = 4965.7;
var endEurope = emissionEuropa2018 - emissionEuropa2008;
//Emission Nord Amerika
var emissionNorthAmerica2018 = 6035.6;
var emissionNorthAmerica2008 = 6600.4;
var endNorthAmerica = emissionNorthAmerica2018 - emissionNorthAmerica2008;
//Emission Asien
var emissionAsia2018 = 16274.1;
var emissionAsia2008 = 12954.7;
var endAsia = emissionAsia2018 - emissionAsia2008;
//Emission
var emissionAustralia2018 = 2100.5;
var emissionAustralia2008 = 1993;
var endAustralia = emissionAustralia2018 - emissionAustralia2008;
// Emissionen Gesamt
var total2018 = emissionAfrica2018 + emissionSouthAmerica2018 + emissionEuropa2018 + emissionNorthAmerica2018 + emissionAsia2018 + emissionAustralia2018;
var total2008 = emissionAfrica2008 + emissionSouthAmerica2008 + emissionEuropa2008 + emissionNorthAmerica2008 + emissionAsia2008 + emissionAustralia2008;
//# sourceMappingURL=script.js.map