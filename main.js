// DOM variables
let recieveMsgButton = document.querySelector('#recieve-button');
let affirmRadio = document.querySelector('#affirmation');
let mantraRadio = document.querySelector('#mantra');
let msgBox = document.querySelector('#msg-box')
let addMsgButton = document.querySelector('#add-msg-button')
let chooseMsgView = document.querySelector('#choose-msg-view')
let addMsgView = document.querySelector('#add-msg-view')
let msgInput = document.querySelector('#msg')
let selectType = document.querySelector('#select')
let buddhaView = document.querySelector('#buddha-view')
let msgView = document.querySelector('#msg-view')

// Event Listeners
recieveMsgButton.addEventListener('click', recieveMsg);
addMsgButton.addEventListener('click', addMsg)

// Functions
function getRandomIndex(type) {
    return Math.floor(Math.random() * type.length);
}

function recieveMsg() {
    if (chooseMsgView.classList.contains('hidden')){
        toggleChooseViews();
        msgView.classList.add('hidden')
    } else {
        displayMsg(getMsg());
        clearRadio();
    }
}

function getMsg() {
    if (affirmRadio.checked) {
       let affirm = affirmations[getRandomIndex(affirmations)]
       return affirm;
    } else if (mantraRadio.checked){
        let mantra = mantras[getRandomIndex(mantras)]
        return mantra;
    } else if (!mantraRadio.checked && !affirmRadio.checked){
        //hide message view, unhide buddha
        return alert('Please Choose a Message Type!')
    }
}

function displayMsg(msg) {
    if (msg){
    msgView.classList.remove('hidden')
    buddhaView.classList.add('hidden')
    msgView.innerHTML = ''
    msgView.innerHTML += `
    <h3>${msg}</h3>
    `
    }
}

function addMsg() {
    msgView.classList.add('hidden');
    buddhaView.classList.remove('hidden');

    if (!msgInput.value && addMsgView.classList.contains('hidden')){
        toggleChooseViews();
    } else if (selectType.value === 'default' && msgInput.value){
        alert('Please select a message type!')
    } else if (!msgInput.value){
        alert('Please add a message!')
    } else {
        displayMsg(msgInput.value);
        addMsgData()
        msgInput.value = ''
    }
}

function addMsgData() {
    if (selectType.value === 'affirmation'){
        affirmations.push(msgInput.value)
    } else if (selectType.value === 'mantra'){
        mantras.push(msgInput.value)
    }
}

function toggleChooseViews() {
    chooseMsgView.classList.toggle('hidden')
    addMsgView.classList.toggle('hidden')
}

function clearRadio() {
    mantraRadio.checked = false;
    affirmRadio.checked = false;
}