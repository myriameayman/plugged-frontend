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
})
