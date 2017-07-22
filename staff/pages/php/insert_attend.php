<?php  
 require 'db.php'; 
 $data=array(); 
 $inputJSON = file_get_contents('php://input');
 $link = json_decode($inputJSON, TRUE);
   
   //$stid = 'st001';   get session id here
   
   if(count($link) > 0)  
   {
     foreach($link as $item) { //foreach element in $arr
        $usn = $item['usn'];
        $date = $item['selectedDate'];
        $sem =  $item['sem_attend']; 
        $section =  $item['sec_attend'];
        $period =  $item['selectedPeriod'];
        $status =  $item['stats'];
        $subject = $item['sub_attend'];
	    $stid = $item['staffid'];

        // echo ($date);
        // echo ("\n");

        //$valid_date2 = date( 'Y/m/d', strtotime($date));
         //echo ($valid_date2);
        $query="INSERT INTO attendance(date_attend, period, status, Student_usn, staff_staff_id, section_sec_id, section_semester_sem_id, subject_list_sub_id) VALUES ('$date','$period','$status','$usn','$stid','$section','$sem','$subject')";
        
        if(mysqli_query($connect, $query))  
            {  
                echo "Data Inserted...";  
            }  
            else  
            {  
                 echo "Error". mysqli_connect_error(); 
            }      
      }
    }  
 ?> 