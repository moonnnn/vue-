$(function() {
// banner
var $key=0;
$(".banner ol li").hover(function() {
$(this).addClass('now').siblings().removeClass('now');
$(".banner ul li").eq($(this).index()).stop().fadeIn('fast').siblings().stop().fadeOut('fast');
$key=$(this).index();
}); 

var time=setInterval(autoplay,3000)  
function autoplay(){
   $key++;
   if($key>5){
    $key=0;
   }
   $(".banner ol li").eq($key).addClass('now').siblings().removeClass('now');
   $(".banner ul li").eq($key).stop().fadeIn('fast').siblings().stop().fadeOut('fast');
}

$(".banner").hover(function() {
        clearInterval(time);
    }, function() {
        clearInterval(time);
        time=setInterval(autoplay, 1000);
});


// search
$(".choose ul li").hover(function() {
    $(this).addClass('current').siblings().removeClass('current');  
});


// rjji
$(".riji").mouseover(function() {
    $(".enen").eq($(this).index()).css({"color":"#ff9d00"});
});
$(".riji").mouseout(function() {
    $(".enen").eq($(this).index()).css({"color":"#333"});
});


// .yiyuan-xia-zuo
// 1.移入移除高变变变
$(".yiyuan-xia-zuo").hover(function() {
    $(".yiyuan-xia-zuo #box").animate({"bottom":"0"},500);
    $(".renshu").css({"display":"none"});
}, function() {
    $(".yiyuan-xia-zuo #box").animate({"bottom":"-134px"},500);
    $(".renshu").css({"display":"block"});
});  
// 2.跑马灯滚滚
window.onload=function(){
var speed=50;
var box=document.getElementById("box");
var left=document.getElementById("left");
var right=document.getElementById("right");
right.innerHTML=left.innerHTML;
var time=setInterval(fun, speed);
function fun(){
    if(left.offsetHeight-box.scrollTop<=0){
            box.scrollTop=0;
    }else{
        box.scrollTop++;
    }
}

}
 
});