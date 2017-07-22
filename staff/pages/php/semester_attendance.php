<?php

require 'db.php';
$output=array();
$data = json_decode(file_get_contents("php://input"));
if(count($data) > 0){
	$staffid = mysqli_real_escape_string($connect,$data->staffid);
	
	$query="SELECT DISTINCT section_semester_sem_id from assign_subject where staff_staff_id = '$staffid'";
	$result=mysqli_query($connect,$query);

	if(mysqli_num_rows($result) > 0){
		while($row=mysqli_fetch_array($result)){
			$output[]=$row;
		}

		echo json_encode($output);
	}
}
?>