<?php
	
	$user = $_REQUEST["username"]; //get username and password
	$pass = $_REQUEST["password"];
			
	// Create connection
	$conn = mysqli_connect("localhost", "root", "root");

	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
			
			
	
	$sql = "SELECT * FROM login.account WHERE userId = '".$user."'
	AND password = '".$pass."'";
			
	$result = mysqli_query($conn, $sql);
	
	//check if username and password match
	if(mysqli_num_rows($result)>0)
		include "Laundry_WebSite.html"; //if match, get access to website
	else
		include "login.html";
?>
	