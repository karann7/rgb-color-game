// function greet(){
// var name = prompt('What is your name?');
// var textOutput = $('#greettext');
// if(name === null){
//   greet();
// } else if(name.length > 3){
//     textOutput.html(name);
//   } else {
//      alert('Name must be over three letters.');
//     greet();
//   }
// }
// greet();
function randomColors() {
  var squareTracker = 6;
  var colors = generateRandomColors(squareTracker);
  var squares = document.querySelectorAll('.square');
  var picked = pickedColor();
  var colorDisplay = document.getElementById('current');
  var h1 = document.querySelector('h1');
  var messageDisplay = document.getElementById('message');
  var resetButton = document.getElementById('reset');
  var easyBtn = document.getElementById('easy');
  var hardBtn = document.getElementById('hard');
  easyBtn.addEventListener('click', function(){
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    squareTracker = 3;
    resetButton.textContent = 'New Colors';
    colors = generateRandomColors(squareTracker);
    picked = pickedColor();
    //change the text that shows up in the color display
    colorDisplay.innerHTML = picked;
    //change colors of squares
    for(var i =0; i < squares.length; i++){
  //add itial colors to the squares
    if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    }
    h1.style.backgroundColor = 'steeleblue';
    messageDisplay.innerHTML = '';
  });
  hardBtn.addEventListener('click', function(){
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    squareTracker = 6;
    resetButton.textContent = 'New Colors';
    colors = generateRandomColors(squareTracker);
    picked = pickedColor();
    //change the text that shows up in the color display
    colorDisplay.innerHTML = picked;
    //change colors of squares
    for(var i =0; i < squares.length; i++){
  //add itial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    }
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.innerHTML = '';
  });
  resetButton.addEventListener('click', function(){
    resetButton.textContent = 'New Colors';
    //generate all new colors
    colors = generateRandomColors(squareTracker);
    //pick a new random color from array
    picked = pickedColor();
    //change the text that shows up in the color display
    colorDisplay.innerHTML = picked;
    //change colors of squares
    for(var i =0; i < squares.length; i++){
  //add itial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.innerHTML = '';
  });
  colorDisplay.innerHTML = picked;
  for(var i =0; i < squares.length; i++){
    //add itial colors to the squares
    squares[i].style.backgroundColor = colors[i];
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