interface Deck {
    suits: string;
    number: string;
}

var cardDeck: Deck[] = [
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
var KS: Deck[] = [];
var AS: Deck[] = [];
var enemy: Deck[] = [];
var gamer: Deck[] = [];

//Variablen
var kartenstapel: HTMLElement;
var ablagestapel: HTMLElement;
var gegner: HTMLElement;
var spieler: HTMLElement;

window.addEventListener("load", function (): void {
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


function shuffle(): void {
    var decklength: number = cardDeck.length;
    while (decklength > 0) {
        var index: number = Math.floor(Math.random() * decklength);
        decklength--;
        let temp: Deck = cardDeck[decklength];
        cardDeck[decklength] = cardDeck[index];
        cardDeck[index] = temp;
    }
}

function spreadCards(): void {
    for (var index: number = 0; index < 3; index++) {
        enemy.push({
            suits: cardDeck[index].suits,
            number: cardDeck[index].number
        });
        cardDeck.splice(index, 1);
    }

    for (var i: number = 0; i < 3; i++) {
        gamer.push({
            suits: cardDeck[index].suits,
            number: cardDeck[index].number
        });
        cardDeck.splice(index, 1);
    }

    for (var j: number = 0; j < 1; j++) {
        AS.unshift({
            suits: cardDeck[index].suits,
            number: cardDeck[index].number
        });
        cardDeck.splice(index, 1);
        console.log(AS);
    }
    storeCards();
}

function showDeck(): void {
    for (let index: number = 0; index < 1; index++) {
        var newdiv: HTMLDivElement = document.createElement("div");
        if (cardDeck[index].suits == "rot") {
            newdiv.className = "backcard";
        }
        else if (cardDeck[index].suits == "blau") {
            newdiv.className = "backcard";
        }
        else if (cardDeck[index].suits == "grün") {
            newdiv.className = "backcard";
        }
        else (newdiv.className = "backcard");
    }
    document.querySelector("#kartenstapel").appendChild(newdiv);
    console.log(newdiv);
}

function createEnemyCards(): void {
    for (var index: number = 0; index < 3; index++) {
        var newdiv: HTMLDivElement = document.createElement("div");
        if (enemy[index].suits == "rot") {
            newdiv.className = "backcard";
        }
        else if (enemy[index].suits == "blau") {
            newdiv.className = "backcard";
        }
        else if (enemy[index].suits == "grün") {
            newdiv.className = "backcard";
        }
        else (newdiv.className = "backcard");

        document.querySelector("#gegner").appendChild(newdiv);
        console.log(newdiv);
    }
}


function createGamerCards(): void {
    for (let index: number = 0; index < 3; index++) {
        var newdiv: HTMLDivElement = document.createElement("div");
        if (gamer[index].suits == "rot") {
            newdiv.className = "rot";
        }
        else if (gamer[index].suits == "blau") {
            newdiv.className = "blau";
        }
        else if (gamer[index].suits == "grün") {
            newdiv.className = "grün";
        }
        else (newdiv.className = "gelb");

        newdiv.innerHTML = "" + gamer[index].number;
        spieler.appendChild(newdiv);

        newdiv.addEventListener("click", function(): void {
            GamerPlaysCard(index);
        });
        console.log(newdiv);
    }
}


function storeCards(): void {
    console.log(ablagestapel);

    var newdiv: HTMLDivElement = document.createElement("div");
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

function GamerPlaysCard(index): void {
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