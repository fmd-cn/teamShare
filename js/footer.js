$(function(){
	$('.ft-bd li').eq(0).stop().show();
	$('.ft-hd a').eq(0).addClass('active');
	$('.ft-hd a').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$('.ft-bd li').eq(index).stop().show();
		$('.ft-bd li').eq(index).siblings().stop().hide();
	},function(){
		return 0;
	})
})
