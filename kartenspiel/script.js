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
/**
 * leere Arrays werden erstellt, in denen dann die Karten
 * hin und her geschoben werden
 */
var KS = [];
var AS = [];
var enemy = [];
var gamer = [];
//Variablen werden zunächst deklariert und typisiert
var kartenstapel;
var ablagestapel;
var gegner;
var spieler;
var played = false;
/**
 * mit dem EventListener 'load' ladet der DOM zeitgleich
 * und nun können die bereits deklarierten Variablen
 * Elemente aus dem DOM ansprechen.
 */
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
/**
 * Die Shuffle Funktion dient zum Mischen der Karten. Mit Hilfe
 * der While Schleife wird jede Karte im Deck zufällig ge-
 * mischt.
 */
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
        newdiv.addEventListener("click", function () {
            GamerDrawCard();
        });
    }
    document.querySelector("#kartenstapel").appendChild(newdiv);
}
function createEnemyCards() {
    for (var index = 0; index < enemy.length; index++) {
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
        else {
            newdiv.className = "gelb";
        }
        newdiv.innerHTML = "" + gamer[index].number;
        spieler.appendChild(newdiv);
        newdiv.addEventListener("click", function () {
            GamerPlaysCard(index);
        });
    };
    var newdiv;
    for (var index = 0; index < gamer.length; index++) {
        _loop_1(index);
    }
}
function storeCards() {
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
    newdiv.innerHTML = "" + AS[0].number;
    ablagestapel.appendChild(newdiv);
}
/*Spielmechaniken*/
function removeCardAS() {
    while (ablagestapel.firstChild) {
        ablagestapel.removeChild(ablagestapel.firstChild);
    }
}
function removeCardH() {
    while (spieler.firstChild) {
        spieler.removeChild(spieler.firstChild);
    }
}
function GamerPlaysCard(index) {
    if (gamer[index].suits == AS[0].suits) {
        AS.unshift({
            suits: gamer[index].suits,
            number: gamer[index].number
        });
        gamer.splice(index, 1);
        removeCardAS();
        removeCardH();
        createGamerCards();
        storeCards();
        played = false;
        /*Computer spielt*/
        EnemyPlaysCard();
        if (played == false) {
            EnemyDrawCard();
        }
    }
    else if (gamer[index].number == AS[0].number) {
        AS.unshift({
            suits: gamer[index].suits,
            number: gamer[index].number
        });
        gamer.splice(index, 1);
        removeCardAS();
        removeCardH();
        createGamerCards();
        storeCards();
        played = false;
        checkend();
        /*Computer spielt*/
        EnemyPlaysCard();
        if (played == false) {
            EnemyDrawCard();
        }
    }
}
function GamerDrawCard() {
    gamer.unshift({
        suits: cardDeck[0].suits,
        number: cardDeck[0].number
    });
    cardDeck.splice(0, 1);
    removeCardH();
    createGamerCards();
    storeCards();
    played = false;
    /*Computer spielt*/
    EnemyPlaysCard();
    if (played == false) {
        EnemyDrawCard();
    }
}
/*
    COMPUTER
*/
function removeCardEnemy() {
    while (gegner.firstChild) {
        gegner.removeChild(gegner.firstChild);
    }
}
function EnemyPlaysCard() {
    for (var i = 0; i < enemy.length; i++) {
        if (enemy[i].suits == AS[0].suits) {
            AS.unshift({
                suits: enemy[i].suits,
                number: enemy[i].number
            });
            enemy.splice(i, 1);
            played = true;
            break;
        }
        else if (enemy[i].number == AS[0].number) {
            AS.unshift({
                suits: enemy[i].suits,
                number: enemy[i].number
            });
            enemy.splice(i, 1);
            played = true;
            break;
        }
    }
    removeCardEnemy();
    removeCardAS();
    storeCards();
    createEnemyCards();
    checkend();
}
function EnemyDrawCard() {
    enemy.unshift({
        suits: cardDeck[0].suits,
        number: cardDeck[0].number
    });
    cardDeck.splice(0, 1);
    removeCardEnemy();
    createEnemyCards();
}
function checkend() {
    if (enemy.length == 0) {
        alert("Der Computer hat gewonnen. Spiele erneut um zu gewinnen!");
    }
    if (gamer.length == 0) {
        alert("Du hast gewonnen, spiele erneut um dem Computer eine weitere Niederlage zu bescheren!");
    }
}
//# sourceMappingURL=script.js.map