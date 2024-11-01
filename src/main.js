const playBtn = document.getElementById('playBtn');
const textToPlay = document.querySelector('textarea');
let voiceSelect = document.querySelector('select');

let speech = new SpeechSynthesisUtterance();
let voices = [];

playBtn.addEventListener('click', playText);

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value];
});

function playText(event) {
  speech.text = textToPlay.value;
  window.speechSynthesis.speak(speech);
}
