// DOM variables
var recieveMsgButton = document.querySelector('#recieve-button');
var affirmRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var msgBox = document.querySelector('#msg-box');
var addMsgButton = document.querySelector('#add-msg-button');
var chooseMsgView = document.querySelector('#choose-msg-view');
var addMsgView = document.querySelector('#add-msg-view');
var msgInput = document.querySelector('#msg');
var selectType = document.querySelector('#select');
var buddhaView = document.querySelector('#buddha-view');
var msgView = document.querySelector('#msg-view');
var submitButton = document.querySelector('#submit');
var mainPageButton = document.querySelector('#main-page');

// Event Listeners
recieveMsgButton.addEventListener('click', recieveMsg);
addMsgButton.addEventListener('click', switchToAddMsg);
submitButton.addEventListener('click', addMsg);
mainPageButton.addEventListener('click', switchToMainPage);

// Event Handlers
function recieveMsg() {
    addMsgButton.classList.remove('hidden');
    submitButton.classList.add('hidden');

    if (chooseMsgView.classList.contains('hidden')){
        toggleChooseViews();
        msgView.classList.add('hidden')
    } else {
        displayMsg(getMsg());
        clearRadio();
    }
}

function addMsg() {
    addMsgView.classList.remove('hidden');
    chooseMsgView.classList.add('hidden');

    if (selectType.value === 'default' && msgInput.value){
        alert('Please select a message type!');
    } else if (!msgInput.value){
        alert('Please add a message!');
    } else {
        displayMsg(msgInput.value);
        addMsgData();
        msgInput.value = '';
    }
}

function switchToAddMsg(){
    addHiddenClass([addMsgButton, msgView, chooseMsgView, recieveMsgButton]);

    removeHiddenClass([submitButton, buddhaView, addMsgView, mainPageButton]);

}

function switchToMainPage() {
    addHiddenClass([submitButton, mainPageButton, msgView, addMsgView]);

    removeHiddenClass([addMsgButton, recieveMsgButton, buddhaView, chooseMsgView]);
}

// Functions
function getRandomIndex(type) {
    return Math.floor(Math.random() * type.length);
}

function getMsg() {
    if (affirmRadio.checked) {
       return affirmations[getRandomIndex(affirmations)];
    } else if (mantraRadio.checked){
        return mantras[getRandomIndex(mantras)];
    } else if (!mantraRadio.checked && !affirmRadio.checked){
        return alert('Please Choose a Message Type!');
    }
}

function displayMsg(msg) {
    if (msg){
    msgView.classList.remove('hidden');
    buddhaView.classList.add('hidden');

    msgView.innerHTML = '';

    msgView.innerHTML += `
    <span>${msg}</span>
    `
    }
}


function addMsgData() {
    if (selectType.value === 'affirmation'){
        affirmations.push(msgInput.value);
    } else if (selectType.value === 'mantra'){
        mantras.push(msgInput.value);
    }
}

function clearRadio() {
    mantraRadio.checked = false;
    affirmRadio.checked = false;
}

function addHiddenClass(elements) {
    for (var i=0; i < elements.length; i++){
        elements[i].classList.add('hidden');
    }
}

function removeHiddenClass(elements) {
    for (var i=0; i < elements.length; i++){
        elements[i].classList.remove('hidden');
    }
}