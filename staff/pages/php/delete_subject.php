 <?php  
   require 'db.php'; 
   $data = json_decode(file_get_contents("php://input"));  
   if(count($data) > 0)  
   {  
        $staffid =mysqli_real_escape_string($connect,$data->staffid); 
        $secid= mysqli_real_escape_string($connect,$data->sec);
        $subid= mysqli_real_escape_string($connect,$data->subid);
        $semid= mysqli_real_escape_string($connect,$data->semid);
        $query = "DELETE 
                  FROM 
                  assign_subject 
                  WHERE 
                  staff_staff_id='$staffid'
                  AND
                  sub_id='$subid'
                  AND 
                  section_sec_id='$secid'
                  AND
                  section_semester_sem_id='$semid'";  
        if(mysqli_query($connect, $query))  
        {  
             echo 'Data Deleted';  
        }  
        else  
        {  
             echo 'Error';  
        }  
   }  
 ?>