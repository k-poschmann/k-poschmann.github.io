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

/**
 * leere Arrays werden erstellt, in denen dann die Karten
 * hin und her geschoben werden
 */

var KS: Deck[] = [];
var AS: Deck[] = [];
var enemy: Deck[] = [];
var gamer: Deck[] = [];

//Variablen werden zunächst deklariert und typisiert
var kartenstapel: HTMLElement;
var ablagestapel: HTMLElement;
var gegner: HTMLElement;
var spieler: HTMLElement;
var played: boolean = false;


/**
 * mit dem EventListener 'load' ladet der DOM zeitgleich
 * und nun können die bereits deklarierten Variablen 
 * Elemente aus dem DOM ansprechen.
 */

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
/**
 * Die Shuffle Funktion dient zum Mischen der Karten. Mit Hilfe
 * der While Schleife wird jede Karte im Deck zufällig ge-
 * mischt.
 */
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

/**
 * Die Verteieler Funktion verteilt jeweils drei Karten
 * an den Gegner, drei Karten an den Spieler und 1 Karte
 * an den Ablagestapel
 */

function spreadCards(): void {
    //Gegner
    for (var index: number = 0; index < 3; index++) {
        enemy.push({
            suits: cardDeck[index].suits,
            number: cardDeck[index].number
        });
        cardDeck.splice(index, 1);
    }
    //Spieler
    for (var i: number = 0; i < 3; i++) {
        gamer.push({
            suits: cardDeck[index].suits,
            number: cardDeck[index].number
        });
        cardDeck.splice(index, 1);
    }
    //Ablagestapel
    for (var j: number = 0; j < 1; j++) {
        AS.unshift({
            suits: cardDeck[index].suits,
            number: cardDeck[index].number
        });
        cardDeck.splice(index, 1);
    }
    storeCards();
}

/**
 * Die Funktion ShowDeck generiert nun das Kartendeck,
 * durch die For Schleife wird immer wieder hochgezählt
 * bis das Objekt leer ist. Es wird immer nur eine Kate
 * angezeigt.
 */

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
        // Jede Karte bekommt ein 'Klick' Event, welches die Funktion
        // GamerDrawCard() aufruft
        newdiv.addEventListener("click", function (): void {
            GamerDrawCard();
        });
    }
    // Die Karte wird dann ins DIV Kartenstapel angehangen
    kartenstapel.appendChild(newdiv);
}



/**
 * Genau das Gleiche wie bei ShowDeck werden hier zufällige Karten
 * für den Gegner generiert, die durch eine For Schleife laufen.
 */
function createEnemyCards(): void {
    for (var index: number = 0; index < enemy.length; index++) {
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
        // Auch hier werden die Karten dann ins DIV Gegner angehangen
        gegner.appendChild(newdiv);
    }
}

/**
 * Genau das Gleiche wie bei ShowDeck und createEnemyCards() werden 
 * hier zufällige Karten für den Gegner generiert, die durch eine For 
 * Schleife laufen.
 */
function createGamerCards(): void {
    for (let index: number = 0; index < gamer.length; index++) {
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
        else {
            newdiv.className = "gelb";
        }
        // Und auch diese werden dem DIV Spieler angehangen
        newdiv.innerHTML = "" + gamer[index].number;
        spieler.appendChild(newdiv);
        // Hier wird die Funktion GamerPlaysCard aufgerufen, mit einem mitgelieferten Wert
        newdiv.addEventListener("click", function (): void {
            GamerPlaysCard(index);
        });
    }
}

/**
 * Wie bei ShowDeck, createEnemyCards und createGamerCards
 * werden hier eine Karte für den Ablagestapel generiet, die 
 * durch eine if else if else Bedingung zufällig ist.
 */

function storeCards(): void {

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
    // Auch diese wird dem DIV Ablagestapel angehangen
    newdiv.innerHTML = "" + AS[0].number;
    ablagestapel.appendChild(newdiv);

}


/*Spielmechaniken*/

/**
 * Die Funktion removeCardAS entfernt die alle Karten vom DIV
 * Ablagestapel, wenn eine Karte vom Gegner / Spieler übereinstimmt
 * mit der aktuellen Karte des DIVS
 */

function removeCardAS(): void {

    while (ablagestapel.firstChild) {
        ablagestapel.removeChild(ablagestapel.firstChild);
    }
}

/**
 * Die Funktion removeCardH entfernt alle Karten vom DIV
 * Spieler, nachdem diese angeklickt wurde.
 */

function removeCardH(): void {
    while (spieler.firstChild) {
        spieler.removeChild(spieler.firstChild);
    }
}

/**
 * Nun kommt die eigentliche Spielfunktion des Spielers.
 * Zuerst wird geprüft, ob die Karte dieselbe Farbe hat wie
 * die Karte auf dem Ablagestapel.
 */

