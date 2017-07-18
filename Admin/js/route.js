var app = angular.module('adminApp',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'view/home.html',
            controller : 'homeController'
        })
        
        .when('/staff', {
            templateUrl : 'view/staff.html',
            controller : 'staffController'
        })
        
        .when('/student', {
            templateUrl : 'view/student.html',
            controller : 'studentController'
        })
        
        .when('/sms', {
            templateUrl : 'view/sms.html',
            controller : 'smsController'
        })
        
        .when('/addStaff', {
            templateUrl : 'view/addStaff.html',
            controller : 'addStaffController'
        })
        
        .when('/addStudent', {
            templateUrl : 'view/addStudent.html',
            controller : 'addStudentController'
        })
        
        .when('/editStaff', {
            templateUrl : 'view/editStaff.html',
            controller : 'editStaffController'
        })
        
        .when('/editStudent', {
            templateUrl : 'view/editStudent.html',
            controller : 'editStudentController'
        });
});