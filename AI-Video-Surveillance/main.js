video = ""
function preload(){
video = createVideo('video.mp4')
video.hide()
}

function setup(){
canvas = createCanvas(300, 300)
canvas.center()
}

function draw(){
    image(video, 0, 0, 300, 300)
}

function start(){
    objectdetector = ml5.objectdetector('cocossd', modelLoaded)
    document.getElementById("STAPLES").innerHTML = "Status: Detecting Objects"
}

function modelLoaded(){
    console.log("modelLoaded")
    statuss = true
    video.loop()
    video.volume(0)
    video.speed(1)
}