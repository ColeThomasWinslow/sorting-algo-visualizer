const TCLabel = document.getElementById("TCLabel");

function MergeSort() {
  console.log("merge");
}
function BubbleSort() {
  c_delay = 0;

  for (var i = 0; i < SizeOfArray - 1; i++) {
    for (var j = 0; j < SizeOfArray - i - 1; j++) {
      UpdateAnimation(Bars[j], BarValues[j], "rgb(207, 190, 85)");

      if (BarValues[j] > BarValues[j + 1]) {
        UpdateAnimation(Bars[j], BarValues[j], "rgb(237, 95, 88)");
        UpdateAnimation(Bars[j + 1], BarValues[j + 1], "rgb(237, 95, 88)");

        var temp = BarValues[j];
        BarValues[j] = BarValues[j + 1];
        BarValues[j + 1] = temp;

        UpdateAnimation(Bars[j], BarValues[j], "rgb(237, 95, 88)");
        UpdateAnimation(Bars[j + 1], BarValues[j + 1], "rgb(237, 95, 88)");
      }
      UpdateAnimation(Bars[j], BarValues[j], "rgb(120, 148, 211)");
    }
    UpdateAnimation(Bars[j], BarValues[j], "rgb(62, 161, 35)");
  }

  UpdateAnimation(Bars[0], BarValues[0], "rgb(62, 161, 35)");
}
