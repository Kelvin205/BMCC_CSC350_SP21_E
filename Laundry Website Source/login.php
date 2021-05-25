<?php
	session_start();
?>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="login-page.css">
</head>
<body>
 <?php
	//username and password variables empty
	$user = $pass = "";
	//variable to hold error message
	$nameError = $passError = "";
	
	//if username field empty, display error msg, else store username
	if($_SERVER["REQUEST_METHOD"] == "POST")
		if(empty($_POST["username"]))
			$nameError = "Name required";
		else
			$user = $_POST["username"];
	//if password field empty, display error msg, else store password
	if($_SERVER["REQUEST_METHOD"] == "POST")
		if(empty($_POST["password"]))
			$passError = "Password required";
		else
			$pass = $_POST["password"];
	
	//username stored in session variable
	$_SESSION['username'] = $user; 
	
	
	// Create connection   (servername, username, password)
	$conn = mysqli_connect("localhost", "root", "", "laundry_website");

	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	
	$sql = "SELECT * FROM laundry_website.credentials WHERE userId = '".$user."'
	AND password = '".$pass."'";
			
	$result = mysqli_query($conn, $sql);
	
	//check if username and password match
	if(mysqli_num_rows($result)> 0){
		sleep(1); //wait 1 second
		header("location: Laundry_Website.php"); //if match, get access to website
	}
		
 ?>
	
	<main id="main">
		<!--Login-->
		<h1 id="l_header">Login</h1>
		<!--Popup-->
		<div id="holder"> 
		  <p id="popup">Invalid</p>
		</div>
		
		<!--Form-->
		<form id="login-form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
		  <span style="color:red;"><?php echo $nameError;?></span> <!-- Error Message -->
		  <input type="text" name="username"  class="login-form-field" placeholder="Username" autocomplete="off"  value="<?php echo $user;?>">
		  
		  <span style="color:red;"><?php echo $passError;?></span> <!-- Error Message -->
		  <input type="password" name="password"  class="login-form-field" placeholder="Password" autocomplete="off">
		  <input type="submit" value="Login" id="submit">
		</form>
  </main>
</body>
