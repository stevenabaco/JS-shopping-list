var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function strikeThrough(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

function inputLength() {
    return input.value.length
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) { createListElement() }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) { createListElement() }
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeThrough);