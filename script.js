const textElement = document.getElementById('typing-text');
// Updated roles based on resume [cite: 32, 38, 25]
const texts = ['a Doctoral Researcher','Working in','Networks for AI', 'Distributed Training', 'Network Foundation Model', "and Graph Neural Networks"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    textElement.textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause before next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
}

// Start animation on load
document.addEventListener('DOMContentLoaded', type);