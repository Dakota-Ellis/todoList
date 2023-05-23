
const txt1 = document.getElementById('add');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function addingToList() {
    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click', addingToList);