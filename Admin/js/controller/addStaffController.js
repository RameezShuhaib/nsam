angular.module('adminApp').controller('addStaffController', function($scope,$http) {
    $scope.addStaff=function(){
        if($scope.name==null){
            alert("Staff Name is needed");
        }else if($scope.sid==null){
            alert("Staff ID is needed");
        }else if($scope.jod==null){
            alert("Staff Join Date is needed");
        }else if($scope.mob==null){
            alert("Staff Mobile No is needed");
        }else if($scope.email==null){
            alert("Staff Email ID is needed");
        }else{
            $http.post('view/php/insert_staff.php',
            {
                'name':$scope.name,
                'sid':$scope.sid,
                'jod':$scope.jod,
                'mob':$scope.mob,
                'email':$scope.email
            }).then(function(response){
                alert(response.data);
                $scope.name=null;
                $scope.sid=null;
                $scope.jod=null;
                $scope.mob=null;
                $scope.email=null;
            });
        }
    }
});