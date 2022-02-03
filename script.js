function editName(id) {
    var element = document.querySelector(id)
    element.innerText = "Jane Do";
}

function removeRequest(id) {
    var element = document.querySelector(id);
    element.remove();
    document.querySelector('#counter').innerText--;
}

function addNumber(id) {
    var element = document.querySelector(id);
    document.querySelector('#count-con').innerText++;
}