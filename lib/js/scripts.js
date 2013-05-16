$(document).ready(function(){

	$('#whatwedo').waypoint(function() {
		$(this).addClass('active');
	}, { offset: '50%' });
	
	
//	$('section header h2').waypoint(function() {
//		$(this).addClass('sticky');
//		alert("class added");
//	}, { offset: '60px' });
	
	$('#whatwedo').waypoint(function() {
		$(this).find('header h2').addClass('sticky');
	}, { offset: '60px' });
	
		$('section, .trigger-shim').not('#whatwedo').waypoint(function() {
			$('#whatwedo header h2').removeClass('sticky');
		}, { offset: '60px' });
		
		
		
	$('#ourworld').waypoint(function() {
		$(this).find('header h2').addClass('sticky');
	}, { offset: '60px' });
	
		$('section, .trigger-shim').not('#ourworld').waypoint(function() {
			$('#ourworld header h2').removeClass('sticky');
		}, { offset: '60px' });
		

		
	$('#ourwork').waypoint(function() {
		$(this).find('header h2').addClass('sticky');
	}, { offset: '60px' });
	
		$('section, .trigger-shim').not('#ourwork').waypoint(function() {
			$('#ourwork header h2').removeClass('sticky');
		}, { offset: '60px' });
		

		
	$('#contact').waypoint(function() {
		$(this).find('header h2').addClass('sticky');
	}, { offset: '60px' });
	
		$('section, .trigger-shim').not('#contact').waypoint(function() {
			$('#contact header h2').removeClass('sticky');
		}, { offset: '60px' });
	
	

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