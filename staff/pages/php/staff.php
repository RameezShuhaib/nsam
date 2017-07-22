<?php 
    require 'db.php';
    $output=array();
    $data = json_decode(file_get_contents("php://input"));
    if(count($data) > 0){
        $staffid = mysqli_real_escape_string($connect,$data->sid);
        $query="SELECT st_name as name,st_mob as phone,st_email as email,staff_id as sid FROM staff WHERE staff_id='$staffid'";

        $result=mysqli_query($connect,$query);
        if(mysqli_num_rows($result)>0){
            while($row=mysqli_fetch_array($result)){
                $output[]=$row;
            }
            echo json_encode($output);
        }
    } 
    //else {
    //     echo "error in DB Connection or Code";
    // }
?>
