 <?php  
 require 'db.php'; 
 $output = array();  
 //$data = json_decode(file_get_contents("php://input"));  
 $query = "SELECT distinct section_sec_id FROM assign_subject";  
 $result = mysqli_query($connect, $query);  
 while($row = mysqli_fetch_array($result))  
 {  
      $output[] = $row;  
 }  
 echo json_encode($output);  
 ?>  