
let winWidth = window.innerWidth; //화면의 가로 길이
console.log(winWidth);

$('.navbar_gnb, .sub_shadow ').on('mouseover mouseout',function(e){
  if( winWidth > 1169){
    if(e.type == 'mouseover'){
      $('.sub').stop().slideDown();
      $('.sub_shadow').stop().fadeIn();
    } else {
      $('.sub').stop().slideUp(200);
      $('.sub_shadow').stop().fadeOut(200);
    }
  }   
})


$('.trigger').click(function(){
  $(this).toggleClass('open');

  if($(this).hasClass('open')){
    $('header').animate({left:-250},500);
    $('.gnb').animate({right:0},500);
  } else {
    $('header').animate({left:0},500);
    $('.gnb').animate({right:-250},500);    
  }
})
