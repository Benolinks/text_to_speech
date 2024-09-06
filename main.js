var text = document.getElementById("text");
var speak = document.getElementById("speak");

speak.addEventListener("click", () => {
  var texts = text.value;

  var talk = new SpeechSynthesisUtterance(texts);
  // talk.pitch = 1.5;
  talk.volume = 1;
  talk.rate = 0.9;
  talk.lang = "en-US";

  // alert(texts)

  window.speechSynthesis.speak(talk);
});
