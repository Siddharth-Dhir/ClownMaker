function preload(){
nose= loadImage("https://i.postimg.cc/WbsvNPZV/download-removebg-preview.png");
nose1=loadImage("https://i.postimg.cc/JhY3pJwn/clip-art-illustration-clown-nose-vector-graphics-png-favpng-D7u-Mw12-YZY41-Pg-CCQgges8n-DA-removebg-previ.png")
}
 function setup(){
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300,300);
     video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);

 }
 function draw() {
 image(video, 0 , 0 , 300 , 300 );
 //image(nose,nX,nY,40,40);
 image(nose1,nX,nY,75,75);
 }



 function Snap(){
     save("Image.png")

 }
 function modelLoaded(){console.log("PoseNet Is Inisialized")}
 function gotPoses(results){
if(results.length > 0){
    console.log(results);
    nX=results[0].pose.nose.x - 40;
    nY=results[0].pose.nose.y - 50;

}



 }
 nX=0;
 nY=0;
 