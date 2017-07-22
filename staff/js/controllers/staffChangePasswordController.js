angular.module('myApp').controller('staffChangePasswordController', function($scope,$http,LoginFactory) {
    $scope.staff_password = LoginFactory.getPassword;
    $scope.staff_id = LoginFactory.getID;
    $scope.changePassword=function(){
    	if($scope.oldpass!=$scope.staff_password){
    		alert("Incorrect Password");
    	}else if($scope.newpass!=$scope.renewpass){
    		alert("Incorrect Password");
    	}else{
    		$http.post("pages/php/changeStaffPassword.php",{'staffid':$scope.staff_id,'password':$scope.newpass})
    		.then(function(response){
    			alert(response.data);
    		});
    	}
    }
});