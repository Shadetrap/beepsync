var synth = new beepbox.Synth("");
var synth2 = new beepbox.Synth("");
var synth3 = new beepbox.Synth("");
var synth4 = new beepbox.Synth("");
//------------SLIDERS-------------
var volumeVar = document.getElementById("volume");
//var output1 = document.getElementById("volumeOut");
//output1.innerHTML = volumeVar.value;
//volumeVar.oninput = function() {
	//output1.innerHTML = this.value;
	synth.volume = parseInt(volumeVar.value);
	synth2.volume = parseInt(volumeVar.value);
	synth3.volume = parseInt(volumeVar.value);
	synth4.volume = parseInt(volumeVar.value);
};
var tempoVar = document.getElementById("tempo");
var output2 = document.getElementById("tempoOut");
output2.innerHTML = tempoVar.value;
tempoVar.oninput = function() {
	output2.innerHTML = this.value;
	synth.song.tempo = parseInt(tempoVar.value);
	synth2.song.tempo = parseInt(tempoVar.value);
	synth3.song.tempo = parseInt(tempoVar.value);
	synth4.song.tempo = parseInt(tempoVar.value);
};
var reverbVar = document.getElementById("reverb");
var output3 = document.getElementById("reverbOut");
output3.innerHTML = reverbVar.value;
reverbVar.oninput = function() {
	output3.innerHTML = this.value;
	synth.song.reverb = parseInt(reverbVar.value);
	synth2.song.reverb = parseInt(reverbVar.value);
	synth3.song.reverb = parseInt(reverbVar.value);
	synth4.song.reverb = parseInt(reverbVar.value);
	
};
var keyVar = document.getElementById("key");
var output4 = document.getElementById("keyOut");
output4.innerHTML = keyVar.value;
keyVar.oninput = function() {
	output4.innerHTML = this.value;
	synth.song.key = parseInt(keyVar.value);
	synth2.song.key = parseInt(keyVar.value);
	synth3.song.key = parseInt(keyVar.value);
	synth4.song.key = parseInt(keyVar.value);
};
//-------------------------------------------

$(document).ready(function() {
	synth.volume = 2;
	synth2.volume = 2;
	synth3.volume = 2;
	synth4.volume = 2;
	synth.setSong();
	synth2.setSong();
	synth3.setSong();
	synth4.setSong();
	synth.play();
	synth2.play();
	synth3.play();
	synth4.play();
});
function updateSliders() {
	synth.volume = 2;
	synth2.volume = 2;
	synth3.volume = 2;
	synth4.volume = 2;
	output1.innerHTML = synth.volume;
	document.getElementById("volume").value = synth.volume;
	output2.innerHTML = synth.song.tempo;
	document.getElementById("tempo").value = synth.song.tempo;
	output3.innerHTML = synth.song.reverb;
	document.getElementById("reverb").value = synth.song.reverb;
	output4.innerHTML = synth.song.key;
	document.getElementById("key").value = synth.song.key;
}
//-----------LEFT BUTTONS----------
function playSound(button, name) {
	synth.play();
	synth2.play();
	synth3.play();
	synth4.play();
	updateSliders();
}
function pauseSound(button, name) {
	synth.pause();
	synth2.pause();
	synth3.pause();
	synth4.pause();
}
function restartSound(button, name) {
	synth.play();
	synth2.play();
	synth3.play();
	synth4.play();
	synth.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	updateSliders();
}
function stopSound(button, name) {
	synth.pause();
	synth2.pause();
	synth3.pause();
	synth4.pause();
	synth.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
}
function forwardSound(button, name) {
	synth.snapToBar();
  synth2.snapToBar();
  synth3.snapToBar();
  synth4.snapToBar();
	synth.nextBar();
  synth2.nextBar();
  synth3.nextBar();
  synth4.nextBar();
}
function rewindSound(button, name) {
	synth.snapToBar();
  synth2.snapToBar();
  synth3.snapToBar();
  synth4.snapToBar();
	synth.prevBar();
  synth2.prevBar();
  synth3.prevBar();
  synth4.prevBar();
}
//----------BeepBox Link------------
function beepSend() {
	var input = document.getElementById("userInput").value;
	var newstring = input.substring(input.indexOf("#") + 1);
	synth.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	synth.setSong(newstring);
	synth.play();
	updateSliders();
}
function beepSend2() {
	var input2 = document.getElementById("userInput2").value;
	var newstring2 = input2.substring(input2.indexOf("#") + 1);
		synth.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	synth2.setSong(newstring2);
	synth2.play();
	updateSliders();
	synth2.volume = parseInt(volumeVar.value);
	synth2.song.tempo = parseInt(tempoVar.value);
	synth2.song.reverb = parseInt(reverbVar.value);
	synth2.song.key = parseInt(keyVar.value);
}
function beepSend3() {
	var input3 = document.getElementById("userInput3").value;
	var newstring3 = input3.substring(input3.indexOf("#") + 1);
	synth.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	synth3.setSong(newstring3);
	synth3.play();
	updateSliders();
	synth3.volume = parseInt(volumeVar.value);
	synth3.song.tempo = parseInt(tempoVar.value);
	synth3.song.reverb = parseInt(reverbVar.value);
	synth3.song.key = parseInt(keyVar.value);
}
function beepSend4() {
	var input4 = document.getElementById("userInput4").value;
	var newstring4 = input4.substring(input4.indexOf("#") + 1);
	synth.snapToStart();
	synth2.snapToStart();
	synth3.snapToStart();
	synth4.snapToStart();
	synth4.setSong(newstring4);
	synth4.play();
	updateSliders();
	synth4.volume = parseInt(volumeVar.value);
	synth4.song.tempo = parseInt(tempoVar.value);
	synth4.song.reverb = parseInt(reverbVar.value);
	synth4.song.key = parseInt(keyVar.value);
}
