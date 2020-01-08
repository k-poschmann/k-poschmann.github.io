window.addEventListener("load", function () {
    document.querySelector(".addBtn").addEventListener("click", newElement);
    document.querySelector("#circle").addEventListener("click", checkedTask);
    document.querySelector("#trash").addEventListener("click", deleteTask);
});
var counter = 2;
function checkedTask() {
    if (document.getElementById("circle").classList.contains("fa-circle")) {
        document.getElementById("circle").classList.remove("fa-circle");
        document.getElementById("circle").classList.add("fa-check-circle");
    }
    else {
        document.getElementById("circle").classList.remove("fa-check-circle");
        document.getElementById("circle").classList.add("fa-circle");
    }
}
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("You must write something!");
    }
    else {
        document.getElementById("myUL").appendChild(li);
        li.innerHTML = "<li><i class='far fa-circle' id='circle'></i>" + inputValue + "<i class='far fa-trash-alt' id='trash'></i></li>";
        counter++;
        document.querySelector(".counter").innerHTML = counter + " in Total";
    }
    document.getElementById("myInput").value = "";
}
function deleteTask() {
}
//# sourceMappingURL=script.js.map