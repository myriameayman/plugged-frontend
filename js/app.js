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
		// var numRows = document.getElementsByClassName('row').length;
		var numCols = document.getElementsByClassName('col').length;
		// var colsPerRows = 1 + windowHeight/300;
	// alert("hi");
	 $('.img').css('height', windowHeight/(4) + 'px'); 
	 // $('.img').css('width', windowHeight/(colsPerRows) + 'px'); 
	 // $('[class*=\'col\']').css('margin', 0.75*windowWidth*0.0011 + '%'); 
	 // $('.col').css('width', (100)/(colsPerRows)   + '%'); 


});

