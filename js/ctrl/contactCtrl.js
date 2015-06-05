app.controller('contactCtrl', function($scope){
	console.log("contactCtrl");
	
	var map;
	function init(){
		var myLatlng = new google.maps.LatLng(37.5464573, 127.0726705);
		var mapOptions = {
			zoom: 16,
			panControl: false,
		    zoomControl: true,
		    scaleControl: false,
		    mapTypeControl: false,
		    streetViewControl: false,
		    scrollwheel: false,
			center: myLatlng
		};
		map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'NZ Design'
		});
	};

	init();
});