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
var $gun=0;
var $circle=0;
var speed=500;
var timer=setInterval(autoplay,2000);
function autoplay(){
	$gun++;
if($gun>4){
	$(".shouji-in ul").css({"left":0});
	$gun=1;
}

$(".shouji-in ul").stop().animate({"left":-$gun*170}, speed);
$circle++;
if($circle>3){$circle=0}
$(".xiamian ol li").eq($circle).addClass('current').siblings().removeClass('current')
}


$(" .xiamian ol li").click(function(event) {
$gun=$(this).index();
$circle=$(this).index();
$(".shouji-in ul").stop().animate({"left":-$gun*170}, speed);
$(" .xiamian ol li").eq($circle).addClass('current').siblings().removeClass('current');
});

$(".shouji-in").hover(function() {
	clearInterval(timer);
}, function() {
	clearInterval(timer);
	timer=setInterval(autoplay,2000);
});

});