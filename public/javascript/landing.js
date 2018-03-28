

// potential templates below //

$(document).ready(function(){
  $('.carousel').carousel();
});

function showCarousel() {
  $(document).on("click", "#crypto-btn", function () {
  $('.carousel').show();
},)
};

$("#rainingBitcoins").delay(9000).fadeOut(300);

function videoTimer() {
// disable clicking //
events._click = events.click;
events.click = null;
// restore clicking //
setTimeout(function(){
vents.click = events._click;
events._click = null;
 },  9000);
};

videoTimer()


$("#bottom-btns").hide();
$("#check-currency-btn").hide();
$("#call-gif-btn").hide();

$(document).ready(function(){
  $(".carousel").carousel();
  $(".carousel").hide();
  showCarousel();
});

$("#crypto-btn").click(function(){
  $(".carousel").show();
});

$(".coin-btn").click(function(){
  $("#bottom-btns").show();
});
