<?php

require 'db.php';
$output=array();
$data = json_decode(file_get_contents("php://input"));
if(count($data) > 0){
	$coursename = mysqli_real_escape_string($connect,$data->coursename);
	$query="select 
			c_id 
			from 
			course 
			where
			c_name='$coursename'
			";

	$result=mysqli_query($connect,$query);

	if(mysqli_num_rows($result)>0){
		while($row=mysqli_fetch_array($result)){
			$output[]=$row;
		}

		echo json_encode($output);
	}
}
?>