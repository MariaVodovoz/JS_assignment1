// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let speakButton = document.querySelector('button');
let speakAdjectives = document.querySelector('button.adjectives');
let speakVerbs = document.querySelector('button.verbs');
let speakNouns = document.querySelector('button.nouns');
let speakNouns2 = document.querySelector('button.nouns2');
let speakPlaces = document.querySelector('button.places');
let randomStory = document.querySelector('button.random');
let collectStory = document.querySelector('button.collect');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
    speakButton.onclick = function() {
	speakNow(randomNouns);
	speakNow(randomVerbs);
	speakNow(randomAdjectives);
	speakNow(randomNouns2);
	speakNow(randomPlaces);
}


// set value of noun 
let nouns = ["The cat","The dog", "The cookie", "The postman", "The girl", "The boy"];
let randomNouns = nouns[Math.floor(Math.random()*nouns.length)];
// Speak random noun
speakNouns.addEventListener('click', function(){
	speakNow(randomNouns);
	})

// set value of verb
let verbs = ["sat on","ate", "saw", "like", "danced with", "kissed"];
let randomVerbs= verbs[Math.floor(Math.random()*verbs.length)];
// Speak random noun
speakVerbs.addEventListener('click', function(){
	speakNow(randomVerbs);
	})

// set value of adj 
let adjectives = ["a funny","a scary", "a goofy", "a fat", "a crazy", "a nice"];
let randomAdjectives= adjectives[Math.floor(Math.random()*adjectives.length)];
// Speak random noun
speakAdjectives.addEventListener('click', function(){
	speakNow(randomAdjectives);
	})

// set value of noun2 
let nouns2 = ["monkey","ship", "bug", "cow", "koala", "bat"];
let randomNouns2= nouns2[Math.floor(Math.random()*nouns2.length)];
// Speak random noun
speakNouns2.addEventListener('click', function(){
	speakNow(randomNouns2);
	})

// set value of place
let places = ["on the moon","at school", "on the grass", "in my shoes", "in my soup", "on the chair"];
let randomPlaces= places[Math.floor(Math.random()*places.length)];
// Speak random noun
speakPlaces.addEventListener('click', function(){
	speakNow(randomPlaces);
	})

