window.onload = () => {
    //   console.log('window finished loading')
}

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const numberDisplay = document.getElementById('numberDisplay');
const boomMessage = document.getElementById('boomMessage');
const stepInput = document.getElementById('stepValue');
const limitInput = document.getElementById('limitValue');
const saveButton = document.getElementById('saveSettings');

let count = 0;
let step = parseInt(localStorage.getItem('step') || 5);
let limit = parseInt(localStorage.getItem('limit') || 35);

const updateDisplay = () => {
    numberDisplay.textContent = count;
    boomMessage.style.display = (count > limit || count < -limit) ? 'block' : 'none';
    stepInput.value = step;
    limitInput.value = limit;
};

const saveSettings = () => {
    step = parseInt(stepInput.value);
    limit = parseInt(limitInput.value);
    localStorage.setItem('step', step);
    localStorage.setItem('limit', limit);
};

incrementButton.addEventListener('click', () => {
    count += step;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    count -= step;
    updateDisplay();
});

saveButton.addEventListener('click', () => {
    saveSettings();
    updateDisplay();
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('count', count);
});

updateDisplay();

