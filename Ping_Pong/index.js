
document.addEventListener("DOMContentLoaded",()=>{
   var ball=document.getElementById("ball");
   var paddle=document.getElementById("paddle");
   var table=document.getElementById("ping-pong")
    let ballx=50;
    let bally=50;
    ball.style.left=`${ballx}px`;
    ball.style.top=`${bally}px`;

    let dx=2;
    let dy=2;
    setInterval(function exec(){
      ballx+=dx;
    bally+=dy;
       ball.style.left=`${ballx}px`;
       ball.style.top=`${bally}px`;

      if(ballx<paddle.offsetLeft+paddle.offsetWidth 
         && bally>paddle.offsetTop  
         && bally+ball.offsetHeight<paddle.offsetTop+paddle.offsetHeight){
         dx*=-1;
      }

       if(ballx>table.offsetWidth-ball.offsetWidth || ballx<=0) dx*=(-1);
       if(bally>table.offsetHeight-ball.offsetHeight || bally<=0) dy*=(-1);


   
    //collision of ball and paddle

    },1) 

    let paddley=0;
    let dpy=10;
    document.addEventListener("keydown",(event)=>{
      event.preventDefault();
      if(event.keyCode==40 && paddley<table.offsetHeight-paddle.offsetHeight){
         paddley+=dpy;
      }
      else if(event.keyCode==38 && paddley>0){
        paddley+=(-1)*dpy;
      }
      paddle.style.top=`${paddley}px`
    })
    document.addEventListener("mousemove",(event)=>{
      let mousedistfromtop=event.clientY;//this is the distance mouse pointer from the top of screen
      let distanceoftablefromtop=table.offsetTop;
      let mousepointcontrol=mousedistfromtop-distanceoftablefromtop-paddle.offsetHeight/2;
      paddley=mousepointcontrol;
      if(paddley<=0 || paddley>table.offsetHeight-paddle.offsetHeight) return;
      paddle.style.top=`${paddley}px`;   
    })
})