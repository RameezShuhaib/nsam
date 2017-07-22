<?php

require 'db.php';
$output=array();

$data = json_decode(file_get_contents("php://input"));
if(count($data) > 0)
{
	$section = mysqli_real_escape_string($connect, $data->sec_attend);
	$sem = mysqli_real_escape_string($connect, $data->sem_attend);
    
    $query="SELECT `usn`,  `name` FROM `student` WHERE `section_sec_id` = '$section' AND `section_semester_sem_id` ='$sem'";

	$result=mysqli_query($connect,$query);

	if(mysqli_num_rows($result) > 0){
		while($row=mysqli_fetch_assoc($result)){
			$output[]=$row;
		}
		
		echo json_encode($output);	
	}
} 

?>