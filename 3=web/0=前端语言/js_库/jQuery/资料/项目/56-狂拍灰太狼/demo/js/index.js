$(function(){
	// 监听游戏规则的点击
	$('.rules').click(function(){
		// 防止前面有动画，所以开启一个动画之前，都要stop以下
		$('.rule').stop().fadeIn(100);
	})
	
		// 监听关闭按钮的点击
	$('.close').click(function(){
		$('.rule').stop().fadeOut(100);
	})
	
	// 监听开始游戏按钮
	$('.start').click(function(){
		$(this).stop().fadeOut(100);
		// 进度条控制
		processHandler();
	})
	
	// 4 监听重新开始按钮
	$('.restart').click(function(){
		$('.mask').stop().fadeOut(100);
		processHandler();
	})



	function processHandler() {
		$('.progress').css({
			width: 180
		})

		let timer = setInterval(function(){
			let processWidth = $('.progress').width();
			processWidth -= 1;
			$('.progress').css({
				width: processWidth
			});
			// 进度条结束，关闭定时器
			if (processWidth <= 0) {
				clearInterval(timer);
				$('.mask').stop().fadeIn(100);
			}
		}, 10)
	}
	

})