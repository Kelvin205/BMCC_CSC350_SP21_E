<?php
	session_start();
	
	if(!$_SESSION['username'])
		header("location: login.php");
?>
<!DOCTYPE html>
<html>	
<head>
	<meta name ="viewport" content="width=device-width, initial-scale=1.0"> 
	<title>Laundry Room Appointment</title> 
	<link rel="stylesheet" href="style.css">

	<link href="https://fonts.googleapis.com/css2?
	family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>
	<div class="container">
		<div class="navbar">
			<img src="Images/logo.png" class="logo">
			<nav>
				<ul>		
					<li id = user_log>Welcome, <span><?php echo $_SESSION['username'];?> </span> </li>
					<li><a href="resetpassword.php">Reset Password</a></li>		
					<li><a href="logout.php">Logout</a></li>
				</ul>
			</nav>

		</div>


	<div class="head">
		<h2>Weekly Laundry Room Reservations</h2>
	</div>
	
	

		<div class="row" style="opacity: 0.9">
			
			<div class="col">

				<div class="day day1" style="opacity: 1">
					<h5>Sunday</h5>

					<a href="DayPages/Sunday.html">
						<button id = "Banner" type="button"> View Available Times </button>
					</a>

				</div>

			</div>


			<div class="col">
				<div class="day day2">
					<h5>Monday</h5>
					<a href="DayPages/Monday.html">
						<button type="button"> View Available Times </button>
					</a>

				</div>
			</div>

			<div class="col">
				<div class="day day3">
					<h5>Tuesday</h5>
					<a href="DayPages/Tuesday.html">
						<button type="button"> View Available Times </button>
					</a>
				</div>
			</div>

			<div class="col">
				<div class="day day4">
					<h5>Wednesday</h5>
					<a href="DayPages/Wednesday.html">
						<button type="button"> View Available Times </button>
					</a>
				</div>
			</div>

		

			<div class="col">
				<div class="day day5">
					<h5>Thursday</h5>
					<a href="DayPages/Thursday.html">
						<button type="button"> View Available Times </button>
					</a>
				</div>
			</div>
		
			<div class="col">
				<div class="day day6">
					<h5>Friday</h5>
					<a href="DayPages/Friday.html">
						<button type="button"> View Available Times </button>
					</a>
				</div>
			</div>

			<div class="col">
				<div class="day day7">
					<h5>Saturday</h5>
					<a href="DayPages/Saturday.html">
						<button type="button"> View Available Times </button>
					</a>
				</div>
			</div>
		</div>



	</div>
</body>
</html>


