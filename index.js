const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

recognition.lang = 'en-US'
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const start = document.getElementById('start')
const result = document.querySelector('.result')
let isButtonPressed = false;
let timeout

start.addEventListener('mousedown', (event) => {
    console.log(recognition.start())
    console.log("Ready to receive a color command.");
    isButtonPressed = true
    
})

start.addEventListener('mouseup', () => {
    isButtonPressed = false
    clearTimeout(timeout)

    recognition.onresult = (event) => {
        console.log(event.results[0][0].transcript);
        recognition.stop()
    };
})

