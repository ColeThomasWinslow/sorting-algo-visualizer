const TCLabel = document.getElementById("TCLabel");
function SelectionSort() {
  c_delay = 0;

  for (var i = 0; i < SizeOfArray - 1; i++) {
    UpdateAnimation(Bars[i], BarValues[i], "red"); //Color update

    index_min = i;

    for (var j = i + 1; j < SizeOfArray; j++) {
      UpdateAnimation(Bars[j], BarValues[j], "yellow"); //Color update

      if (BarValues[j] < BarValues[index_min]) {
        if (index_min != i) {
          UpdateAnimation(Bars[index_min], BarValues[index_min], "blue"); //Color update
        }
        index_min = j;
        UpdateAnimation(Bars[index_min], BarValues[index_min], "red"); //Color update
      } else {
        UpdateAnimation(Bars[j], BarValues[j], "blue"); //Color update
      }
    }

    if (index_min != i) {
      var temp = BarValues[index_min];
      BarValues[index_min] = BarValues[i];
      BarValues[i] = temp;

      UpdateAnimation(Bars[index_min], BarValues[index_min], "red"); //Height update
      UpdateAnimation(Bars[i], BarValues[i], "red"); //Height update
      UpdateAnimation(Bars[index_min], BarValues[index_min], "blue"); //Color update
    }
    UpdateAnimation(Bars[i], BarValues[i], "green"); //Color update
  }
  UpdateAnimation(Bars[i], BarValues[i], "green"); //Color update
}

function MergeSort() {
  c_delay = 0;
  merge_partition(0, SizeOfArray - 1);
}

function merge_sort(start, mid, end) {
  var p = start,
    q = mid + 1;

  var Arr = [],
    k = 0;

  for (var i = start; i <= end; i++) {
    if (p > mid) {
      Arr[k++] = BarValues[q++];
      UpdateAnimation(Bars[q - 1], BarValues[q - 1], "red"); //Color update
    } else if (q > end) {
      Arr[k++] = BarValues[p++];
      UpdateAnimation(Bars[p - 1], BarValues[p - 1], "red"); //Color update
    } else if (BarValues[p] < BarValues[q]) {
      Arr[k++] = BarValues[p++];
      UpdateAnimation(Bars[p - 1], BarValues[p - 1], "red"); //Color update
    } else {
      Arr[k++] = BarValues[q++];
      UpdateAnimation(Bars[q - 1], BarValues[q - 1], "red"); //Color update
    }
  }

  for (var t = 0; t < k; t++) {
    BarValues[start++] = Arr[t];
    UpdateAnimation(Bars[start - 1], BarValues[start - 1], "green"); //Color update
  }
}

function merge_partition(start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    UpdateAnimation(Bars[mid], BarValues[mid], "yellow"); //Color update

    merge_partition(start, mid);
    merge_partition(mid + 1, end);

    merge_sort(start, mid, end);
  }
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
