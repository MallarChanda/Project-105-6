
function startclassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Sq1Kku96-/model.json',modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error,results){
console.log("got result");
}