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
  var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 2555, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)',
    'rgb(175, 0, 688)'
  ];
  var squares = document.querySelectorAll('.square');
  var picked = colors[2];
  var colorDisplay = document.getElementById('current');
  colorDisplay.innerHTML = '<h2>'+picked+'</h2>';
  for(var i =0; i < squares.length; i++){
    //add itial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
      //grab color of clicked square
      clickedColor = this.style.backgroundColor;
      if(clickedColor === picked) {
        alert('Correct!');
      } else {
        alert('Wrong!!!');
      }
    });
  }
}

randomColors();