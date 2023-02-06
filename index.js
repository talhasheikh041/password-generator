const characters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passLength = 8;

const generateBtn = document.querySelector("#generate-btn");
const firstPassEl = document.querySelector("#first-pass");
const secondPassEl = document.querySelector("#second-pass");
const lengthEl = document.querySelector("#length-text");
const incrementBtn = document.querySelector("#increment-btn");
const decrementBtn = document.querySelector("#decrement-btn");
let firstPass = document.querySelector("#first-pass");
let secondPass = document.querySelector("#second-pass");

function randomIndexGenerator() {
    return Math.floor(Math.random() * characters.length)
}

generateBtn.addEventListener("click", () => {
    firstPassEl.textContent = ""
    secondPassEl.textContent = ""
    for (let i = 0; i <= passLength; i++) {
        firstPassEl.textContent += `${characters[randomIndexGenerator()]}`;
        secondPassEl.textContent += `${characters[randomIndexGenerator()]}`;
    }
})

incrementBtn.addEventListener("click", () => {
    if (passLength < 16) {
    passLength += 1;
    lengthEl.textContent = `Length: ${passLength}`
    }
})

decrementBtn.addEventListener("click", () => {
    if (passLength > 8) {
        passLength -= 1;
        lengthEl.textContent = `Length: ${passLength}`
    }
})

async function copyPass(e) {
    if (e.target.id === "first-pass"){
        try {
            await navigator.clipboard.writeText(firstPass.innerHTML);
            alert("Password Copied!!");
        } catch (err) {
            alert("Failed to copy password!! " + err);
        }
    } else {
        try {
            await navigator.clipboard.writeText(secondPass.innerHTML);
            alert("Password Copied!!");
        } catch (err) {
            alert("Failed to copy password!! " + err);
        }
    }
}

firstPass.addEventListener("click", (e) => copyPass(e));
secondPass.addEventListener("click", (e) => copyPass(e));



