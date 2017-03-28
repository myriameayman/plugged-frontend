$(document).foundation()
$(document).ready(function() {

	var show = false;
	var search = document.getElementsByClassName("search-icon");
	var search_bar = document.getElementsByClassName("search-bar");
	$(".search-icon").click(function showSearch() {
		show = !show;
		if(show) {
			$(".search input").css('display', 'inline-block');
		}	else{
			$(".search input").css('display', 'none');
		}
		// alert(show);
	});
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	$('.img').css('height', windowHeight/(4) + 'px'); 

	if(window.innerWidth < 500){
		$('.col').css('width', 85 + '%'); 
		$('.container-article').css('width', 85 + '%'); 
		$('.container-index').css('width', 95 + '%');
		// $('.row').css('float', 'left'); 


	}
	else{
		if(window.innerWidth < 865){
			$('.col').css('width', 45+ '%');
			$('.container-article').css('width', 30 + '%'); 
			$('.container-index').css('width', 70 + '%'); 
		} 
		else{
			$('.col').css('width', 30.33+ '%'); 
			$('.container-article').css('width', 25 + '%'); 
			$('.container-index').css('width', 75 + '%'); 
		}
		// $('.row').css('float', 'right'); 

	}
	$('.drop-down-menu a').click(function(event) {
		// alert('hello');
		var id = $(this).attr('id');
		// alert($('#'+id+' .hidden'));
		$('#'+id+'.hidden').toggleClass('open');
	});
	$(function(){
		$("a.counter").click(function()
		{
         	$.get("set_interesantes.php?n=Frank Melo&u=f6e79cfe9c0ecc4c08dac4c860c4802b&back=http://localhost:8085/Something/success/profile.php?search_user=f6e79cfe9c0ecc4c08dac4c860c4802b&p=12&sa=f6e79cfe9c0ecc4c08dac4c860c4802b&i=2345123&dl=&iv=1" ); // you can do some animation here, like a "Liked!" popup or something
         	return false; // prevent default browser refresh on "#" link
         });
	});
	$(".new-comment input").on('keyup', function (e) {
		if (!e) e = window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13'){
			var comment = $(".new-comment input").val();
			var comment_name= "maggie sourial";
			var time = "Just now";
			// var newDiv = document.createElement('div');
			// var newContent = document.createTextNode("Hi there and greetings!");
			// newDiv.appendChild(newContent);
			// var currentDiv = document.getElementById('new-comment'); 
			// document.insertBefore(currentDiv, newDiv); 

			$(".old-comments").append("<div class='comment'><div class='profile-pic' style='background-image: url(../Images/profile3.jpg)'></div><div class= 'comment-body'><h6 class='comment-name'>"+
				comment_name+"</h6><i class='icons fa fa-calendar-o' aria-hidden='true'></i><p class= 'mini-info-txt mini-info-text-colour'>"+
				time+"</p><p>"+comment+"</p></div></div></div></div>");
			// alert(comment);
			// $(".old-comments").animate({
			// 	scrollTop:  scrolled
			// });
			 $('.old-comments').scrollTop($('.old-comments').scrollTop()+150);
			return false;
		}
	})
});
window.onresize = function() {
	if(window.innerWidth < 500){
		$('.col').css('width', 85 + '%'); 
		$('.container-article').css('width', 85 + '%'); 
		$('.container-index').css('width', 95 + '%'); 
		// $('.row').css('float', 'left'); 
	}
	else{
		if(window.innerWidth < 865){
			$('.col').css('width', 45+ '%');
			$('.container-article').css('width', 30 + '%'); 
			$('.container-index').css('width', 70 + '%'); 
		} 
		else{
			$('.col').css('width', 30.33+ '%'); 
			$('.container-article').css('width', 25 + '%'); 
			$('.container-index').css('width', 75 + '%'); 

		}
		// $('.row').css('float', 'right'); 

	}	
};


