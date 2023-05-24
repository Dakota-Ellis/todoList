const btn1 = document.getElementById('btn1')
//initalizing the empty array
let shoppingList = []

//function that will push the input value to the empty array
function addingToList() {
    var inputElement = document.getElementById('add');
    var inputValue = inputElement.value;
    //if the input value true, it will push the input value to the empty array... involking the function 'renderList'
    if (inputValue) {
        shoppingList.push(inputValue);
        renderList();
    }
}
//This function grabs the ID of the location of where the array will be in the HTML  
function renderList() {
    let myListElement = document.getElementById('output1');
    myListElement.innerHTML = "";
    //for loop to grap the individual element within the array instead of outputting the whole array inside the list.
    for (let i = 0; i < shoppingList.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = shoppingList[i];
        myListElement.appendChild(listItem);
    }
}
    
btn1.addEventListener('click', addingToList);
