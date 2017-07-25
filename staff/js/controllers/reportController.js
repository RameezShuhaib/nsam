angular.module('myApp').controller('reportController', function($scope,$http,LoginFactory) {
    $scope.staff_id=LoginFactory.getID;
    $scope.loadSemester = function(){  
           $http.post("pages/php/semester_attendance.php",{'staffid':$scope.staff_id}).then(function(response){  
                $scope.semester = response.data;
           });

        }

        $scope.loadSubject = function(){  
           $http.get("pages/php/retrieve1.php").then(function(response){  
                $scope.subject = response.data;
           });

        }  
        
        $scope.loadSection = function(){  
             $http.post("pages/php/retrieve2.php").then(function(response){  
                  $scope.section = response.data;  
             }); 
        }

        $scope.attendanceView = function(){
              $scope.date = document.getElementById('x').value;
              // alert($scope.date);
           
           $http({  
                     method:'POST',
                     url:'pages/php/retrieve_attendance.php',  
                     data:{'selectedDate':$scope.date,
                          'sem_attend':$scope.sem_attend,
                          'sub_attend':$scope.sub_attend,
                          'sec_attend':$scope.sec_attend,
                          'staffid':$scope.staff_id
                      		}
              }).then(function(response){
             $scope.StudAtt = response.data;
             // console.log(response.data);         
               });
            
          }
          $scope.loadSemester();
});