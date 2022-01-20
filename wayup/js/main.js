// var btn = document.getElementById('btn');
// btn.onclick = function (e) {
// 	e.preventDefault();
// 	var text = document.querySelector('.intro');
// 	text.classList.add('red');
// 	var img = document.querySelector('.case');
// 	img.style.display = "none";
// 	document.querySelector('future-time').style.marginLeft = '150px;'
// }

$(function () {
	$(window).scroll(function() {
	    $('#wait .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('#ticket .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('#ticket .btn-form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__bounceIn");
	        }
	    });
	});
});