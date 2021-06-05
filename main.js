var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
var Content=event.results[0][0].transcript;
console.log(Content);

document.getElementById("textbox").innerHTML=Content;
if(Content=="take my selfie"){
    console.log("taking selfie");
    speak();
}
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utterThis =new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    webcam.attach(camera);
}
camera=document.getElementById("camera");
webcam.set({
    width:400,
    height:300,
    image_format:'jpg',
    jpg_quality:90
});
