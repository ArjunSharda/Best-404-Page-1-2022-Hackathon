function enlargen_crack1() {
  crack1 = document.getElementById("crack1");
  //crack1.style.transform = "scale(1.5)";
  crack1.style.width = "110px";
  crack1.style.height = "95px";
  crack1.style.margin = "-170px -88px";
  crack1.style.transform = "rotate(10deg)";
  crack1.style.position = "absolute";
  crack1.style.transition= "duration(1000ms)";
  crack1.style.z.index = "3";
}

/*width: 80px;
height: 70px;
margin: -160px -78px;
transform: rotate(10deg);
position: absolute;
transition-duration: 100ms;
transition-timing-function: linear;
animation: crack2Anim 3s;
z-index: 3;*/

function enlargen_crack2() {
  crack2 = document.getElementById("crack2");
  //crack2.style.transform = "scale(1.5)";
  crack2.style.width = "70px";
  crack2.style.height = "90px";
  crack2.style.margin = "-217px -221px";
  crack2.style.transform = "rotate(-40deg)";
  crack2.style.position = "absolute";
  crack2.style.z.index = "3";
}