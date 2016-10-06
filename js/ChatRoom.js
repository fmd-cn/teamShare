			$(function(){
				
				//聊天窗口ChatRoom的出现效果（5秒后自动出现）
				setTimeout(function(){
					$('#chatRoom').show();
					//滚动条置底
					$('.chat-content').scrollTop(118);
					$('#chatRoom').stop().animate({
						width:'403px',
						height:'378px'
					})
				},5000)
				//点击关闭聊天窗口
				$('.del').click(function(evt){
					
					evt.stopPropagation();
					$('#chatRoom').hide();
				})
				//点击隐藏聊天窗口
				$('.min').click(function(evt){
					evt.stopPropagation();
					$('#chatRoom').hide();
					$('#chatRoom_min').show();
				})
				//点击显示正常大小窗口
				$('.min-max').click(function(evt){
					evt.stopPropagation();
					$('#chatRoom').show();
					$('#chatRoom_min').hide();
				})
				//顶部div实现整个版块的拖动效果
				$('.chatRoom_top,#chatRoom_min').mousedown(function(evt){
					
					//按下鼠标时鼠标对于ChatRoom框的位置
					//横向位置
					var evtDivX = evt.offsetX;
					//竖直位置
					var evtDivY = evt.offsetY;
					$(document).mousemove(function(evt){
						//鼠标移动时相对于body的位置
						//横向位置
						var evtBodyX = evt.clientX;
						//竖直位置
						var evtBodyY = evt.clientY;
						//ChatRoom对于body的位置
						//横向位置
						var leftX = evtBodyX - evtDivX + "px";
						//竖直位置
						var topY = evtBodyY - evtDivY + "px";
						//将left，top值赋给ChatRoom的div
						$('#chatRoom').css({
							'left':leftX,
							'top':topY
						});
					})
					$(document).mouseup(function(){
						$(document).unbind('mousemove');
					})
				})
				//聊天时间
				//获取系统当前时间
				var myDate = new Date();
				var hours = myDate.getHours();
				var minutes =  myDate.getMinutes();
				var seconds = myDate.getMinutes();
				if(hours < 10){
					hours = "0" + hours;
				}
				if(minutes < 10){
					minutes = "0" + minutes;
				}
				if(seconds < 10){
					seconds = "0" + seconds;
				}
				//将获取到的时间添加到聊天窗口中
				$('.chat-time').text(hours + ':' + minutes + ':' + seconds);
				//选择发送方式
				//点击“发送”按钮右部分向下的箭头时弹框提示选择发送消息的方式
				$('.sendBtn').click(function(evt){
					evt.stopPropagation();
					$('.sendStyle').show();
				})
				//点击其他部分弹框消失
				$(document).click(function(){
					$('.sendStyle').hide();
				})
				//点击发送按钮发送消息功能的实现
				//内容发送出去函数
				function sendMess(){
					if($('.input-text').val()){
						$chatMe = $('<div class="chat-me"></div>');
						$chatTimeMe = $('<p class="chat-time-me" style="font-size: 14px;"></p>');
						$chatWordMe = $('<div class="chat-word-me"></div>');
						$chatTimeMe.text(hours + ':' + minutes + ':' + seconds);
						$chatWordMe.text($('.input-text').val());
						$chatMe.append($chatTimeMe);
						$chatMe.append($chatWordMe);
						$('.chat-content').append($chatMe);
						$('.chat-content').scrollTopMax;
						var high = $('.chat-content').scrollTop() + $chatMe.height();
						$('.chat-content').scrollTop(high);
						$('.input-text').val('');
					}
				}
				//点击发送按钮发送消息
				$('.send').click(function(){
					sendMess();
				})
				//判断按键发送方式
				$('.style').click(function(){
					$(this).children('img').css('visibility','visible');
					$(this).siblings().children().css('visibility','hidden');
				})
				$(document).keypress(function(evt){
					$('.input-text').val($('.input-text').val().replace(/[\r\n]/g,""));//去掉Enter换行
					//Enter键发送消息
					if(evt.which == "13" && $('.style').eq(0).children().css('visibility') == 'visible'){
						console.log('enter');
						sendMess();
					}else{
						//Ctrl+Enter键发送消息
						if(evt.ctrlKey && $('.style').eq(1).children().css('visibility') == 'visible'){
							console.log('ctrl');
							sendMess();
						}
					}
				})
				//添加表情框json
				var smile_list = [];
				var smile_num = 21;
				$.get("json/smileList.json",function(res){
					smile_list = res;
					addSmile();
				})
				//添加json函数
				function addSmile(){
					var str = '';
					for(var i = 0 ; i < smile_num ; i ++){
						str += '<li>'+
									'<img src = "' + smile_list[i].imgSrc + '" />'+
								'</li>';
					}
					$('.smileList ul').html(str);
				}
				//表情显示或者隐藏
				$('.smile').click(function(){
					$('.smileList').toggle();
				})
			})