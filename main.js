function greet(){
var name = prompt('What is your name?');
var textOutput = $('#greettext');
if(name === null){
  greet();
} else if(name.length > 3){
    textOutput.html(name);
  } else {
     alert('Name must be over three letters.');
    greet();
  }
}
greet();

function randomColors() {
  var squareTracker = 6;
  var colors;
  var picked;
  var squares = document.querySelectorAll('.square');
  var colorDisplay = document.getElementById('current');
  var h1 = document.querySelector('h1');
  var messageDisplay = document.getElementById('message');
  var resetButton = document.getElementById('reset');
  var modeButtons = document.querySelectorAll('.mode');
  init();
  function init(){
    setupButtons();
    setupSquares();
    reset();
  }
  function setupButtons(){
    //button behavior and listeners
    for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
    //looping through the buttons and removing the class
    modeButtons.forEach(function(mode) {
      mode.classList.remove("selected");
    });
    //adding the class back   
    this.classList.add('selected');
    //terniary operator
    //if button clicked on is 'Easy' set colors to 3 else 6
    squareTracker = this.textContent === "Easy" ? 3 : 6;
    reset();
    });
    }
  }
  function setupSquares(){
    for(var i =0; i < squares.length; i++){
    //add click listeners to squares
      squares[i].addEventListener('click', function(){
      //grab color of clicked square
      clickedColor = this.style.backgroundColor;
      if(clickedColor === picked) {
        messageDisplay.innerHTML = 'Correct!';
        resetButton.textContent = 'Play again?';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
       this.style.backgroundColor = '#232323';
       messageDisplay.innerHTML = 'Try Again!';
      }
      });
    }
  }
  function reset(){
    //generate all new colors
    colors = generateRandomColors(squareTracker);
    //pick a new random color from array
    picked = pickedColor();
    //change the text that shows up in the color display
    colorDisplay.innerHTML = picked;
    resetButton.textContent = 'New Colors';
    messageDisplay.innerHTML = '';
    //change colors of squares
    for(var i =0; i < squares.length; i++){
      //checks how many colors there are.
      if(colors[i]){
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
      } else {
        //hide the square's 
        squares[i].style.display = 'none';
      }
    }
    h1.style.backgroundColor = 'steelblue';
  }
  resetButton.addEventListener('click', function(){
    reset();
  });
  function changeColors(color){
    //loop through all the squares
    for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = color;
    }
    //set the color to the right color
  }
  function pickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }
  function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors
    for(var i = 0; i < num; i++){
      //get random color push into arr
      arr.push(randomColor());
    }
    ///return that array;
    return arr;
  }
  function randomColor(){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return 'rgb('+r+', '+g+', '+b+')';
  }
}


randomColors();