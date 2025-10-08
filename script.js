const display = document.getElementById('display');

function press(valor) {
    display.value += valor;

}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value) || '';
    } catch {
        display.value = "Erro";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}