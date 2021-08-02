

//flag is for differentiating the click and the hold
var flag = 0;

function taps() {
  var l = [".,!", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz", "*", "0", "#"];
  //active tells u wether the key is in switching state
  var active = 1;
  //count tells the last index of the string
  var count = 0;
  //id tells u the last id of the button pressed
  var id = -1;
  var timer;
//function for click
  $('button').click(function (e) {

    if (flag == 1) {
      flag = 0;
      return false;
    }

    clearTimeout(timer);
    if (id != e.target.id) {
      id = e.target.id;
      active = 0;
      count = 0;
    }
    if (active == 0) {

      $('#number')[0].value += "" + l[e.target.id - 1][count++];
      active = 1;
    }
    else {
      console.log(count);
      count = count % l[e.target.id - 1].length;
      $('#number')[0].value = $('#number')[0].value.slice(0, -1);
      $('#number')[0].value += "" + l[e.target.id - 1][count++];






    }



    timer = window.setTimeout(function () {

      active = 0;
      count = 0;


    }, 800);


  });

}
//function for hold
function hold() { 
  $("button").mouseup(function () {
    clearTimeout(pressTimer);

    // Clear timeout
    $('button').isClickable = true;
    return false;
  }).mousedown(function (e) {
    // Set timeout
    $('button').isClickable = false;
    pressTimer = window.setTimeout(function () {
      $('#number')[0].value += "" + e.target.id;
      flag = 1;


    }, 1000);
    return false;
  });
}
taps();
hold();