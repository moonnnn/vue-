$(function() {

// nav
$(".free").mouseover(function(){
$(".heng").css({"height":"56px","color":"#ff9e00"});
$(".xl").css("margin-top","0px");
$(".xl").show();
$(".free").children('a').css({"border-top":"3px solid #ff9e00","border-right":"1px solid #c9c9c9","border-left":"                            1px solid #c9c9c9"});
$(".sanjiao").css("border-color","#ff9d00 transparent transparent transparent");
});

$(".free").mouseleave(function(){
$(".heng").css({"height":"55px","color":"#333333"});
$(".xl").css("margin-top","-1px");
$(".xl").hide();
$(".free").children('a').css({"border-top":"3px solid #fff","border-right":"1px solid #fff","border-left":"                            1px solid #fff"});
$(".sanjiao").css("border-color","#666666 transparent transparent transparent");
});

$(".shequ").mouseover(function(){
$(".wa").css({"height":"56px","color":"#ff9e00"});
$(".xlt").css("margin-top","0px");
$(".xlt").show();
$(".shequ").children('a').css({"border-top":"3px solid #ff9e00","border-right":"1px solid #c9c9c9","border-left":"                            1px solid #c9c9c9"});
$(".sanjiao").css("border-color","#ff9d00 transparent transparent transparent");
});

$(".shequ").mouseleave(function(){
$(".wa").css({"height":"55px","color":"#333333"});
$(".xlt").css("margin-top","-1px");
$(".xlt").hide();
$(".shequ").children('a').css({"border-top":"3px solid #ffffff","border-right":"1px solid #ffffff","border-left":"                             1px solid #ffffff"});
$(".sanjiao").css("border-color","#666666 transparent transparent transparent");
});


// banner
var $key=0;
var $circle=0;
var speed=1000;

$("#box ol li").click(function() {
  var $key=$(this).index();
  $(this).stop().addClass('current').siblings().stop().removeClass('current');
  $("#box ul").animate({"left":-$key*730},speed);
});


// ling
$(".xuan ul li").mouseover(function() {
  $(this).stop().css("border-right","0px solid #dddddd").siblings().stop().css("border-right","1px solid #dddddd");
  $(".xianshi ul").eq($(this).index()).stop().show().siblings().stop().hide();
  $(".main-in-top-l").css("border-right","1px solid #dddddd")
});
$(".nav-xuan").mouseleave(function() {
   $(".xianshi ul").css("display","none");
   $(".xuan ul li").stop().css("border-right","1px solid #dddddd");
   $(".main-in-top-l").css("border-right","0px solid #dddddd");
});

});