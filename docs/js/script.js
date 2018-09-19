$(function(){
	$('.navbar').on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 300);
	});

    $(window).scroll(function(){
        $(this).scrollTop()>300 ? $(".backtotop").addClass('btn-backtotop')
        	: $(".backtotop").removeClass('btn-backtotop')
	});

    $(".backtotop").click(function(){
        return $("html,body").animate({scrollTop:0});
    });

    
});