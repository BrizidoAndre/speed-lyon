// Enter your code here
const containerWords = document.querySelector('.container');
const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getBetween(min, max) {
    return Math.random() * (max - min) - min;
}

const count = 1600;
const chars = [];

for (let i = 0; i < count; i++) {
    let char = characters.charAt(getBetween(0, characters.length));
    const charElement = document.createElement('div');
    charElement.innerHTML = char;
    charElement.classList.add('word')
    containerWords.appendChild(charElement);
    chars.push({
        char: char,
        isUp: true,
        z: 0,
    })
}
let charsElements = document.querySelectorAll('.word');

for (let i = charsElements.length - 1; i >= 0; i--) {
    const element = charsElements[i];
    const dimensionsCount = 40;
    const rowIndex = Math.floor(i / dimensionsCount)
    const columnIndex = (i % dimensionsCount);
    const lastIndex = dimensionsCount - 1;
    const dif = Math.abs(rowIndex - lastIndex) + Math.abs(columnIndex - lastIndex);
    const diagonalDif = Math.abs(rowIndex - columnIndex);
    const waveDif = Math.abs((diagonalDif % 12) - 6) * 5;

    element.animate([
        {
            transform: `translateZ(${40 - waveDif}px)`
        },
        {
            transform: `translateZ(-${40 - waveDif}px)`
        },
    ], {
        delay: dif * 250,
        easing: 'ease-in-out',
        direction: 'alternate',
        iterations: Infinity,
        duration: 2000,
    })
}