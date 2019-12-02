// Button 1
window.addEventListener("load", function (beat) {
    document.querySelector("#one").addEventListener("mousedown", function () { playSample("kick.mp3"); });
});
// Button 2
window.addEventListener("load", function (beat) {
    document.querySelector("#two").addEventListener("mousedown", function () { playSample("snare.mp3"); });
});
// Button 3
window.addEventListener("load", function (beat) {
    document.querySelector("#three").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
});
// Button 4
window.addEventListener("load", function (beat) {
    document.querySelector("#four").addEventListener("mousedown", function () { playSample("F.mp3"); });
});
// Button 5
window.addEventListener("load", function (beat) {
    document.querySelector("#five").addEventListener("mousedown", function () { playSample("G.mp3"); });
});
// Button 6
window.addEventListener("load", function (beat) {
    document.querySelector("#six").addEventListener("mousedown", function () { playSample("A.mp3"); });
});
// Button 7
window.addEventListener("load", function (beat) {
    document.querySelector("#seven").addEventListener("mousedown", function () { playSample("C.mp3"); });
});
// Button 8
window.addEventListener("load", function (beat) {
    document.querySelector("#eight").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
});
// Button 9
window.addEventListener("load", function (beat) {
    document.querySelector("#nine").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
});
// Audio Funktion
function playSample(beat) {
    var sound = new Audio("assets/" + beat);
    sound.play();
}
// Array
window.addEventListener("load", function (beat) {
    document.querySelector(".playbutton").addEventListener("click", playsound);
});
function playsound() {
    var mybeat = ["assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/F.mp3", "assets/F.mp3", "assets/F.mp3", "assets/A.mp3", "assets/F.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/laugh-1.mp3"];
    var index = 0;
    var interval = setInterval(mySound, 300);
    function mySound() {
        var MyMelody = new Audio(mybeat[index]);
        MyMelody.play();
        index += 1;
        if (index > 11)
            index = 0;
        console.log(mybeat[index]);
    }
}
/*var list:string[] = ["peter","paul","joe"]
var index:number = 0;
setInterval(function(){
        console.log( list [index]);
        index++;
}, 1000)*/
//# sourceMappingURL=script.js.map