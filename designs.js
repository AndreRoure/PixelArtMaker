//Necessary variables.
const grid = document.getElementById("pixelCanvas");
const gridSize = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
let color = "#000000";


//Function that generates the grid (activated by event listener).
function makeGrid() {
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  let first = "";
  let second = "";
//Loop to detrmine the width of the grid.
  for (let i = 1; i <= width; i++) {
    first = first + "<td></td>";
  }
//Loop to determine the height of the grid(needs the width).
  for (let j = 1; j <= height; j++) {
    second = second + "<tr>" + first + "</tr>";
  }
//Creates the grid.
  grid.innerHTML = second;
}

//Event listener for the submition of grid size.
gridSize.addEventListener("submit", function(e){
  //Stop the grid from reseting by itself.
  e.preventDefault();
  makeGrid();
});

//Event listener for color change.
colorPicker.addEventListener("change", function(){
  return color = colorPicker.value;
});

//Event listener for painting the selected pixel.
grid.addEventListener("click", function (e) {
  if (e.target.tagName == "TD") {
    e.target.style.backgroundColor = color;
  }
});

//by André Carvalho de Roure
