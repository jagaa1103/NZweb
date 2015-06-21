app.controller('picSlideCtrl', function($scope, dbService, $state, $stateParams){
	console.log($stateParams);
	var pics = [];
	$scope.zagvar_name = $stateParams.zagvar_name;

	dbService.getPics($scope.zagvar_name).then(function(design){
		$scope.pics = design.design_pics;
		console.log($scope.pics);
		$scope.changeSlide(0);
	});

	$scope.slideNum = 1;

	$scope.changeSlide = function(pic_number){
		$scope.slidePic = $scope.pics[pic_number].pic_name;
	}

	$scope.picSelected = function(pic_no){
		$scope.changeSlide(pic_no-1);
	}
});