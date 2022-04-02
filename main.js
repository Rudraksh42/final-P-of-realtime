noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;


function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(970, 230);

    video = createCapture(VIDEO)
    video.size(700, 500)
    video.position(100, 230)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {

    console.log("Pose Net Initialized");
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + " Nose Y = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)

        console.log("Left Wrist X = "+ leftWristX + "Right Wrist X =" +rightWristX)
    }
}

function draw(){

background('#a1a1a1')
fill('rgb(0,255,0)');
strokeWeight(4);
stroke(51);
square(noseX,noseY,difference);
document.getElementById("dimension").innerHTML= "Breadth And Height OF The Square Is:"+difference+"pixels";



}
