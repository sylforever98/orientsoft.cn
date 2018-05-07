$(".tc1").click(function(){
    $("#gray").show();
    $("#popup1").show();
    tc_center();
});
$(".tc2").click(function(){
    $("#gray").show();
    $("#popup2").show();
    tc_center();
});
$(".tc3").click(function(){
    $("#gray").show();
    $("#popup3").show();
    tc_center();
});
$("#gray").click(function(){
    $("#gray").hide();
    $("#popup1").hide();
    $("#popup2").hide();
    $("#popup3").hide();
})
$(window).resize(function(){
    tc_center();
});
function tc_center(){
    var _top=($(window).height()-$(".popup").height())/2;
    var _left=($(window).width()-$(".popup").width())/2;
    $(".popup").css({top:_top,left:_left});
}

$(document).ready(function(){
    $(".pro-box").hover(function(){
        $(this).children().stop(false,true);
        $(this).children(".a11").animate({"margin-top": 0},300);
        $(this).children(".a12").animate({"margin-top": 0},300);
        $(this).children(".a21").animate({"margin-top": 0},300);
        $(this).children(".a22").animate({"margin-top": 0},300);
        $(this).children(".a31").animate({"margin-top": 0},300);
        $(this).children(".a32").animate({"margin-top": 0},300);
        $(this).children(".p2").fadeOut("slow");
        $(this).children(".p11").fadeOut("slow");
    },function(){
        $(this).children().stop(false,true);
        $(this).children(".a11").animate({"margin-top": 100},300);
        $(this).children(".a12").animate({"margin-top": 100},300);
        $(this).children(".a21").animate({"margin-top": 100},300);
        $(this).children(".a22").animate({"margin-top": 100},300);
        $(this).children(".a31").animate({"margin-top": 100},300);
        $(this).children(".a32").animate({"margin-top": 100},300);
        $(this).children(".p2").fadeIn("slow");
        $(this).children(".p11").fadeIn("slow");
    });
});
/* service */

