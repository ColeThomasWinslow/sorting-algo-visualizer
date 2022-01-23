let AlgoSpeed = document.getElementById("AlgoSpeed");

AlgoSpeed.addEventListener("input", animationSpeed);
var speed = 1000;

function animationSpeed() {
  var InputValue = AlgoSpeed.value;
  switch (parseInt(InputValue)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  delayingMetric = 10000 / (Math.floor(SizeOfArray / 10) * speed);
}

var c_delay = 0;
var delayingMetric = 10000 / (Math.floor(SizeOfArray / 10) * speed);

function UpdateAnimation(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / SizeOfArray - 2 * margin_size) +
      "%; height:" +
      height +
      "px; background-color:" +
      color +
      ";";
  }, (c_delay += delayingMetric));
}
