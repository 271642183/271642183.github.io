$().ready(function(){
	var speed = 20;
	var dpmNum = 0;
	function displacement() {
		var tHeight = $(".cnt-list")[0].offsetHeight;
		var sHeight = $(".cnt")[0].offsetHeight;
		$(".show-group .cnt").css('transform','matrix(1, 0, 0, 1, 0, '+ dpmNum +')');

		if (-dpmNum>= sHeight-tHeight) {
			dpmNum = 0;
		}
		else{
			dpmNum--;
		}

	};
	var showTiming = setInterval( displacement, speed);
	$('.show-group').bind('mouseover',function(){
		clearInterval(showTiming);
	});
	$('.show-group').bind('mouseout',function(){
		showTiming = setInterval( displacement, speed);
	});

	$('.view-group a').click(function(){
		$('.view-group a').removeClass('act');
		$(this).addClass('act');
		if ($(this).attr('data-num')==1) {
			$('.show-group').removeClass('-list-view');
		}else{
			$('.show-group').addClass('-list-view');
		}
		
	});
	

	$(".m_nav-btn").click(function(){

		$(".nav").toggleClass("act");
		$(this).toggleClass("act");
	})

	

});

