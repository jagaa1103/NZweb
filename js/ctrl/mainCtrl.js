app.controller('mainCtrl', function($scope, $state, dbService){
	console.log("Hello mainCtrl");
	$scope.showSlide = function(zagvar_name){
		$state.go('picSlide', {"zagvar_name":zagvar_name});
	}
});