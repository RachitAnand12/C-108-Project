function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PKenTP4A9/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        rgbRed = Math.floor(Math.random()*255) + 1;
        rgbGreen = Math.floor(Math.random()*255) + 1;
        rgbBlue = Math.floor(Math.random()*255) + 1;
        document.getElementById("result_label").style.color = "rgb(" + rgbRed + "," + rgbGreen + "," + rgbBlue + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + rgbRed + "," + rgbGreen + "," + rgbBlue + ")";
        document.getElementById("result_label").innerHTML = "I can hear -  " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy :  " + (results[0].confidence * 100).toFixed(2) + " %";

        img1 = document.getElementById("dog");
        img2 = document.getElementById("cat");
        img3 = document.getElementById("lion");
        img4 = document.getElementById("background-noise");
        img5 = document.getElementById("cow");
     if (results[0].label == "Barking") {
         img1.src = "dog.gif";
         img2.src = "cat.jpeg";
         img3.src = "lion.jpeg";
         img4.src = "background noise.png";
         img5.src = "cow.jpeg"
     }    
     else if (results[0].label == "Meowing"){
        img1.src = "dog.png";
         img2.src = "cat.gif";
         img3.src = "lion.jpeg";
         img4.src = "background noise.png";
         img5.src = "cow.jpeg"
     }
     else if (results[0].label == "Roaring"){
        img1.src = "dog.png";
         img2.src = "cat.jpeg";
         img3.src = "lion.gif";
         img4.src = "background noise.png";
         img5.src = "cow.jpeg"
     }
     else{
        img1.src = "dog.png";
         img2.src = "cat.jpeg";
         img3.src = "lion.jpeg";
         img4.src = "background noise.gif";
         img5.src = "cow.jpeg"
         img5.src = "cow.gif"
     }
        
    }
}
