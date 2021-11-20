Webcam.set({
    width: 349,
    height: 301,
    image_format: 'png',
    png_quality: 90
 });
 camera=document.getElementById("camera");
 Webcam.attach( '#camera' );
 function takeshot(){
 Webcam.snap(function(data_uri) {
document.getElementById('result').innerHTML =
'<img id="capture_img" src="'+data_uri+'"/>';
});

console.log("ml5",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/foapAUqGO/model.json',modelLoaded);
function modelLoaded()
 { console.log('Model Loaded!'); }

function check()
 { img = document.getElementById('capture_img');
  classifier.classify(img, gotResult); }
  function gotResult(error, results)

   { if (error) { console.error(error);
 } else { console.log(results);
document.getElementById("resultname").innerHTML = results[0].label;
document.getElementById("Accuracyresult").innerHTML = results[0].confidence.toFixed(4); } }
