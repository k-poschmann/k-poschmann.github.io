var cardDeck = [
    { suits: "rot", number: "1" },
    { suits: "rot", number: "2" },
    { suits: "rot", number: "3" },
    { suits: "rot", number: "4" },
    { suits: "rot", number: "5" },
    { suits: "rot", number: "6" },
    { suits: "rot", number: "7" },
    { suits: "rot", number: "8" },
    { suits: "gelb", number: "1" },
    { suits: "gelb", number: "2" },
    { suits: "gelb", number: "3" },
    { suits: "gelb", number: "4" },
    { suits: "gelb", number: "5" },
    { suits: "gelb", number: "6" },
    { suits: "gelb", number: "7" },
    { suits: "gelb", number: "8" },
    { suits: "grün", number: "1" },
    { suits: "grün", number: "2" },
    { suits: "grün", number: "3" },
    { suits: "grün", number: "4" },
    { suits: "grün", number: "5" },
    { suits: "grün", number: "6" },
    { suits: "grün", number: "7" },
    { suits: "grün", number: "8" },
    { suits: "blau", number: "1" },
    { suits: "blau", number: "2" },
    { suits: "blau", number: "3" },
    { suits: "blau", number: "4" },
    { suits: "blau", number: "5" },
    { suits: "blau", number: "6" },
    { suits: "blau", number: "7" },
    { suits: "blau", number: "8" }
];
// Arrays
var KS = [];
var AS = [];
var enemy = [];
var gamer = [];
//Variablen
var kartenstapel;
var ablagestapel;
var gegner;
var spieler;
window.addEventListener("load", function () {
    kartenstapel = document.querySelector("#kartenstapel");
    ablagestapel = document.querySelector("#ablagestapel");
    gegner = document.querySelector("#gegner");
    spieler = document.querySelector("#spieler");
    // FKT. werden aufgerufen nachdem der DOM geladen hat
    showDeck();
    shuffle();
    spreadCards();
    createGamerCards();
    createEnemyCards();
});
function shuffle() {
    var decklength = cardDeck.length;
    while (decklength > 0) {
        var index = Math.floor(Math.random() * decklength);
        decklength--;
        var temp = cardDeck[decklength];
        cardDeck[decklength] = cardDeck[index];
        cardDeck[index] = temp;
    }
}
function spreadCards() {
    for (var index = 0; index < 3; index++) {
        enemy.push({
            suits: cardDeck[index].suits,
            number: cardDeck[index].number
        });
        cardDeck.splice(index, 1);
    }
    for (var i = 0; i < 3; i++) {
        gamer.push({
            suits: cardDeck[index].suits,
            number: cardDeck[index].number
        });
        cardDeck.splice(index, 1);
    }
    for (var j = 0; j < 1; j++) {
        AS.unshift({
            suits: cardDeck[index].suits,
            number: cardDeck[index].number
        });
        cardDeck.splice(index, 1);
        console.log(AS);
    }
    storeCards();
}
function showDeck() {
    for (var index = 0; index < 1; index++) {
        var newdiv = document.createElement("div");
        if (cardDeck[index].suits == "rot") {
            newdiv.className = "backcard";
        }
        else if (cardDeck[index].suits == "blau") {
            newdiv.className = "backcard";
        }
        else if (cardDeck[index].suits == "grün") {
            newdiv.className = "backcard";
        }
        else
            (newdiv.className = "backcard");
    }
    document.querySelector("#kartenstapel").appendChild(newdiv);
    console.log(newdiv);
}
function createEnemyCards() {
    for (var index = 0; index < 3; index++) {
        var newdiv = document.createElement("div");
        if (enemy[index].suits == "rot") {
            newdiv.className = "backcard";
        }
        else if (enemy[index].suits == "blau") {
            newdiv.className = "backcard";
        }
        else if (enemy[index].suits == "grün") {
            newdiv.className = "backcard";
        }
        else
            (newdiv.className = "backcard");
        document.querySelector("#gegner").appendChild(newdiv);
        console.log(newdiv);
    }
}
function createGamerCards() {
    var _loop_1 = function (index) {
        newdiv = document.createElement("div");
        if (gamer[index].suits == "rot") {
            newdiv.className = "rot";
        }
        else if (gamer[index].suits == "blau") {
            newdiv.className = "blau";
        }
        else if (gamer[index].suits == "grün") {
            newdiv.className = "grün";
        }
        else
            (newdiv.className = "gelb");
        newdiv.innerHTML = "" + gamer[index].number;
        spieler.appendChild(newdiv);
        newdiv.addEventListener("click", function () {
            GamerPlaysCard(index);
        });
        console.log(newdiv);
    };
    var newdiv;
    for (var index = 0; index < 3; index++) {
        _loop_1(index);
    }
}
function storeCards() {
    console.log(ablagestapel);
    var newdiv = document.createElement("div");
    if (AS[0].suits == "rot") {
        newdiv.className = "rot";
    }
    else if (AS[0].suits == "blau") {
        newdiv.className = "blau";
    }
    else if (AS[0].suits == "grün") {
        newdiv.className = "grün";
    }
    else {
        newdiv.className = "gelb";
    }
    console.log(AS);
    newdiv.innerHTML = "" + AS[0].number;
    document.querySelector("#ablagestapel").appendChild(newdiv);
}
function GamerPlaysCard(index) {
    if (gamer[index].suits == AS[0].suits) {
        AS.unshift({
            suits: gamer[index].suits,
            number: gamer[index].number
        });
        gamer.splice(index, 1);
        storeCards();
    }
    else if (gamer[index].number == AS[0].number) {
        AS.unshift({
            suits: gamer[index].suits,
            number: gamer[index].number
        });
        gamer.splice(index, 1);
        storeCards();
    }
}
//# sourceMappingURL=script.js.map