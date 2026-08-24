const $result = document.getElementById("result");
const $progress = document.getElementById("progress");
const $number = document.getElementById("number");
let worker;

function changeRandomBackground() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

let isCalculating

async function sumNumber(n) {
    isCalculating = true;
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    isCalculating = false;
    return result;
}

async function runCalc(e) {
    e.preventDefault();
    const n = parseInt(numberInput.value);

    if (isCalculating) {
        alert("Already calculating");
        return;
    }

    if (isNaN(n) || n <= 0) return;

    // Reset de interface
    isCalculating = true;
    $number.textContent = n;
    $result.textContent = "...";

    // Inicia o Web Worker
    worker = new Worker('worker.js');

    worker.onmessage = function (e) {
        const {type, value} = e.data;

        if (type === 'progress') {
            $progress.textContent = `${value}%`;
        } else if (type === 'result') {
            $result.textContent = value;
            isCalculating = false;
            worker.terminate(); // Encerra o worker após o fim
        }
    };

    worker.postMessage(n);
}

