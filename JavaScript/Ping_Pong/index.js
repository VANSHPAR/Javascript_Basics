
document.addEventListener("DOMContentLoaded",()=>{
   var ball=document.getElementById("ball");
   var paddle=document.getElementById("paddle");
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
       if(ballx>680 || ballx<=0) dx*=(-1);
       if(bally>380 || bally<=0) dy*=(-1);

    //    bally+=dy;
    //    ball.style.top=`${bally}px`;

    },1) 
})