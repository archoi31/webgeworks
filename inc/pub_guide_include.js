var baseURL = '../';
var include = {
	meta : function(){
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
		document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
	},
	styles : function(){
		document.write('<link rel="stylesheet" href="'+baseURL+'css/global.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="'+baseURL+'css/layout.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="'+baseURL+'css/content.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" type="text/css" />');
	},
	scripts : function(){
		document.write('<script src="'+baseURL+'js/lib/jquery-3.6.4.min.js"></script>');
		document.write('<script src="'+baseURL+'js/lib/jquery-ui-1.13.2.min.js"></script>');
		document.write('<script src="'+baseURL+'js/content_ui.js"></script>');
		document.write('<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>');
	},
	title : function(){
		document.write('<title>WEDGEWORKS</title>');
	},
	header : function(){
		
	},
};