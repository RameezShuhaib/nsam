angular.module('myApp').controller('attendanceController', function($scope,$http,LoginFactory) {
	$scope.staff_id=LoginFactory.getID;
    function t() {
        today = document.getElementById('x').value;
        console.log(today);
      }
      var status = [];
        $scope.stats = '1';
        
        $scope.test=function(ind,s){
          status[ind] = s; 
        }


        $scope.init=function(){
             
             $scope.loadSemester();
             $scope.period = ["1","2","3","4","5","6","7","8","9","10"];
         }

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

        $scope.insert_attend=function(){
              var arr=[];
              $scope.date = document.getElementById('x').value;
              // alert($scope.date); 
              
              for(i=0;i<$scope.len;i++){
                  arr[i]={'usn':$scope.Student[i].usn, 
                  'name':$scope.Student[i].name, 
                  'selectedDate':$scope.date,
                  'sem_attend':$scope.sem_attend,
                  'sub_attend':$scope.sub_attend,
                  'sec_attend':$scope.sec_attend,
                  'staffid':$scope.staff_id,
                  'selectedPeriod':$scope.selectedPeriod,
                  'stats':status[i]};
              } 
               
               $scope.value = angular.toJson(arr);                          
                          $http({  
                                       method:'POST',
                                       url:'pages/php/insert_attend.php',       
                                       data:$scope.value
                                    
                                  }).then(function(response){  
                                       alert(response.data);
                                  });
         }   

        $scope.displayStud = function(){
           $http({  
                     method:'POST',
                     url:'pages/php/retrieve.php',  
                     data:{'sec_attend':$scope.sec_attend,'sem_attend':$scope.sem_attend,'staff':$scope.staff_id}
              }).then(function(response){
             $scope.Student = response.data;
             $scope.len=$scope.Student.length;         
               });
          }
        $scope.init();
});