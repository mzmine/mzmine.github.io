// Add here all your JS customizations
$(document).ready(function() {
	$('#imgGallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
		  markup: '<div class="mfp-figure mfp-figure-custom">'+
					'<div class="modal-header">'+
					  '<div class="mfp-close"></div>'+
					  '<div class="mfp-bottom-bar">'+
					    '<div class="mfp-title"></div>'+
						//'<div class="mfp-counter"></div>'+
					  '</div>'+
					'</div>'+
					'<div class="mfp-img"></div>'+
				  '</div>',

			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});