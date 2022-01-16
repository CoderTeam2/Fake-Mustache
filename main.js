x = 0;
y = 0;

function preload(){
    img = loadImage("face.png");
}

function setup(){
    canvas = createCanvas(800,600);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video ,modelLoaded);
    posenet.on("pose", getPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(img,x,y,50,30)
}

function modelLoaded(){
    console.log(ml5.version);
}

function getPoses(results){
    if(results.length > 0){
        x = results[0].pose.nose.x-25;
        y = results[0].pose.nose.y;
    }
}

function selfie(){
    save('Fake-Mustache.png');
}