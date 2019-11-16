// Emissionen 2018

var emissionAfrica2018:number = 1235.5;
var emissionSouthAmerica2018:number = 1261.5;
var emissionEuropa2018:number = 4209.3;
var emissionNorthAmerica2018:number = 6035.6;
var emissionAsia2018:number = 16274.1;
var emissionAustralia2018:number = 2100.5;

var total2018:number = emissionAfrica2018 + emissionSouthAmerica2018 + emissionEuropa2018 + emissionNorthAmerica2018 + emissionAsia2018 + emissionAustralia2018;


//Emissionen 2008

var emissionAfrica2008:number = 1028;
var emissionSouthAmerica2008:number = 1132.6;
var emissionEuropa2008:number = 4965.7;
var emissionNorthAmerica2008:number = 6600.4;
var emissionAsia2008:number = 12954.7;
var emissionAustralia2008:number = 1993;

var total2008:number = emissionAfrica2008 + emissionSouthAmerica2008 + emissionEuropa2008 + emissionNorthAmerica2008 + emissionAsia2008 + emissionAustralia2008;


//Prozente Afrika
var percentAf:number = emissionAfrica2018*100/total2018;
var percentAf2:number = emissionAfrica2018-emissionAfrica2008;
var percentAf3:number = percentAf2/emissionAfrica2008*100;

//Prozente Süd Amerika
var percentSA:number = emissionSouthAmerica2018*100/total2018;
var percentSA2:number = emissionSouthAmerica2018-emissionSouthAmerica2008;
var percentSA3:number = percentSA2/emissionSouthAmerica2008*100;

//Prozente Europa
var percentEu:number = emissionEuropa2018*100/total2018;
//var percentEu2:number = ((emissionEuropa2008/emissionEuropa2018)^(1/10))*100;
var percentEu2:number = emissionEuropa2018-emissionEuropa2008;
var percentEu3:number = percentEu2/emissionEuropa2008*100;

//Prozente Nord Amerika
var percentNA:number = emissionNorthAmerica2018*100/total2018;
var percentNA2:number = emissionNorthAmerica2018-emissionNorthAmerica2008;
var percentNa3:number = percentNA2/emissionNorthAmerica2008*100;

//Prozente Asien
var percentAsia:number = emissionAsia2018*100/total2018;
var percentAsia2:number = emissionAsia2018-emissionAsia2008;
var percentAsia3:number = percentAsia2/emissionAsia2008*100;

//Prozente Australien
var percentAus:number = emissionAustralia2018*100/total2018;
var percentAus2:number = emissionAustralia2018-emissionAustralia2008;
var percentAus3:number = percentAus2/emissionAustralia2008*100;



// Emissionen
var endAfrica:number = emissionAfrica2018-emissionAfrica2008;
var endSouthAmerica:number = emissionSouthAmerica2018-emissionSouthAmerica2008;
var endEurope:number = emissionEuropa2018-emissionEuropa2008;
var endNorthAmerica:number = emissionNorthAmerica2018-emissionNorthAmerica2008;
var endAsia:number = emissionAsia2018-emissionAsia2008;
var endAustralia:number = emissionAustralia2018-emissionAustralia2008;


// Sätze

var a:string="Die Emmission von ";
var b:string="ist: ";
var c:string=" kg CO2.";
var d:string="Relativ zur Gesamtemission der Welt verursacht ";
var e:string="damit ";
var f:string=" %.";
var g:string="Für ";
var h:string="hat sich 2018 im Vergleich zu 2008 die Emission um ";
var i:string=" verändert. ";
var j:string="2018 im Vergleich zu 2008 sind das ";

var Africa:string="Afrika ";
var SouthAmerica:string="Süd Amerika ";
var Europe:string="Europa ";
var NorthAmerica:string="Nord Amerika ";
var Asia:string="Asien ";
var Australia:string="Australien ";

// Ausgabe

console.log(a + Africa + b + emissionAfrica2018 + c + d + Africa + e + percentAf + f + g + Africa + h + percentAf3 + i + j + endAfrica + c);
console.log(a + SouthAmerica + b + emissionSouthAmerica2018 + c + d + SouthAmerica + e + percentSA + f + g + SouthAmerica + h + percentSA3 + i + j + endSouthAmerica + c);
console.log(a + Europe + b + emissionEuropa2018 + c + d + Europe + e + percentEu + f + g + Europe + h + percentEu3 + i + j + endEurope + c);
console.log(a + NorthAmerica + b + emissionNorthAmerica2018 + c + d + NorthAmerica + e + percentNA + f + g + NorthAmerica + h + percentNa3 + i + j + endNorthAmerica + c );
console.log(a + Asia + b + emissionAsia2018 + c + d + Asia + e + percentAsia + f + g + Asia + h + percentAsia3 + i + j + endAsia + c) ;
console.log(a + Australia + b + emissionAustralia2018 + c + d + Australia + e + percentAus + f + g + Australia + h + percentAus3 + i + j + endAustralia + c);