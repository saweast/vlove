app.controller('Homepage', ['$scope', function($scope) {
	$scope.homepage = 'Головна';
}]);
app.controller('About', ['$scope', function($scope) {
	$scope.about = 'Lorem ipsum dolor sit amet.'
}]);
app.controller('Date', ['$scope', function($scope) {
	$scope.date = new Date();
}]);