var simulatedPattern = []
var randomlySelectedItem
var randomBoxesArray = []
var correct = true
var index = 0
var count
var boxes = $('.box')

function start () {
  randomlySelectedItem = boxes[Math.floor(Math.random() * boxes.length)]
  simulatedPattern.push(randomlySelectedItem.getAttribute('data-value'))
  animate();
  // console.log(simulatedPattern)
};

function clickLights () {
    boxes.each(function(){
      $(this).click(function (){
        $(this).animate({
          'opacity': '.5'
        }, 100).animate({
          'opacity': '1'
        }, 100)
      })
  })
}
clickLights()

function animate () {
  simulatedPattern.forEach(function(randomlySelectedItem, index) {
    setTimeout(function() {
      $('[data-value="' + randomlySelectedItem + '"]').animate({
        'opacity': '.5'
      }, 500).animate({
        'opacity': '1'
      },500)
    }, 500 * index)
  })
}

$('.box').click(function(event){
  if (simulatedPattern[index] === $(this).attr('data-value')) {
    index++
  } else {
    simulatedPattern = []
    correct = false
    index = 0
    randomBoxesArray = []
  };
  if (index === simulatedPattern.length && correct === true) {
    start()
    index = 0
    count = simulatedPattern.length
    $('span').text(count)
    }
})

$('#start').click(function () {
  simulatedPattern = []
  $('span').text('1')
  start()
})
