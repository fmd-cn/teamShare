			$(function(){
				//a2
				$(".f_a2").hover(function(){
					$(".f_a2").css("background-Position"," -45px -50px")
					$(".f_a2").css("background-color","#F1801B")
					$(".f_a2").css("color","#Fff")
				},function(){
					$(".f_a2").css("background-position","20px -50px")
					$(".f_a2").css("background-color","#Fff")
					$(".f_a2").css("color","#000")
				})
				//a3
				$(".f_a3").hover(function(){
					$(".f_a3").css("background-Position"," -45px -110px")
					$(".f_a3").css("background-color","#F1801B")
					$(".f_a3").css("color","#Fff")
				},function(){
					$(".f_a3").css("background-position","20px -110px")
					$(".f_a3").css("background-color","#Fff")
					$(".f_a3").css("color","#000")
				})
				//a4
				$(".f_a4").hover(function(){
					$(".f_a4").css("background-Position"," -45px -170px")
					$(".f_a4").css("background-color","#F1801B")
					$(".f_a4").css("color","#Fff")
				},function(){
					$(".f_a4").css("background-position","20px -170px")
					$(".f_a4").css("background-color","#Fff")
					$(".f_a4").css("color","#000")
				})
				//a5
				$(".f_a5").hover(function(){
					$(".f_a5").css("background-Position"," -45px -230px")
					$(".f_a5").css("background-color","#F1801B")
					$(".f_a5").css("color","#Fff")
				},function(){
					$(".f_a5").css("background-position","20px -230px")
					$(".f_a5").css("background-color","#Fff")
					$(".f_a5").css("color","#000")
				})
				//a6
				$(".f_a6").hover(function(){
					$(".f_a6").css("background-Position"," -45px -370px")
					$(".f_a6").css("background-color","#F1801B")
					$(".f_a6").css("color","#Fff")
				},function(){
					$(".f_a6").css("background-position","20px -370px")
					$(".f_a6").css("background-color","#Fff")
					$(".f_a6").css("color","#000")
				})
				//a7
				$(".f_a7").hover(function(){
					$(".f_a7").stop().animate({
						"background-position-x":"-45px",
						"background-position-y":"-290px"
					})
					//$(".f_a7").css("background-position","-45px -290px")
					$(".f_a7").css("background-color","#F1801B")
					$(".f_a7").css("color","#Fff")
				},function(){
					$(".f_a7").stop().animate({
						"background-position-x":"20px",
						"background-position-y":"-290px"
					})
					//$(".f_a7").css("background-position","20px -290px")
					$(".f_a7").css("background-color","#fff")
					$(".f_a7").css("color","#000")
				})
				//咨询热线
				$(".f_a7").hover(function(){
					$(".tel").html("400-345-8888")
					$(".tel").stop().animate({
						width: "155px"
					})
				},function(){
					$(".tel").stop().animate({
						width: "0px"
					},function(){
						$(".tel").html("")
					})
				})
				//点击回到顶部
				$(".r-top").click(function(){
					if($(document).scrollTop()>=0){
						$(document).scrollTop("0")
						$(".r-top").css("display","none")
					}
				})
				//滚动跟随
				$(document).scroll(function(){
					var _top=$(document).scrollTop()
					
					if( _top>0){
						$(".r-top").css("display","block")
					}else{ 
						$(".r-top").css("display","none")
					}
					//alert(1)
					$(".fix_box").stop().animate({
						top:_top+"px"
					})
				})
				
			})