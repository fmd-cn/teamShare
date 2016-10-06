$(function(){	
	function show(){
		$("#banner .pic").stop().animate({
			width : "102%",
			height : "101%"
		},3000,function(){
			$("#banner .pic").stop().animate({
				width : "100%",
				height : "100%"
			},3000)
		})
	}
	show();	
	setInterval(show,6000);
	$("#banner .tle1").stop().animate({
		top:"175px"
	},2000);
	$("#banner .tle2").stop().animate({
		top:"448px"
	},2000);

})