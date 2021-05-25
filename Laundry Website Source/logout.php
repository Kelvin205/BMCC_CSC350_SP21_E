<?php
	session_start();
	// remove session variables
	session_unset();

	// destroy the session
	session_destroy();
	
	sleep(1.5); //wait
	header("location: login.php");
?>