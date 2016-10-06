/**
 * Created by Administrator on 2016/10/3.
 */
$(function(){
	$('.content').load('m-content.html');
	$('.lfFixed').load('left-fixed.html');
	$('.bott').load('footer.html');
	$('.banne').load('banner.html');
	
    //城市列表动画
    $("#nav .cityTablist").hover(fn1,fn2)
    function fn1(){
        $("#nav .tabList").show().stop().animate({
            "width" : "270px",
            "height" : "115px"
        })
    }
    function fn2(){
        $("#nav .tabList").stop().animate({
            "width" : "0px",
            "height" : "0px"
        },function(){
            $(this).hide();
        })
    }
    //导航部分鼠标划过的动画
    $("#nav .trueNav .navList").children("li").hover(
        function(){
            $(this).children("a").addClass("active");
        },function(){
            $(this).children("a").removeClass("active");
        }
    )
    $("#nav .navList .course").hover(
        function(){
            $(this).children(".list").stop().delay(100).slideDown(600);
        },
        function(){
            $(this).children(".list").stop().slideUp(400);
        }
    )
})