// function greet(){
// var name = prompt('What is your name?');
// var textOutput = $('#greettext');
// if(name === null){
//   greet();
// } else if(name.length > 3){
//     textOutput.html('Welcome to the game, ' + name);
//   } else {
//      alert('Name must be over three letters.');
//     greet();
//   }
// }
// greet();
function randomColors() {
  var colors = generateRandomColors(6);
  var squares = document.querySelectorAll('.square');
  var picked = pickedColor();
  var colorDisplay = document.getElementById('current');
  var messageDisplay = document.getElementById('message');
  colorDisplay.innerHTML = '<h2>'+picked+'</h2>';
  for(var i =0; i < squares.length; i++){
    //add itial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
      //grab color of clicked square
      clickedColor = this.style.backgroundColor;
      if(clickedColor === picked) {
        messageDisplay.innerHTML = 'Correct!';
        changeColors(clickedColor);
        document.querySelector('h1').style.backgroundColor = clickedColor;
      } else {
       this.style.backgroundColor = '#33ffcc';
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