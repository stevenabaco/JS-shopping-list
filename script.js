const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByTagName("i");
const clearButton = document.getElementById("clear");

function strikeThrough(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

function deleteNodeOnClick(event) {
    var trash = document.querySelectorAll("i");
    for (var i = 0; i < trash.length; i++) {
        this.parentNode.parentNode.remove();
    }
}

function deleteParentNodeOnClick() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}

function inputLength() {
    return input.value.length
}

function createListElement() {
    let divClassWrapper = document.createElement("div");
    divClassWrapper.classList.add("li-wrapper");

    let li = document.createElement("li");
    let addDiv = document.createElement("div");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(divClassWrapper);
    divClassWrapper.appendChild(li);
    divClassWrapper.appendChild(addDiv);
    input.value = "";
    addDiv.classList.add("div");
    var addDeleteButton = document.createElement("i");
    addDeleteButton.classList.add("fas", "fa-trash-alt");
    addDiv.appendChild(addDeleteButton);
    deleteParentNodeOnClick();

}

function addListAfterClick() {
    if (inputLength() > 0) { createListElement() }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) { createListElement() }
}

function clearList() {
    ul.innerHTML = "";
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", strikeThrough);
clearButton.addEventListener("click", clearList);
deleteParentNodeOnClick();