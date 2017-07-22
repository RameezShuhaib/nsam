<?php

require 'db.php';
$output=array();
$data = json_decode(file_get_contents("php://input"));
if(count($data) > 0){
		$sem = mysqli_real_escape_string($connect,$data->sem);
		$subtype = mysqli_real_escape_string($connect,$data->subtype);
		$query="
				select 
				SL.sub_name
				from
				subject_list as SL,
				subject_sem as SS
				where
				(SL.sub_id=SS.subject_list_sub_id)
				AND 
				(SS.semester_sem_id='$sem')
				AND 
				(SL.sub_type='$subtype')
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