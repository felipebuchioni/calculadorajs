const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('calcInput')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.calcKey').forEach(function(charKeyBtn) {
  charKeyBtn.addEventListener('click', function() {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clearBtn').addEventListener('click', function() {
  input.value = ''
  input.focus()
})

input.addEventListener('keydown', function(ev) {
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }

  if(ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }

  if(ev.key ===  'Enter') {
    calculate()
  }
})

document.getElementById('equalBtn').addEventListener('click', calculate)

function calculate() {
  resultInput.value = 'ERROR'
  const result = eval(input.value)
  resultInput.value = result
}

document.getElementById('copyBtn').addEventListener('click', function(ev) {
  const button = ev.currentTarget
  if(button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copy'
  }
})

document.getElementById('switchTheme').addEventListener('click', function() {
  if(main.dataset.theme === 'light') {
    root.style.setProperty('--bg-color', 'rgb(49, 49, 49)')
    root.style.setProperty('--border-color', 'white')
    root.style.setProperty('--hover-btn-color', 'white')
    root.style.setProperty('--hover-btn-font-color', 'rgb(49, 49, 49)')
    root.style.setProperty('--font-color', 'white')
    root.style.setProperty('--key-font-color', 'rgb(49, 49, 49)')
    root.style.setProperty('--primary-color', 'rgb(45, 238, 141)')
    root.style.setProperty('--hover-key-color', 'rgb(18, 168, 93)')
    main.dataset.theme = 'dark'
  } else {
    root.style.setProperty('--bg-color', 'white')
    root.style.setProperty('--border-color', 'black')
    root.style.setProperty('--hover-btn-color', 'rgb(49, 49, 49)')
    root.style.setProperty('--hover-btn-font-color', 'white')
    root.style.setProperty('--font-color', 'black')
    root.style.setProperty('--key-font-color', 'white')
    root.style.setProperty('--primary-color', 'rgb(238, 45, 78)')
    root.style.setProperty('--hover-key-color', 'rgb(187, 23, 50)')
    main.dataset.theme = 'light'
  }
})
