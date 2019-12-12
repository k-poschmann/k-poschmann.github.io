var mybeat = ["kick.mp3", "kick.mp3", "hihat.mp3", "F.mp3", "F.mp3", "F.mp3", "A.mp3", "F.mp3", "kick.mp3", "kick.mp3", "hihat.mp3", "laugh-1.mp3"];
var record = false;
var period;
// Buttons
window.addEventListener("load", function () {
    document.querySelector("#one").addEventListener("mousedown", function () { playsample("kick.mp3"); });
    document.querySelector("#two").addEventListener("mousedown", function () { playsample("snare.mp3"); });
    document.querySelector("#three").addEventListener("mousedown", function () { playsample("hihat.mp3"); });
    document.querySelector("#four").addEventListener("mousedown", function () { playsample("F.mp3"); });
    document.querySelector("#five").addEventListener("mousedown", function () { playsample("G.mp3"); });
    document.querySelector("#six").addEventListener("mousedown", function () { playsample("A.mp3"); });
    document.querySelector("#seven").addEventListener("mousedown", function () { playsample("C.mp3"); });
    document.querySelector("#eight").addEventListener("mousedown", function () { playsample("laugh-1.mp3"); });
    document.querySelector("#nine").addEventListener("mousedown", function () { playsample("laugh-2.mp3"); });
    document.querySelector("#play").addEventListener("click", playsounds);
    document.querySelector("#delete").addEventListener("click", deletesound);
    document.querySelector("#record").addEventListener("click", recordsound);
});
// Audio Funktion
function playsample(beat) {
    var sound = new Audio("assets/" + beat);
    sound.play();
    if (record == true) {
        mybeat.push(beat);
    }
    console.log("Kick");
}
//Play/Pause
function playsounds() {
    var index = 0;
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-pause");
        period = setInterval(mySound, 300);
        record = false;
    }
    else {
        document.getElementById("play").classList.remove("fa-pause");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(period);
    }
    function mySound() {
        playsample(mybeat[index]);
        index += 1;
        if (index > mybeat.length)
            index = 0;
    }
}
//Delete
function deletesound() {
    mybeat = [];
}
/* array leeren simple un easy =>  A = []; */
//Record
function recordsound() {
    record = true;
}
//# sourceMappingURL=script.js.map