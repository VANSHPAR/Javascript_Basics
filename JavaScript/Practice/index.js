
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    const table = document.getElementById("out");
    const box = document.getElementById("in");

    let xMax = table.offsetWidth - box.offsetWidth;
    let yMax = table.offsetHeight - box.offsetHeight;

    let x = 0, y = 0;
    let dx = 2, dy = 2;  // start moving right
    function animate(){
        x += dx;
      y += dy;

      // move box
      box.style.left = x + "px";
      box.style.top = y + "px";
      if(x===0 && y===0) {
        console.log("hit")
        dx=0;
        dy=0;
        return 0;
      }
      else{

      // change direction at borders
      if (x >= xMax && y >= yMax) { dx = 0; dy=-2; }       // move down
      else if ( y===0) { dx = -2; dy = 2; } // move left
      else if (x===0 && y >= yMax) { dx = 0; dy = -2; }  
      }
        // move up
    }
    let interval = setInterval(animate, 10); // update every 10ms for smooth animation
  });
});
