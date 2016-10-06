$(function(){
	
	$('.con4_tab_wrap').find('tbody').stop().hide().end().find('tbody').eq(0).stop().show();
	$('.c4_list ul').children().eq(0).addClass('hoverImg');
	$('.main-c6 .tab').children().eq(0).addClass('hoverIt');
	$('.main-c6 .bd').children().eq(1).stop().hide();
	$('.main-c7 .leftNav').children().eq(0).addClass('onIt');
	$('.main-c7 .rightBox').find('li').stop().hide().end().find('li').eq(0).stop().show();
	$('.c4_list ul').children().hover(function(){		
		var index = $(this).index();		
		$('.con4_tab_wrap').find('tbody').eq(index).stop().show().siblings().stop().hide();
		$(this).addClass('hoverImg').siblings().removeClass('hoverImg');
	},function(){
		return 0;
	})
	
	$('.main-c6 .tab').children().hover(function(){
		$(this).addClass('hoverIt').siblings().removeClass('hoverIt');
		var index = $(this).index();
		$('.main-c6 .bd').children().eq(index).stop().show().siblings().stop().hide();
	},function(){
		return 0;
	})
	
	
	$('.main-c7 .leftNav').children().hover(function(){
		$(this).addClass('onIt').siblings().removeClass('onIt');
		var index = $(this).index();
		$('.main-c7 .rightBox ul').children().eq(index).stop().show().siblings().stop().hide();
	},function(){
		return 0;
	})
	
	$('.share .weixin').hover(function(){
		$(this).children().stop().show();
	},function(){
		$(this).children().stop().hide();
	})
	
	
	
	
	
})
