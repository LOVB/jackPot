$(document).ready(function(){

  $('button').click(function(){
    $('.texto').animate({
      marginTop: '-300px'
    }, 1000)
  });

  $('button').click(function (){
    $('.texto').delay(5000).animate({
      marginTop: '0px'
    }, 1000);
  });

});
