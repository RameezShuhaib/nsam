	// create the module and name it scotchApp
	var app = angular.module('myApp', ['ngRoute']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the subject page
			.when('/subject', {
				templateUrl : 'pages/subject.html',
				controller  : 'subjectController'
			})

			// route for the attendance page
			.when('/attendance', {
				templateUrl : 'pages/attendance.html',
				controller  : 'attendanceController'
			})

			// route for the view page
			.when('/view', {
				templateUrl : 'pages/view.html',
				controller  : 'viewController'
			})

			// route for the report page
			.when('/report', {
				templateUrl : 'pages/report.html',
				controller  : 'reportController'
			})
			.when('/staffChangePassword', {
				templateUrl : 'pages/staffChangePassword.html',
				controller  : 'staffChangePasswordController'
			});
	});


	app.factory('LoginFactory', ['$http', function ($http) {
		var id='st002';
		var name='Teacher2';
		var password='st002';
		// $http.get('pages/php/getcred.php').success(function (d){
		// 	id = d[0];
		// 	name = d[1];
		// });
		return {
			getID: id,
			getName: name,
			getPassword: password
		};
	}]);

	// all the controllers are in js/controllers folders

	// create the controller and inject Angular's $scope
	// app.controller('mainController', function($scope) {
	// 	$scope.message = 'Display all the Personal details of the person';
	// });

	// app.controller('subjectController', function($scope) {
	// 	$scope.message = 'Enter the Subject which the Lecture wants to take.';
	// });

	// app.controller('attendanceController', function($scope) {
	// 	$scope.message = 'Enter the attendance.';
	// });

	// app.controller('viewController', function($scope) {
	// 	$scope.message = 'View the attendance based on the date.';
	// });

	// app.controller('reportController', function($scope) {
	// 	$scope.message = 'Generate Report.';
	// });

	// document.getElementById('homeBtn')
	// .addEventListener("click", function() {
    // 	profileInit();
	// });