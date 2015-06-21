app.factory('dbService', function($http, $q){
	init();
	var allPics = null;
	function init(){
		var defer = $q.defer();
		$http.get('db.json').success(function(res){
			console.log(res);
			allPics = res.designs;
			defer.resolve(allPics);
		});
		return defer.promise;
	}
	var getPics = function(zagvar_name){
		var defer = $q.defer();
		if(allPics){
			allPics.forEach(function(design){
				if(design.design_name === zagvar_name){
					defer.resolve(design);
				}
			});
		}else{
			init().then(function(){
				allPics.forEach(function(design){
					if(design.design_name === zagvar_name){
						defer.resolve(design);
					}
				});
			})
		}
		return defer.promise;
	}
	return{
		getPics:getPics
	}
})