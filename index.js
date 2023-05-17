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


start.addEventListener('mousedown', handleMdown)
start.addEventListener('mouseup', handleMUp)


function handleMUp() {
    start.innerHTML = 'Start'
    recognition.onresult = (event) => {
        console.log(event.results[0][0].transcript);
    };
    recognition.stop()
    console.log('mouseup');

    console.log('mouseup');
}

function handleMdown(e) {
    start.innerHTML = 'voise message...'
    console.log(recognition.start())
    console.log("Ready to receive a color command.");


    console.log('mouseDown');
}

