var jcsHomepage = {
	breakPoints: [0, 780, 1560, 2340, 3120],

	navigation: function() {
		$('nav').find('a').on('click', function() {
			var mainSection = $('main'),
				targetXPos,
				targetLink = $(this).attr('data-target');
			// Scroll to position
			if (targetLink === 'section01') {
				targetXPos = jcsHomepage.breakPoints[0];
			} else if (targetLink === 'section02') {
				targetXPos = jcsHomepage.breakPoints[1];
			} else if (targetLink === 'section03') {
				targetXPos = jcsHomepage.breakPoints[2];
			} else if (targetLink === 'section04') {
				targetXPos = jcsHomepage.breakPoints[3];
			}
			//window.scrollTo(targetPos, 0);
			$('html').animate({
		        scrollLeft: targetXPos
		    }, 1000, function() {
		    	console.log('Anim ready');
		    	// Reset active sections
				//mainSection.find('.active').removeClass('active');
				// Set section active
				//mainSection.find('#' + targetLink).addClass('active');
		    });
		});
	},
	showContent: function(language) {
		console.log('Show content in ' + language + '.');
		// Loop to section data ...
		var contentSection;
		$.each(sectionData[language], function(index, value) {
			// Get id for section select
			contentSection = $('#' + index);
			// Get an fill content sections elements
			$.each(value, function(index, value) {
				// Find content class and add content
				contentSection.find('.' + index).html(value); 
			});
		});
	},
	watchScrollPosition: function(w) {
		var currentScrollPos,
		    mainSection = $('main'),
		    offset = -100;
		w.setInterval(function() {
			currentScrollPos = $('html').scrollLeft();
			//console.log(currentScrollPos);
			mainSection.find('.active').removeClass('active');

			if (currentScrollPos < (jcsHomepage.breakPoints[1] + offset)) {
				console.log('1. Section');
				mainSection.find('#section01').addClass('active');
			} else if (currentScrollPos < (jcsHomepage.breakPoints[2] + offset)) {
				console.log('2. Section');
				mainSection.find('#section02').addClass('active');
			} else if (currentScrollPos < (jcsHomepage.breakPoints[3] + offset)) {
				console.log('3. Section');
				mainSection.find('#section03').addClass('active');
			} else if (currentScrollPos < (jcsHomepage.breakPoints[4] + offset)) {
				console.log('4. Section');
				mainSection.find('#section04').addClass('active');
			}
		}, 20);

	}
};

$(document).ready(function() {
    var documentLanguage = $('html').attr('lang');

	jcsHomepage.showContent(documentLanguage);	// en = English // de = German
	jcsHomepage.navigation();
	jcsHomepage.watchScrollPosition(window);
});