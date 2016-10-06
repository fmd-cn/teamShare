/**
 * Created by Administrator on 2016/10/5.
 */
$(function(){
    var timer = setInterval(move,2000);
    var index = 0;
    function move(){
        if(index == 2){
            index = 0;
        }
        $(".banner ul li").eq(index).fadeIn().siblings("li").fadeOut();
        $(".banner .upIcon span").eq(index).addClass("active").siblings().removeClass("active");
        index++;
    }
    $(".banner .leftIcon").click(function(){
        clearInterval(timer);
        index = index - 1 -1;
        console.log(index)
        if(index == -1){
            index = 1;
        }
        move();
        timer = setInterval(move,2000)
    })
    $(".banner .rightIcon").click(function(){
        clearInterval(timer);
        move();
        timer = setInterval(move,2000)
    })
    $(".banner").hover(fn1,fn2)
    function fn1(){
        $(this).children(".leftIcon").show().stop().animate({
            left : "20%"
        })
        $(this).children(".rightIcon").show().stop().animate({
            right : "20%"
        })
    }
    function fn2(){
        $(this).children(".leftIcon").stop().animate({
            left : "18%"
        },function(){
            console.log($(this))
            $(this).hide();
        })
        $(this).children(".rightIcon").stop().animate({
            right : "18%"
        },function(){
            $(this).hide();
        })


    }
    $(".tabList .list .list_right li").mouseover(function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active")
        $(".tabList .list_left p").eq(index).show().css("z-index","2").siblings("p").hide().css("z-index","0");
    })
})