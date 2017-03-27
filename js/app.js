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
		$('.row').css('float', 'left'); 


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
		$('.row').css('float', 'right'); 

	}

});
window.onresize = function() {
	if(window.innerWidth < 500){
		$('.col').css('width', 85 + '%'); 
		$('.container-article').css('width', 85 + '%'); 
		$('.container-index').css('width', 95 + '%'); 
		$('.row').css('float', 'left'); 
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
		$('.row').css('float', 'right'); 

	}	
};


