<?php

require 'db.php';
$output=array();

$query="select c_name from course";
$result=mysqli_query($connect,$query);

if(mysqli_num_rows($result)>0){
	while($row=mysqli_fetch_array($result)){
		$output[]=$row;
	}

	echo json_encode($output);
}

?>