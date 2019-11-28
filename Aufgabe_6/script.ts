  

/*---------------------------- Afrika ------------------------------
-------------------------------------------------------------------*/

function Afrika(){
    //Prozente Afrika
    var percentAf:number = emissionAfrica2018*100/total2018;
    var percentAf2:number = emissionAfrica2018-emissionAfrica2008;
    var percentAf3:number = percentAf2/emissionAfrica2008*100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionAfrica2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentAf.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentAf3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endAfrica.toFixed(1) + " kg CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + percentAf + "%");

    console.log(a + Africa + b + emissionAfrica2018 + c + d + Africa + e + percentAf + f + g + Africa + h + percentAf3 + f + i + j + endAfrica + c);


}

window.addEventListener("load", function(){
    document.querySelector(".africa").addEventListener("click", Afrika);
});



/*---------------------------- Süd Amerika -------------------------
-------------------------------------------------------------------*/

function SuedAmerika(){
    //Prozente Süd Amerika
    var percentSA:number = emissionSouthAmerica2018*100/total2018;
    var percentSA2:number = emissionSouthAmerica2018-emissionSouthAmerica2008;
    var percentSA3:number = percentSA2/emissionSouthAmerica2008*100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionSouthAmerica2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentSA.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentSA3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endSouthAmerica.toFixed(1) + " kg CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + percentSA + "%");


    console.log(a + SouthAmerica + b + emissionSouthAmerica2018 + c + d + SouthAmerica + e + percentSA + f + g + SouthAmerica + h + percentSA3 + f + i + j + endSouthAmerica + c);


}

window.addEventListener("load", function(){
    document.querySelector(".southamerica").addEventListener("click", SuedAmerika);
});


/*---------------------------- Europa ------------------------------
-------------------------------------------------------------------*/

function Europa(){
    //Prozente Europa
    var percentEu:number = emissionEuropa2018*100/total2018;
    var percentEu2:number = emissionEuropa2018-emissionEuropa2008;
    var percentEu3:number = percentEu2/emissionEuropa2008*100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionEuropa2018 + "";
    document.querySelector(".relativetoworlds h2").innerHTML = percentEu.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentEu3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endEurope.toFixed(1) + " kg CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + percentEu + "%");

    console.log(a + Europe + b + emissionEuropa2018 + c + d + Europe + e + percentEu + f + g + Europe + h + percentEu3 + f + i + j + endEurope + c);

    
}

window.addEventListener("load", function(){
    document.querySelector(".europe").addEventListener("click", Europa);
});


/*---------------------------- Nord Amerika ------------------------
-------------------------------------------------------------------*/

function NordAmerika(){
    //Prozente Nord Amerika
    var percentNA:number = emissionNorthAmerica2018*100/total2018;
    var percentNA2:number = emissionNorthAmerica2018-emissionNorthAmerica2008;
    var percentNa3:number = percentNA2/emissionNorthAmerica2008*100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionNorthAmerica2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentNA.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentNa3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endNorthAmerica.toFixed(1) + " kg CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + percentNA + "%");


    console.log(a + NorthAmerica + b + emissionNorthAmerica2018 + c + d + NorthAmerica + e + percentNA + f + g + NorthAmerica + h + percentNa3 + f + i + j + endNorthAmerica + c );


}

window.addEventListener("load", function(){
    document.querySelector(".northamerica").addEventListener("click", NordAmerika);
});

/*---------------------------- Asien ------------------------------
-------------------------------------------------------------------*/

function Asien(){
    //Prozente Asien
    var percentAsia:number = emissionAsia2018*100/total2018;
    var percentAsia2:number = emissionAsia2018-emissionAsia2008;
    var percentAsia3:number = percentAsia2/emissionAsia2008*100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionAsia2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentAsia.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentAsia3.toFixed(1) +" %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endAsia.toFixed(1) + " CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + percentAsia + "%");

    console.log(a + Asia + b + emissionAsia2018 + c + d + Asia + e + percentAsia + f + g + Asia + h + percentAsia3 + f + i + j + endAsia + c) ;


}

window.addEventListener("load", function(){
    document.querySelector(".asia").addEventListener("click", Asien);
});


/*---------------------------- Australien --------------------------
-------------------------------------------------------------------*/

function Australien(){
    //Prozente Australien
    var percentAus:number = emissionAustralia2018*100/total2018;
    var percentAus2:number = emissionAustralia2018-emissionAustralia2008;
    var percentAus3:number = percentAus2/emissionAustralia2008*100;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector(".emissionabsolute h2").innerHTML = emissionAustralia2018 + "";
    document.querySelector(".emissionabsolute p").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector(".relativetoworlds h2").innerHTML = percentAus.toFixed(1) + " %";
    document.querySelector(".growthrate h2").innerHTML = percentAus3.toFixed(1) + " %";
    document.querySelector(".growthrateabsolute h2").innerHTML = endAustralia.toFixed(1) + " CO2";
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + percentAus + "%");
    
    console.log(a + Australia + b + emissionAustralia2018 + c + d + Australia + e + percentAus + f + g + Australia + h + percentAus3 + f + i + j + endAustralia + c);
}

window.addEventListener("load", function(){
    document.querySelector(".australia").addEventListener("click", Australien);
});



/*------------------------------ von Aufgabe 5 ----------------------------
---------------------------------------------------------------------------*/
// Sätze

var a:string="Die Emmission von ";
var b:string="ist: ";
var c:string=" kg CO2. ";
var d:string="Relativ zur Gesamtemission der Welt verursacht ";
var e:string="damit ";
var f:string="%";
var g:string=". Für ";
var h:string="hat sich 2018 im Vergleich zu 2008 die Emission um ";
var i:string=" verändert. ";
var j:string="2018 im Vergleich zu 2008 sind das ";

var Africa:string="Afrika ";
var SouthAmerica:string="Süd Amerika ";
var Europe:string="Europa ";
var NorthAmerica:string="Nord Amerika ";
var Asia:string="Asien ";
var Australia:string="Australien ";


//Emission Afrika
var emissionAfrica2018:number = 1235.5;
var emissionAfrica2008:number = 1028;
var endAfrica:number = emissionAfrica2018-emissionAfrica2008;

//Emission Süd Amerika
var emissionSouthAmerica2018:number = 1261.5;
var emissionSouthAmerica2008:number = 1132.6;
var endSouthAmerica:number = emissionSouthAmerica2018-emissionSouthAmerica2008;

//Emission Europa
var emissionEuropa2018:number = 4209.3;
var emissionEuropa2008:number = 4965.7;
var endEurope:number = emissionEuropa2018-emissionEuropa2008;

//Emission Nord Amerika
var emissionNorthAmerica2018:number = 6035.6;
var emissionNorthAmerica2008:number = 6600.4;
var endNorthAmerica:number = emissionNorthAmerica2018-emissionNorthAmerica2008;

//Emission Asien
var emissionAsia2018:number = 16274.1;
var emissionAsia2008:number = 12954.7;
var endAsia:number = emissionAsia2018-emissionAsia2008;

//Emission
var emissionAustralia2018:number = 2100.5;
var emissionAustralia2008:number = 1993;
var endAustralia:number = emissionAustralia2018-emissionAustralia2008;

// Emissionen Gesamt
var total2018:number = emissionAfrica2018 + emissionSouthAmerica2018 + emissionEuropa2018 + emissionNorthAmerica2018 + emissionAsia2018 + emissionAustralia2018;
var total2008:number = emissionAfrica2008 + emissionSouthAmerica2008 + emissionEuropa2008 + emissionNorthAmerica2008 + emissionAsia2008 + emissionAustralia2008;