var jcsHomepage = {
	navigation: function() {
		$('nav').find('a').on('click', function() {
			var mainSection = $('main'),
				targetPos,
				targetLink = $(this).attr('data-target');
			// Scroll to position
			if (targetLink === 'section01') {
				targetPos = 0;
			} else if (targetLink === 'section02') {
				targetPos = 780;
			} else if (targetLink === 'section03') {
				targetPos = 1560;
			} else if (targetLink === 'section04') {
				targetPos = 2340;
			}
			window.scrollTo(targetPos, 0);

			// Reset active sections
			mainSection.find('.active').removeClass('active');
			// Set section active
			mainSection.find('#' + targetLink).addClass('active');
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
	}
};

$(document).ready(function() {
    var documentLanguage = $('html').attr('lang');

	jcsHomepage.showContent(documentLanguage);	// en = English // de = German
	jcsHomepage.navigation();
});