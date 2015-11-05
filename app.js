angular.module('Anglify', [])

	.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.tracks = [];

		$scope.searchTag = function() {
			var url =	'https://api.spotify.com/v1/search?q=' + $scope.tag + '&type=track&callback=JSON_CALLBACK';
			$http.get(url)
			.then(function (response) {
				$scope.tag = '';
				$scope.tracks = response.data.tracks.items
			});
		};
	}]);
