<?php
  if(isset($_POST['Login'])) {
    session_start();
    $con =  mysqli_connect("localhost", "root", "", "myserver");
    $username = $_POST['sname'];
    $password = $_POST['spass'];
    $query = "SELECT * FROM staff WHERE staff_id = '$username' AND pwd = '$password'";
    $res = mysqli_query($con, $query) or die(mysql_error());
    if(mysqli_num_rows($res) == 1) {
        while($row=mysqli_fetch_assoc($res)){
           $_SESSION['stname']=$row["st_name"];
           $_SESSION['sname'] = $username;
        }
       
        //$_SESSION['sname'] = $username;
        header('Location: dashboard.php?success=Login Successful'); 
    }
    else
         header('Location: index.php?invalid=Login Failed');
  }
?>