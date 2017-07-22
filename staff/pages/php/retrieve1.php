 <?php  
 require 'db.php';
 $output = array();  
 $query = "SELECT distinct subject_list.sub_id, subject_list.sub_name FROM assign_subject, subject_list WHERE assign_subject.sub_id=subject_list.sub_id";  
 $result = mysqli_query($connect, $query);  
 while($row = mysqli_fetch_array($result))  
 {  
      $output[] = $row;  
 }  
 echo json_encode($output);  
 ?> 