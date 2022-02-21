//https://teachablemachine.withgoogle.com/models/_c9KPirDG/

var predication_1 = " ";
var predication_2 = " ";

Webcam.set({
    height : 300,
    width : 350,
    img_format : "png",
    png_quality : 90 
});

var camera = document.getElementById("camera");

Webcam.attach("camera");

console.log(ml5.version);

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = ' <img src='+data_uri+' id="result_phot">';

        });

}

function speak() {
    var synth =window.speechSynthesis;
    var speak_data_1 = "the first prediction is "+predication_1;
    var speak_data_2 = "and the second prediction is "+predication_2;
    var utter_this = new SpeechSynthesisUtterance (speak_data_1+speak_data_2);
    synth.speak(utter_this);
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_c9KPirDG/model.json",modelLoaeded)

function modelLoaeded(){
    console.log("Model is loaeded")
}