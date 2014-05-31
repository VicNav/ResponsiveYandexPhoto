$(document).ready(function() {
	function replaceImg() {
		var sizes = {
			'orig':99999,
			'XXXL':1280,
			'XXL': 1024,
			'XL':  800,
			'L':   500,
			'M':   300,
			'S':   150,
			'XS':  100,
		}
		$('img.yaPhoto').each(function() {
			var width = $(this).width();
			for(var p in sizes) {
				if (width < sizes[p]) {
					var size = sizes[p];
					var postfix = p;
				};
			};
			console.log(width, size, postfix);
			var src =$(this).attr('src');
			src = src.replace(/_([A-Z]+)$/gi, '_'+postfix);
			$(this).attr('src', src);
		});
	}
	$(window).resize(replaceImg);
	replaceImg();
});