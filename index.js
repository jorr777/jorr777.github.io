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


start.addEventListener('mousedown', handleClick)
start.addEventListener('mouseup', handleClick)
let tmp = false


recognition.onresult = (event) => {
    console.log('event');
    if (event.results[0].isFinal) {
        console.log(event.results[0][0].transcript);
    }
    console.log('mouseUp');
};

function handleClick(e) {
    if (tmp) {
        start.innerHTML = 'Start'
        recognition.stop()
    } else {
        start.innerHTML = 'voise message...'
        recognition.start()
        console.log('mouseDown');
    }
    tmp = !tmp
}

