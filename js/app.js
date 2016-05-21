$(document).ready(function() { 
	var clickState = false;
$(".hamburger") .on ("click" , function(){ 
	 if (!clickState) {
	$(".menu").addClass('active' );
$("body").addClass('over' );
 
 
	clickState = true;
  } 
  else if (clickState) {
   $(".menu").removeClass('active' );
 $("body").removeClass('over' );
    clickState = false;
  }
});
});

$(document).ready(function(){

$(".kill").click(function(){
	$(".loading-screen").hide( );
	});
});
 

 