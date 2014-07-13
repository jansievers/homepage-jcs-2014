var jcsHomepage = {
	navigation: function() {
		$('nav').find('a').on('click', function() {
			var mainSection = $('main'),
				targetPos,
				targetLink = $(this).attr('data-target');

			// Scroll to position
			if (targetLink === 'about') {
				targetPos = 0;
			} else if (targetLink === 'work-experience') {
				targetPos = 780;
			} else if (targetLink === 'private') {
				targetPos = 1560;
			} else if (targetLink === 'contact') {
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

		$.each($('main section'), function() {
			var that = $(this); 
			if (that.attr('id') === 'about') {
				console.log('about section');
				that.find('h1')
					.text('Jan-Christoph Sievers');
				that.find('h2')
					.text('Senior Frontend Developer');
			
			}
		});
	}
};


$(document).ready(function() {
	jcsHomepage.showContent('english');	
	jcsHomepage.navigation();
});