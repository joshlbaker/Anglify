angular.module('Anglify', [])

	.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.photos = [];

		$scope.searchTag = function() {
			// console.log($scope.tag);
								// https://api.soundcloud.com/tracks?q=3005&client_id=9116f0cf4ee47f19616a58e5f4640e52
			var url =	'https://api.spotify.com/v1/search?q=' + $scope.tag + '&type=track&callback=JSON_CALLBACK';
			$http.get(url)
			// console.log($scope.tag);
			.then(function (response) {
				console.log(response.data.tracks.items[0].external_urls.spotify);
				$scope.photos = response.data.tracks.items
			});
		};
	}]);

