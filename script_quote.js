// let quote = document.getElementById("quote");
// let author = document.getElementById("author");
// let toggle = document.getElementById("toggle");

// const url = "https://api.quotable.io/random";

// let getQuote = () => {
//   fetch(url)
//     .then(data => data.json())
//     .then((item) => {
//       quote.innerText = item.content;
//       author.innerText = item.author;
//     });
// };

// toggle.addEventListener("click", getQuote);


let quote = document.getElementById("quote");
let author = document.getElementById("author");
let toggle = document.getElementById("toggle");

let getQuote = () => {

fetch("https://type.fit/api/quotes")
  .then(data => data.json())
  .then((item) => {
	const randomIndex = Math.floor(item.length * Math.random())
	quote.innerText = item[randomIndex].text;
	author.innerText = item[randomIndex].author;

	let toSpeak = new SpeechSynthesisUtterance(item[randomIndex].text);
	const selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
	voices.forEach((voice)=>{
		if(voice.name === selectedVoiceName){
			toSpeak.voice = voice;
		}
	});
	synth.speak(toSpeak);
  });
}

toggle.addEventListener("click", getQuote);


// Talk from Text
	var txtInput = document.querySelector('#txtInput');
	var voiceList = document.querySelector('#voiceList');
	var btnSpeak = document.querySelector('#btnSpeak');
	var synth = window.speechSynthesis;
	var voices = [];


	PopulateVoices();
	if(speechSynthesis !== undefined){
		speechSynthesis.onvoiceschanged = PopulateVoices;
	}

	// btnSpeak.addEventListener('click', ()=> {
	// 	var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
	// 	var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
	// 	voices.forEach((voice)=>{
	// 		if(voice.name === selectedVoiceName){
	// 			toSpeak.voice = voice;
	// 		}
	// 	});
	// 	synth.speak(toSpeak);
	// });

	// Gets voices to choose from
	function PopulateVoices(){
		voices = synth.getVoices();
		var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
		voiceList.innerHTML = '';
		voices.forEach((voice)=>{
			var listItem = document.createElement('option');
			listItem.textContent = voice.name;
			listItem.setAttribute('data-lang', voice.lang);
			listItem.setAttribute('data-name', voice.name);
			voiceList.appendChild(listItem);
		});

		voiceList.selectedIndex = selectedIndex;
	}




// https://www.youtube.com/watch?v=VAkquAxQUPc

// https://www.youtube.com/watch?v=bD8mmPxQ1F8
