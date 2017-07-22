angular.module('myApp').controller('subjectController', function($scope,$http,LoginFactory) {
    $scope.staff_id = LoginFactory.getID;
    console.log($scope.staff_id);
    $scope.init=function(){
        $scope.subtype="0";
 		    $scope.displayData();
      	$scope.selectCourse();
    } 
    $scope.displayData=function(){
      $http.post("pages/php/selectall.php",{'staff':$scope.staff_id}).then(function(response){
        $scope.detail=response.data;
      });
    }
    $scope.selectCourse=function(){          
      $scope.cour="Select Course";
      $scope.sem="Select Semester";
      $scope.sec="Select Section";
      $scope.sub="Select Subject";    
      $http.get("pages/php/course.php").then(function(response){
        $scope.course=response.data;
      });
    } 
    $scope.selectSemester=function(){
      $scope.sem="Select Semester";
      $scope.sec="Select Section";
      $scope.sub="Select Subject";
      $scope.section=null;
      $scope.subject=null;
      $http.post("pages/php/getcourseid.php",{'coursename':$scope.cour}).then(function(response){
        $scope.A=response.data;
        $scope.courseid=$scope.A[0].c_id;
      }); 
      $http.post("pages/php/semester.php",{'coursename':$scope.cour}).then(function(response){
        $scope.semester=response.data;
      }); 
    }  
    $scope.selectSectionSubject=function(){
      $scope.sec="Select Section";
      $scope.sub="Select Subject";
      $scope.len=$scope.semester.length;
      var i;
      for(i=0;i<$scope.len;i++){
          if($scope.semester[i].sem_id[1]==$scope.sem){
            $scope.semid=$scope.semester[i].sem_id;
            break;
        }
      }

      $http.post("pages/php/section.php",{'sem':$scope.semid}).then(function(response){
        $scope.section=response.data;
      });

      $http.post("pages/php/subject.php",{'sem':$scope.semid,'subtype':$scope.subtype}).then(function(response){
        $scope.subject=response.data;
      });
    }
    $scope.selectSectionID=function(){
      $http.post("pages/php/getsectionid.php",{'sectionname':$scope.sec,'sem':$scope.semid}).then(function(response){
        $scope.B=response.data;
        $scope.secid=$scope.B[0].sec_id;
      });
    }
    $scope.selectSubjectID=function(){
      $http.post("pages/php/getsubjectid.php",{'subjectname':$scope.sub}).then(function(response){
        $scope.C=response.data;
        $scope.subid=$scope.C[0].sub_id;
      });
    }
    $scope.insertData = function(){        
      if($scope.cour == "Select Course")  
      {  
        alert("Course is required");  
      }  
      else if($scope.b == "Select Semester")  
      {  
        alert("Semester is required");  
      }
      else if($scope.sec == "Select Section")  
      {  
        alert("Section is required");  
      }
      else if($scope.sub == "Select Subject")  
      {  
        alert("Subject is required");  
      }       
      else  
      {                      
        $http({  
          method:'POST',
          url:'pages/php/insert.php',  
          data:{
            'cour':$scope.courseid,
            'sem':$scope.semid,
            'sec':$scope.secid,
            'sub':$scope.subid,
            'staff':$scope.staff_id}           
          }).then(function(response){  
              alert(response.data); 
              $scope.displayData();                  
        });                   
      }  
    }
    $scope.deleteData=function(a,b,c){
      $http.post("pages/php/getsectionid.php",{'sectionname':b,'sem':c}).then(function(response){
                  $scope.C=response.data;
                  $scope.section=$scope.C[0].sec_id;
                  if(confirm("Are you sure you want to delete this data?"))  
                   {  
                        $http.post("pages/php/delete_subject.php",{'staffid':$scope.staff_id,'subid':a,'sec':$scope.section,'semid':c})  
                        .then(function(response){  
                            alert(response.data);  
                            $scope.displayData();  
                            console.log($scope.section);
                        });  
                   }  
                   else  
                   {  
                        return false;  
                   }  
      });
      
    }
    $scope.init();
});