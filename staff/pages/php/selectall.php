<?php

require 'db.php';
$output=array();
$data = json_decode(file_get_contents("php://input"));
if(count($data) > 0){
$staff = mysqli_real_escape_string($connect, $data->staff);

$query="select distinct
SL.sub_name,
A.sub_id,
ST.st_name,
A.section_semester_sem_id,
C.c_name,
SE.sec_name

 from 
 assign_subject as A
 join course as C
 on A.course_c_id=C.c_id
 join section as SE
 on A.section_sec_id=SE.sec_id
 join staff as ST
 on A.staff_staff_id=ST.staff_id
 join subject_list as SL
 on A.sub_id=SL.sub_id
  where
   A.staff_staff_id='$staff'";

$result=mysqli_query($connect,$query);

if(mysqli_num_rows($result)>0){
	while($row=mysqli_fetch_array($result)){
		$output[]=$row;
	}

	echo json_encode($output);
}
}
?>