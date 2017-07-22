<?php  
 
 require 'db.php';  
 $data = json_decode(file_get_contents("php://input"));  
 
  if(count($data) > 0)  
  {  
      $staffid = mysqli_real_escape_string($connect, $data->staffid);
      $password = mysqli_real_escape_string($connect, $data->password);       
          
      
    $query="update 
            staff
            set 
            pwd='$password'
            where 
            staff_id='$staffid'
            "; 
     
           if(mysqli_query($connect, $query))  
           {  
                echo "Password Changed";  
           }  
           else  
           {  
                echo "Oops password couldn't be changed";  
           }  
       
  }  
 ?> 