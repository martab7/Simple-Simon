var simulatedPattern = []
var randomlySelectedItem
var correct = true
var index = 0
var count
var buzzer = new Audio('../audio/beep-05.mp3')
var buttonNoise = new Audio('../audio/beep-02.mp3')
var boxes = $('.box')

var gameTimer = 3
var interval = 1000

//---- Timer Function
function bigTimer () {
  var countDown = setInterval(function updateTimer () {

    if (gameTimer <= 0) {
      $('p').prop('hidden', true)
      gameTimer = 3
      clearInterval(countDown)
    } else {
        $('p').removeAttr('hidden')
        $('p').text(gameTimer)
        gameTimer--
    }
}, interval);
}

//----- Start and Play Game Functions
function start () {
  randomlySelectedItem = boxes[Math.floor(Math.random() * boxes.length)]
  simulatedPattern.push(randomlySelectedItem.getAttribute('data-value'))
  animate()
};

function clickLights () {
  boxes.each(function(){
    $(this).click(function (){
      $(this).children('img').animate({
        'height': '130%',
        'width': '130%'
      }, 200).animate({
        'height': '100%',
        'width': '100%'
      }, 200)
    })
  })
}

function animate () {
  simulatedPattern.forEach(function(randomlySelectedItem, index) {
    setTimeout(function() {
      $('[data-value="' + randomlySelectedItem + '"]').children('img').animate({
        'height': '130%',
        'width': '130%'
      }, 500).animate({
        'height': '100%',
        'width': '100%'
      },500)
    }, 1000 * index)
  })
}

// ------ Click Function and Check
$('.box').click(function(event){
  if (simulatedPattern[index] === $(this).attr('data-value')) {
    buttonNoise.play()
    index++
  } else {
    simulatedPattern = []
    correct = false
    index = 0
    randomBoxesArray = []
    buzzer.play()
  };
  if (index === simulatedPattern.length && correct === true) {
    start()
    index = 0
    count = simulatedPattern.length
    $('span').text(count)
  }
})

// ---- Event
clickLights()
$('#start').click(function () {
  $('#start').animate({
    'font-size': '55px'
  }, 500).animate({
    'font-size': '45px'
  }, 500)
  simulatedPattern = []
  $('span').text('1')
  correct = true
  bigTimer()
  setTimeout(function() {
    start()
  }, 4000)
})
