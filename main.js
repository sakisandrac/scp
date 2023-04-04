// DOM variables
let button = document.querySelector('button');
let affirmRadio = document.querySelector('#affirmation');
let mantraRadio = document.querySelector('#mantra');
let msgBox = document.querySelector('#msg-box')

// Event Listeners
button.addEventListener('click', displayMsg);

// Functions
function getRandomIndex(type) {
    return Math.floor(Math.random() * type.length);
}

function getMsg() {
    if (affirmRadio.checked) {
       let affirm = affirmations[getRandomIndex(affirmations)]
       return affirm;
    } else if (mantraRadio.checked){
        let mantra = mantras[getRandomIndex(mantras)]
        return mantra;
    }
}

function displayMsg() {
    let msg = getMsg();
    msgBox.innerHTML = ''
    msgBox.innerHTML += `
    <h3>${msg}</h3>
    `
}