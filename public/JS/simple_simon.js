var boxOne = $('#square_one')
var boxTwo = $('#square_two')
var boxThree = $('#square_three')
var boxFour = $('#square_four')
var answerArray = []

var arrayOfSquares = [boxOne, boxTwo, boxThree, boxFour];
var simulatedPattern = [];

var randomlySelectedItem;;

function start() {
  randomlySelectedItem = arrayOfSquares[Math.floor(Math.random()*arrayOfSquares.length)];
  simulatedPattern.push(randomlySelectedItem);
    simulatedPattern.forEach(function(){
      randomlySelectedItem.animate({
        'opacity': '.5'
      }, 300, function(){
        randomlySelectedItem.animate({
          'opacity': '1'
        }, 300);
      });
      });
    };

$('.box').click(function(){
  var answer = this.getAttribute('data-value');
  console.log(answer);
  answerArray.push(answer);
  console.log(answerArray)
})
// $(i).click(function(){
//
// });

$('#start').click(start);

// setTimeout(function(){
//   console.log('hello kids');
// }, 3000);
