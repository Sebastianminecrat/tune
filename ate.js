 var noseX=0;
 var noseY=0;
 function preload(){
 troncu=loadImage("iron.jpg");
}

 function setup(){
 canvas=createCanvas(300,500);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(300,500);
 video.hide();
 poseNet=ml5.poseNet(video,lihou);
 poseNet.on("pose",KYYYYjuyjuyjuy);
}
function lihou(){
console.log("textomalotexxtomaloooooo");
}
function KYYYYjuyjuyjuy(KAAAAYYYYYYYYjoujoujouuu){
if(KAAAAYYYYYYYYjoujoujouuu.length>0){
noseX=KAAAAYYYYYYYYjoujoujouuu[0].pose.nose.x -100;
noseY=KAAAAYYYYYYYYjoujoujouuu[0].pose.nose.y -100;
}
}
 function draw(){
 image(video,0,0,300,500);
 image(troncu,noseX,noseY,200,200);
}