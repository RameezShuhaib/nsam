<?php

require 'db.php';

$output=array();

$data = json_decode(file_get_contents("php://input"));

if(count($data) > 0)
{
	$date = mysqli_real_escape_string($connect, $data->selectedDate);
	$section = mysqli_real_escape_string($connect, $data->sec_attend);
	$sem = mysqli_real_escape_string($connect, $data->sem_attend);
	$staff = mysqli_real_escape_string($connect, $data->staffid);
	$subject = mysqli_real_escape_string($connect, $data->sub_attend);
    
	//$valid_date = date( 'Y/m/d', strtotime($date));
    //$date = strtotime("+1 day", strtotime("2007-02-28"));
    //echo date("Y-m-d", $date);
    //echo($subject);
    // echo("\n");
    // echo($valid_date);

    //$query="SELECT date_attend, status, student FROM attendance WHERE staff_staff_id = '$staff' AND date_attend = '$date' AND section_sec_id = '$section' AND section_semester_sem_id = '$sem' AND subject_list_sub_id = '$subject'";
    $query="SELECT * FROM attendance WHERE date_attend = '$date' AND staff_staff_id = '$staff' AND section_sec_id = '$section' AND section_semester_sem_id = '$sem' AND subject_list_sub_id = '$subject'";
	$result=mysqli_query($connect,$query);

	if(mysqli_num_rows($result) > 0){
		while($row=mysqli_fetch_assoc($result)){
			$output[]=$row;
		}
		
		echo json_encode($output);	
		
	}
} 

?>