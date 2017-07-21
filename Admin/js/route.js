var app = angular.module('adminApp',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'view/home.html',
            controller : 'homeController'
        })
        
        .when('/courseAndSemester', {
            templateUrl : 'view/courseAndSemester.html',
            controller : 'courseAndSemesterController'
        })

        .when('/section', {
            templateUrl : 'view/section.html',
            controller : 'sectionController'
        })

        .when('/subject', {
            templateUrl : 'view/subject.html',
            controller : 'subjectController'
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
        })
        
        .when('/addCourseAndSemester', {
            templateUrl : 'view/addCourseAndSemester.html',
            controller : 'addCourseAndSemesterController'
        })
        
        .when('/editCourseAndSemester', {
            templateUrl : 'view/editCourseAndSemester.html',
            controller : 'editCourseAndSemesterController'
        })
        
        .when('/addSection', {
            templateUrl : 'view/addSection.html',
            controller : 'addSectionController'
        })
        
        .when('/editSection', {
            templateUrl : 'view/editSection.html',
            controller : 'editSectionController'
        })
        
        .when('/addSubject', {
            templateUrl : 'view/addSubject.html',
            controller : 'addSubjectController'
        })
        
        .when('/editSubject', {
            templateUrl : 'view/editSubject.html',
            controller : 'editSubjectController'
        });
});