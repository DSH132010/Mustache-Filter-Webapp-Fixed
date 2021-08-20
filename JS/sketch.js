mustacheX = 0;
mustacheY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/TPCv9WDC/mustache.png');
}

function setup() {
    canvas = createCanvas(600, 500);
    // canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.hide();
    poseNet = ml5.poseNet(video, posenetLoaded);
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
    poseNet.on('pose', gotPoses);

    function modelLoaded() {
        console.log('model Loaded !!')
    }
}

function posenetLoaded() {
    console.log('PoseNet Is Initialized')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        // console.log("nose X = " + results[0].pose.nose.x);
        // console.log("nose Y = " + results[0].pose.nose.y);
        mustacheX = results[0].pose.nose.x - 40;
        mustacheY = results[0].pose.nose.y + 10;
    }
    
}


function draw() {
    image(video, 0, 0, 600, 500);
    image(mustache, mustacheX, mustacheY, 80, 30);
}

function take_snapshot() {
    save('Snaped Filter Picture.png');
}
