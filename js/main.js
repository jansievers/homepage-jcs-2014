var jcsHomepage = {


	main: function() {
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
		})
	}


}

jcsHomepage.main();