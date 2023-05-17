const passwordResult = document.querySelector('.password-result')
const lengthInput = document.querySelector('.length')
const rangeInput = document.querySelector('input[type="range"]')
const numbersCheckbox = document.getElementById('numbers')
const lettersCheckbox = document.getElementById('letters')
const symbolsCheckbox = document.getElementById('symbols')
const generateBtn = document.querySelector('.generate-btn')
const resultArea = document.querySelector('.result')

function generatePassword() {
    const length = rangeInput.value
    const includeNumbers = numbersCheckbox.checked
    const includeLetters = lettersCheckbox.checked
    const includeSymbols = symbolsCheckbox.checked

    if (!includeNumbers && !includeLetters && !includeSymbols) {
        return
    }

    let characters = ''
    let password = ''

    if (includeNumbers) {
        characters += '0123456789'
    }

    if (includeLetters) {
        characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if (includeSymbols) {
        characters += '!@#$%^&*()_+=-{}[]<>?/\\|'
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }

    passwordResult.textContent = password
    copiedP.classList.remove('visible-p')

}

rangeInput.addEventListener('input', function () {
    lengthInput.textContent = this.value
})

generateBtn.addEventListener('click', generatePassword)


let copiedP = document.getElementById('copied-p')
resultArea.addEventListener('click', function () {
    const text = passwordResult.innerText || passwordResult.textContent

    const input = document.createElement('input')
    input.setAttribute('value', text)

    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)

    copiedP.classList.add('visible-p')
})