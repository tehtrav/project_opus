$(document).ready(function(){

	$('#whatwedo').waypoint(function() {
		$(this).addClass('active');
	}, { offset: '50%' });


	// team section
	
	$('#team .team-member').click(function() {
		$(this).toggleClass('active');
		return false;
	});
	
	
	$('#ourwork .project').click(function() {
		$(this).toggleClass('active');
		return false;
	});
	
	
	$('.menu-toggle').click(function() {
		$('#intro-nav').toggleClass('active');
		return false;
	});





}); //end doc ready