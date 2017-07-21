<?php  
 require 'db.php';  
 $data = json_decode(file_get_contents("php://input"));  
 if(count($data) > 0)  
 {  
    $name = mysqli_real_escape_string($connect, $data->name);
    $sid = mysqli_real_escape_string($connect, $data->sid);       
    $mob = mysqli_real_escape_string($connect, $data->mob);
    $email = mysqli_real_escape_string($connect, $data->email);
    $jod = mysqli_real_escape_string($connect, $data->jod);
    $query="INSERT INTO staff(st_name,staff_id,st_mob,st_email,st_join_date,pwd) VALUES('$name','$sid','$mob','$email','$jod','$sid')";  
    if(mysqli_query($connect, $query))  
    {  
        echo "Data Inserted...";  
    }  
    else  
    {  
        echo "Error";  
    }  
 }  
 ?> 