difference=0;
rightwristX=0;
leftwristX=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
 canvas=createCanvas(550,550);
 canvas.position(560,150);  
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses); 
}
function draw() {
    background('#ff4f4b');
    document.getElementById("font_size").innerHTML="The size of the sentence will be= "+difference+"px";
    fill('#000000');
    stroke('#000000');
    textSize(difference);
    text('Neha Talathi',20,400);
    }
    function modelLoaded() {
        console.log('poseNet is initialized');
    }
    function gotPoses(results) {
        if (results.length>0) {
            console.log(results);
            leftwristX=results[0].pose.leftWrist.x;
            rightwristx=results[0].pose.rightWrist.x;
            difference=floor(leftwristX-rightwristX);
            console.log("leftwristX= "+leftwristX+" rightwristX= "+rightwristX+" difference= "+difference);
        }
    }