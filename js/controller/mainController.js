rishab.controller("mainController",['$scope', function($scope) {
	$scope.contentType = "about";

	$scope.setContentType = function(contentType) {
		$scope.contentType = contentType;
	};
}]);