function GamerPlaysCard(index): void {
    if (gamer[index].suits == AS[0].suits) {
        AS.unshift({
            suits: gamer[index].suits,
            number: gamer[index].number
        });
        // Falls das der Fall ist, wird nach dem Klick die Karte ins Ablagearray geschoben und aus dem Spieler Array gelöscht
        gamer.splice(index, 1);
        //Dann werden die Karten vom Ablagestapel und des Spielers gelöscht
        removeCardAS();
        removeCardH();
        // und wieder neu generiert. Also aktualisiert.
        createGamerCards();
        storeCards();
        // Mit der Abfrage wird überprüft ob der Gegner spielen kann
        played = false;

        /* Falls ja, dann kann der Computer spielen*/
        EnemyPlaysCard();
        if (played == false) {
            EnemyDrawCard();
        }
        /**
         * Das gleiche Prinzip wird nun mit der Abfrage nach der Nummer gemacht
         */
    } else if (gamer[index].number == AS[0].number) {
        AS.unshift({
            suits: gamer[index].suits,
            number: gamer[index].number
        });
        gamer.splice(index, 1);
        removeCardAS();
        removeCardH();
        createGamerCards();
        storeCards();
        // Überprüft ob der Gegner spielen kann
        played = false;
        checkend();
        /*Computer spielt*/
        EnemyPlaysCard();
        if (played == false) {
            EnemyDrawCard();
        }
    }
}

/**
 * Falls der Spieler nicht legen kann, muss er eine Karte ziehen.
 * Dabei wird eine Karte vom Kartendeck ins Spieler Array ver-
 * schoben.
 */
function GamerDrawCard(): void {
    gamer.unshift({
        suits: cardDeck[0].suits,
        number: cardDeck[0].number
    });
    // Auch hier wird die gezogene Karte aus dem Kartendeck gelöscht und ins Spieler Array verschoben
    cardDeck.splice(0, 1);
    /**
     * Die KArten vom Spieler werden wieder gelöscht und aktualisiert
     */
    removeCardH();
    createGamerCards();
    played = false;

    /*Computer spielt, wenn Spieler eine Karte gezogen hat*/
    EnemyPlaysCard();
    if (played == false) {
        EnemyDrawCard();
    }
}

/*
    ------------------ COMPUTER --------------------
*/

/**
 * Wenn der Computer seine Karte gelegt hat, wird alle Karten aus dem
 * Array entfernt.
 */
function removeCardEnemy(): void {
    while (gegner.firstChild) {
        gegner.removeChild(gegner.firstChild);
    }
}

/**
 * Wie beim Spieler, fragt der Computer nach der Farbe. Diese wird dann
 * auf den Ablagestapel verschoben und aus dem Enemy Array gelöscht.
 */
function EnemyPlaysCard(): void {
    for (var i: number = 0; i < enemy.length; i++) {
        if (enemy[i].suits == AS[0].suits) {

            AS.unshift({
                suits: enemy[i].suits,
                number: enemy[i].number
            });
            enemy.splice(i, 1);
            /**
             * Falls es wahr ist, dass der Computer eine passende KArte
             * gefunden hat, dann soll er diese legen und dann die for
             * Schleife abbrechen, sodass er nicht zwei oder drei Karten legt.
             */
            played = true;
            break;
            // Das gleiche passiert mit der Abfrage nach der Nummer
        } else if (enemy[i].number == AS[0].number) {
            AS.unshift({
                suits: enemy[i].suits,
                number: enemy[i].number
            });
            enemy.splice(i, 1);

            played = true;
            break;
        }
    }
    //Es werden die Karten des Gegners und des Ablagestapels gelöscht
    removeCardEnemy();
    removeCardAS();
    // Und dann aktualiesiert
    storeCards();
    createEnemyCards();
    checkend();
}

/**
 * Wenn Computer keine Karte legen kann, zieht es
 * eine Karte aus dem Kartendeck und es wird in das
 * Gegner Array verschoben. Aus dem Kartendeck wird die gezogene
 * Karte entfernt.
 */

function EnemyDrawCard(): void {
    enemy.unshift({
        suits: cardDeck[0].suits,
        number: cardDeck[0].number
    });
    cardDeck.splice(0, 1);
    // Karten des Gegners werden gelöscht
    removeCardEnemy();
    // Gegner Karten werden aktualisiert
    createEnemyCards();
}

/**
 * Wenn Spieler / Gegner gewonnen hat, also wenn die Arrays leer sind,
 * dann wird eine Mitteilung in Alert Form ausgegeben.
 */

function checkend(): void {
    if (enemy.length == 0) {
        alert("Der Computer hat gewonnen. Refreshe die Seite, um zu gewinnen!");
    }
    if (gamer.length == 0) {
        alert("Du hast gewonnen, Refreshe die Seite und spiele erneut um dem Computer eine weitere Niederlage zu bescheren!");
    }
}

// Für ein neues Spiel muss die Seite neu geladen werden