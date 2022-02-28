//https://teachablemachine.withgoogle.com/models/_c9KPirDG/

var predication_1 = " ";
var predication_2 = " ";

Webcam.set({
    height: 300,
    width: 350,
    img_format: "png",
    png_quality: 90
});

var camera = document.getElementById("camera");

Webcam.attach("camera");

console.log(ml5.version);

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = ' <img src=' + data_uri + ' id="result_phot">';

    });

}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data_1 = "the first prediction is " + predication_1;
    var speak_data_2 = "and the second prediction is " + predication_2;
    var utter_this = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utter_this);
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_c9KPirDG/model.json", modelLoaeded)

function modelLoaeded() {
    console.log("Model is loaeded")
}

function check() {
    var img = document.getElementById("result_phot");
    classifier.classify(img, gotResult);

}

function gotResult(error, result) {
    if (error) {
        console.log("error", error);
    } else {
        console.log(result);
        document.getElementById("result_emotion_name_1").innerHTML = result[0].label;
        document.getElementById("result_emotion_name_2").innerHTML = result[1].label;

        predication_1 = result[0].label;
        predication_2 = result[1].label;

        speak();

        if (result[0].label == "best") {
            document.getElementById("result_hand_name_1").innerHTML = "&#128522";
        } else if (result[0].label == "victory") {
            document.getElementById("result_hand_name_1").innerHTML = "&#128546";
        } else if (result[0].label == "amazing") {
            document.getElementById("result_hand_name_1").innerHTML = "&#128545;";
        }

        if (result[1].label == "best") {
            document.getElementById("result_hand_name_2").innerHTML = "&#128522";
        } else if (result[1].label == "victory") {
            document.getElementById("result_hand_name_2").innerHTML = "&#128546";
        } else if (result[1].label == "amazing") {
            document.getElementById("result_hand_name_2").innerHTML = "&#128545;";
        }
    }
}