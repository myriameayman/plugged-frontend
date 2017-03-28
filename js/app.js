	var input;
	var index = 1;
	var numSlides;
	var showSlides;
	var showDots;
	var cover; 
	var type_arrow;
$(document).foundation()
$(document).ready(function() {

	var slidersAv = document.getElementsByClassName("slidesAv");
	//alert(slidersAv.length);
	for(var i=1; i<=slidersAv.length; i++) {
	  	slider(i);
  	}
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

		$('label').click(function() {
		var labelID = $(this).attr('class');
		var parent = $(this).parent().parent().parent().parent().attr('id');
		if (parent) {
			parent = parent.substr(parent.length - 1);
			numSlides = $( "#slider_id_"+parent).find('.slide').length;
			showSlides = $('#slider_id_'+parent).attr('data-showSlides');
			showSlides++;
			if(showSlides == 2) {
				width =100;
			}else{
				width = 100/(showSlides);
			}
			showSlides--;	
		}
		var outOfVar = 1;
		if (labelID == "next" || labelID == "prev") {
		for (var i = 0; i < Math.ceil(numSlides/showSlides);i++) { 
				//alert($('#input-dots'+parent).children()[i].style.backgroundColor);
				if ($('#input-dots'+parent).children()[i].style.backgroundColor == "black") {
					//alert("ggggg");
					outOfVar = i;
					//alert(i);
				}
				else $('#input-dots'+parent).children()[i].style.backgroundColor = '#bbb9bf';
		}
		$('#input-dots'+parent).children()[outOfVar].style.backgroundColor = '#bbb9bf';
		outOfVar++;
		}
		//alert("first out of var: " + outOfVar);
		//alert("math:" + Math.ceil(numSlides/showSlides));
		if (labelID == "next") {
			outOfVar++;
			if (outOfVar >= Math.ceil(numSlides/showSlides)) {
			outOfVar = 1;
					}
			//alert("outOfVar" + outOfVar);
			$('#input-dots'+parent).find("#img-dot-"+outOfVar).css('background-color', 'black');
			//$('#input-dots'+slider_id).find('#img-dot-1').css('background-color', 'black');
			//alert($('#input-dots'+parent).find("#img-dot-"+outOfVar));

			for ( var i = showSlides-1; i >= 0;i--) {
				$( "#slider_id_"+parent).find('.slide'+(index)).removeClass("checkedClass");
				$( "#slider_id_"+parent).find('.slide'+(index)).addClass("uncheckedClass");
				index--;
			}
			index ++;
			index = index + showSlides;
			if (index > numSlides) index = 1;
			//alert(index);
			if (index + showSlides > numSlides) {
				var newWidth = width*showSlides/(numSlides - index + 1); 
				//alert(newWidth);
				for (var i = 0; i < showSlides; i++) {
					$( "#slider_id_"+parent).find('.slide'+index).removeClass("uncheckedClass");
					$( "#slider_id_"+parent).find('.slide'+index).addClass("checkedClass");
					$( "#slider_id_"+parent).find('.slide'+index).css('margin-left',(i)*newWidth+(showSlides*50/100) + '%');
					$( "#slider_id_"+parent).find('.slide'+index).css('width',newWidth + '%');
					index++;
				}
				index--;
			}
			else {
				for ( var i = 0; i < showSlides;i++) {
					$( "#slider_id_"+parent).find('.slide'+(index)).removeClass("uncheckedClass");
					$( "#slider_id_"+parent).find('.slide'+(index)).addClass("checkedClass");
					$( "#slider_id_"+parent).find('.slide'+index).css('margin-left',(i)*width+(showSlides*50/100) + '%');
					index++;
				}
				index--;
				//alert(index);
			}
		}
		else if (labelID == "prev"){
			outOfVar --;
			if (outOfVar <=0)
			outOfVar = Math.ceil(numSlides/showSlides);
			$('#input-dots'+parent).find("#img-dot-"+outOfVar).css('background-color', 'black');

			for ( var i = showSlides-1; i >= 0;i--) {
				$( "#slider_id_"+parent).find('.slide'+(index)).removeClass("checkedClass");
				$( "#slider_id_"+parent).find('.slide'+(index)).addClass("uncheckedClass");
				index--;
			}
			
			index ++;
			//alert(index);
			index = index - showSlides;
			//alert(index);
			if (showSlides == 1 && index <1) index = numSlides; 
			if (index < 1) index = numSlides+index + 2;
			//alert(index);
			
			if (index + showSlides > numSlides) {
				var newWidth = width*showSlides/(numSlides - index + 1); 
				//alert("hena");
				//alert(newWidth);
				for (var i = 0; i < showSlides; i++) {
					$( "#slider_id_"+parent).find('.slide'+index).removeClass("uncheckedClass");
					$( "#slider_id_"+parent).find('.slide'+index).addClass("checkedClass");
					$( "#slider_id_"+parent).find('.slide'+index).css('margin-left',(i)*newWidth+(showSlides*50/100) + '%');
					$( "#slider_id_"+parent).find('.slide'+index).css('width',newWidth + '%');
					index++;
				}
				index--;
			}
			
			else {
				for ( var i = 0; i < showSlides;i++) {
					$( "#slider_id_"+parent).find('.slide'+(index)).removeClass("uncheckedClass");
					$( "#slider_id_"+parent).find('.slide'+(index)).addClass("checkedClass");
					$( "#slider_id_"+parent).find('.slide'+index).css('margin-left',(i)*width+(showSlides*50/100) + '%');
					index++;
				}
				index--;
			}
		}
		else if (labelID == "nav-dot") {
			var image = $(this).attr('id').split("-")[2];
			var dotLabelID = $(this).parent().attr('id');
			dotLabelID = dotLabelID.substr(dotLabelID.length - 1);
			numSlides = $( "#slider_id_"+dotLabelID).find('.slide').length;
			showSlides = $('#slider_id_'+dotLabelID).attr('data-showSlides');
			showSlides++;
			if(showSlides == 2) {
				width =100;
			}else{
			width = 100/(showSlides);
			}
			showSlides--;	
			
			if (image > 1)
				image = (image-1)*showSlides + 1 
			for ( var i = 0; i < showSlides;i++) {
				$( "#slider_id_"+dotLabelID).find('.slide'+(index)).removeClass("checkedClass");
				$( "#slider_id_"+dotLabelID).find('.slide'+(index)).addClass("uncheckedClass");
				index--;
			}
			index = image*1;
			//alert("index:" + (index + showSlides));
			for (var i = 0; i < Math.ceil(numSlides/showSlides);i++) { 
				$('#input-dots'+dotLabelID).children().css('background-color', '#bbb9bf');
			}
			//alert($(this).attr('id'));
			$(this).css('background-color', 'black');

			if (index + showSlides > numSlides) {
				var newWidth = width*showSlides/(numSlides - index + 1); 
				//alert("ana  f el 7eta di")
				//alert(newWidth);
				for (var i = 0; i < showSlides; i++) {
					$( "#slider_id_"+dotLabelID).find('.slide'+(index)).removeClass("uncheckedClass");
					$( "#slider_id_"+dotLabelID).find('.slide'+(index)).addClass("checkedClass");
					$( "#slider_id_"+dotLabelID).find('.slide'+index).css('margin-left',(i)*newWidth+(showSlides*50/100) + '%');
					$( "#slider_id_"+dotLabelID).find('.slide'+index).css('width',newWidth + '%');
					index++;
				}
				index--;
			}
			else {
				for ( var i = 0; i < showSlides;i++) {
					$( "#slider_id_"+dotLabelID).find('.slide'+(index)).removeClass("uncheckedClass");
					$( "#slider_id_"+dotLabelID).find('.slide'+(index)).addClass("checkedClass");
					$( "#slider_id_"+dotLabelID).find('.slide'+index).css('margin-left',(i)*width+(showSlides*50/100) + '%');
					index++;
				}
				index--;
			}
		}
		if (parent)
		removeMargin(showSlides,parent);
		else removeMargin(showSlides,dotLabelID);

	});

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
			if(comment == "") {
				return false;
			}
			var comment_name= "maggie sourial";
			var time = "Just now";
			$(".old-comments").append("<div class='comment'><div class='profile-pic' style='background-image: url(../Images/profile3.jpg)'></div><div class= 'comment-body'><h6 class='comment-name'>"+
				comment_name+"</h6><i class='icons fa fa-calendar-o' aria-hidden='true'></i><p class= 'mini-info-txt mini-info-text-colour'>"+
				time+"</p><p>"+comment+"</p></div></div></div></div>");
			 $('.old-comments').scrollTop($('.old-comments').scrollTop()+150);
			 $(".new-comment input").val("");
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
function slider(slider_id) {
	input = $('.img-1').val();
    index = 1;
	$('.slide'+index).addClass("checkedClass");
    numSlides = $( "#slider_id_"+slider_id ).find('.slide').length;
    showSlides = $('#slider_id_'+slider_id).attr('data-showSlides');
    showDots = $('#slider_id_'+slider_id).attr('data-dots');
    showArrows = $('#slider_id_'+slider_id).attr('data-arrow');
	data_type = $('#slider_id_'+slider_id).attr('data-type-arrow');
	//alert(data_type);
	if(showArrows == "false") {
		//alert(slider_id);
		$( "#slider_id_"+slider_id ).find('.nav').css('display','none');
		$( "#slider_id_"+slider_id ).find('.but').css('display','none');		
	}
	else {
		$( "#slider_id_"+slider_id ).find('.nav').css('display','block');
		$( "#slider_id_"+slider_id ).find('.prev').css('display','block');
		$( "#slider_id_"+slider_id ).find('.next').css('display','block');		
	}

	//if (showSlides >1)
	showSlides++;
	var width = 100/(showSlides);
	if(showSlides==2) {
		width = 100;
	}
	//if (showSlides >1)
	showSlides--;	
	//alert(showSlides*width);
	$( "#slider_id_"+slider_id ).find('.next').css('right', '-95%');
	$( "#slider_id_"+slider_id ).find('.next').css('top', '65%');
	var generateHere = document.getElementById("input-dots"+slider_id);
	if (showSlides == 1) {
	 	$( "#slider_id_"+slider_id ).find('.next').css('left', ((showSlides-1)*width/2)+'%');
	   	$("#input-dots"+slider_id).css('position','absolute');
	   	$("#input-dots"+slider_id).css('top','77%');
	   	$("#input-dots"+slider_id).css('right','0%');
	}
	else $( "#slider_id_"+slider_id ).find('.next').css('left', (showSlides*width/2)+'%');
	$( "#slider_id_"+slider_id ).find('hr').css('width', (showSlides*width+1)+'%');
	$( "#slider_id_"+slider_id ).find('hr').css('margin-left', (-1*showSlides*width/2)+'%');

	var dots = "";
	for (var i = 0; i < Math.ceil(numSlides/showSlides);i++) 
		dots = dots + " <label for=img-" + (i+1)+ " class='nav-dot' id='img-dot-" + (i+1)+ "'></label>";

	generateHere.innerHTML = dots;
	$('#input-dots'+slider_id).find('#img-dot-1').css('background-color', 'black');
			
	$( "#slider_id_"+slider_id ).find('.slide').css('width',width + '%');
	if (showSlides > 1)
		$( "#slider_id_"+slider_id ).find('.slide').css('border', 3*width/showSlides+'px solid #e6e6e6');
	if (index + showSlides > numSlides) {
		var newWidth = width*showSlides/(numSlides - index + 1);  
		for (var i = 0; i < showSlides; i++) {
			$( "#slider_id_"+slider_id ).find('.slide'+index).removeClass("uncheckedClass");
			$( "#slider_id_"+slider_id ).find('.slide'+index).addClass("checkedClass");
			$( "#slider_id_"+slider_id ).find('.slide'+index).css('margin-left',(index - 1)*width+(showSlides*50/100) + '%');
			$( "#slider_id_"+slider_id ).find('.slide'+index).css('width',newWidth + '%');
			index++;
		}
		index--;
	}
	else {
		for (var i = 0; i < showSlides; i++) {
			$( "#slider_id_"+slider_id ).find('.slide'+index).removeClass("uncheckedClass");
			$( "#slider_id_"+slider_id ).find('.slide'+index).addClass("checkedClass");
			$( "#slider_id_"+slider_id ).find('.slide'+index).css('margin-left',(index - 1)*width+(showSlides*50/100) + '%');
			index++;
		}
		index--;
	}
	//alert("wasalt hena");
	removeMargin(showSlides,slider_id);
	if (showArrows == "true" && data_type == "2") {
		$( "#slider_id_"+slider_id ).find('.next').css('top', '28%');
		$( "#slider_id_"+slider_id ).find('.next').css('left', '1%');
	}
	if(showDots =="false") {
		$('.nav-dots'+slider_id).css('display','none');
		//alert("fff");
	}
	}
function removeMargin(showSlides,slider_id) {
	if (showSlides == 1)
		$( "#slider_id_"+slider_id ).find('.slide').css('margin-left',0);
}