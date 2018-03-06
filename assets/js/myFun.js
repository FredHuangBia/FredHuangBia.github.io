function showImgs(){
	var folder = "images/photography/";
	document.write('aaaaaaaaaaaaaaaaaaaaaaaaaa');

	$.ajax({
	    url : folder,
	    success: function (data) {
	        $(data).find("a").attr("href", function (i, val) {
	            if( val.match(/\.(jpe?g|png|jpeg)$/) ) { 
	                $("body").append( "<img src='"+ folder + val +"'>" );
	            } 
	        });
	    }
	});

}