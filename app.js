angular.module('Anglify', [])

	.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
		$scope.searchTag = function() {
			console.log($scope.tag);
			var url = 
			$http.jsonp()
		};
	}]);