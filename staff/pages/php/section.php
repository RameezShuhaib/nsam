<?php

require 'db.php';
$output=array();
$data = json_decode(file_get_contents("php://input"));
if(count($data) > 0){
	$sem = mysqli_real_escape_string($connect,$data->sem);

	$query="
		select 
		sec_name
		from
		section
		where
		semester_sem_id='$sem'
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