<?php
	session_start();
	
	if(!$_SESSION['username'])
		header("location: login.php");
	
	//variable to hold error message
	$pass = "";
	//variable to hold error message
	$passError = "";
	
	//success message
	$success = "";
	
	
	//if password field empty, display error msg
	if($_SERVER["REQUEST_METHOD"] == "POST")
		if(empty($_POST["password"]))
			$passError = "*Password required";
	else
	{
		$pass = $_POST["password"];
		$conn = mysqli_connect("localhost", "root", "", "laundry_website");

		// Check connection
		if (!$conn)
			die("Connection failed: " . mysqli_connect_error());
			
		//select current user
		$sql = "SELECT * FROM laundry_website.credentials WHERE userId = '".$_SESSION['username']."'";
			
		$result = mysqli_query($conn, $sql);
	
		//if username match, update password
		if(mysqli_num_rows($result)==1)
		{
			$sql = "UPDATE laundry_website.credentials SET password = '".$pass."' WHERE userId = '".$_SESSION['username']."'";
			$result = mysqli_query($conn, $sql);
			$success = "Success";
		}
	}
?>
<html>
<head>
	<style>
		.holder{
			text-align:center;
		}
		input[type=password]{
			padding: 10px;
			text-align:center;
		}
	</style>
</head>
<body>

	<div class="holder">
	<h1>Reset Password</h1>
	<p>Reset your password below</p>
	<!--Form-->
	<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

		<p><span style="color:green;"><?php echo $success;?></span></p>

		<p><span style="color:red;"><?php echo $passError;?></span></p>
		
		<input type="password" name="password" autocomplete = "off" placeholder="New Password">
		
		<p><input type="submit"></p>
		
		<input type="button" onclick="location.href = 'Laundry_WebSite.php';" value = "Back">
		
	</form>
	</div>
</body>
</html>