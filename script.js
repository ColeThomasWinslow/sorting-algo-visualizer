import { MergeSort, BubbleSort } from "./algorithms.js";
const Container = document.getElementById("ArrayContainer");
const GenerateDataBtn = document.getElementById("GenerateData");
const AlgoButtons = document.querySelectorAll(".ButtonsCont button");
let SizeOfArray = document.getElementById("SizeOfArray").value;
let ArrayInput = document.getElementById("SizeOfArray");

// Established Arrays
let Bars = [];
let BarValues = [];

// EventListener For New Data
GenerateDataBtn.addEventListener("click", CreateNewArray);
// EventListener For Changing Input Value
ArrayInput.addEventListener("input", updateSizeOfArray);

// First clear out the Container with empty string.
// Then generate random numbers filling the BarValues Array.
// Then create a div for the length of the array styling the height with the BarValues.
function CreateNewArray() {
  Container.innerHTML = "";
  for (let i = 0; i < SizeOfArray; i++) {
    BarValues[i] = Math.floor(Math.random(10 - 200) * 200);
    Bars[i] = document.createElement("div");
    Bars[i].classList.add("bar");
    Bars[i].style.height = `${BarValues[i]}px`;
    Container.append(Bars[i]);
  }
}
// Updates the Size From the input change of the event listener // Line: 15
function updateSizeOfArray() {
  SizeOfArray = ArrayInput.value;
  CreateNewArray();
}

// Loop through the array of buttons to add Event listeners
for (var i = 0; i < AlgoButtons.length; i++) {
  AlgoButtons[i].addEventListener("click", RunChosenAlgo);
}

// Switch Statement Depending on the Button Clicked
// `this.innerHtml` is referring to the text in the button
function RunChosenAlgo() {
  switch (this.innerHTML) {
    case "Merge Sort":
      MergeSort();
      break;
    case "Bubble Sort":
      BubbleSort();
      break;
  }
}

// Every time the Window Loads create a new array
window.onload = updateSizeOfArray();
