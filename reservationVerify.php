<?php
     include "connectDatabase.php";

     if(isset($_PT['username']) && isset($_REQUEST['password']))
     {
          $user = $_REQUEST['username']; //retrieve values from html
		  
          $pass = $_REQUEST['password'];
		  
          $connect = connectDatabase("localhost", "root","","laundry_website"); //connect to db

          $sql_command = "select * from laundry_website.reservation where userid = '".$user."'";
          $result = mysqli_query($connect, $sql_command);

          if(mysqli_num_rows($result) > 0)
          {
               //echo "<p>Login Succesful</p>";
		
			   header("Location:Laundry_WebSite.html");
          }
          else
          {
               echo "<p>Login Failed</p>";
          }
	 }
?> 