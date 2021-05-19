const sat_12am_3am = document.getElementById("sat12am");
const sat_3am_6am = document.getElementById("sat3am");
const sat_6am_9am = document.getElementById("sat6am");
const sat_9am_12pm = document.getElementById("sat9am");
const sat_12pm_3pm = document.getElementById("sat12pm");
const sat_3pm_6pm = document.getElementById("sat3pm");
const sat_6pm_9pm = document.getElementById("sat6pm");
const sat_9pm_12am = document.getElementById("sat9pm");

sal_12am = false;
sal_3am = false;
sal_6am = false;
sal_9am = false;
sal_12pm = false;
sal_3pm = false;
sal_6pm = false;
sal_9pm = false;

logged = false;

var day = "Saturday";

//sessions
var user = sessionStorage.getItem("user"); 
var alreadylogged = sessionStorage.getItem("log"); 
var logday = sessionStorage.getItem("Appointment_Day"); 
var signupdate = sessionStorage.getItem("Signup_Date");


window.addEventListener('load', 
  function() { 
    if (signupdate != null){
    	if (signupdate == "sal_12am"){
    		sat_12am_3am.innerHTML = user;
	  		logged = true;
	  		sal_12am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "sal_3am"){
    		sat_3am_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		sal_3am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	 else if (signupdate == "sal_6am"){
    		sat_6am_9am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		sal_6am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "sal_9am"){
    		sat_9am_12pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		sal_9am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}


    	else if (signupdate == "sal_12pm"){
    		sat_12pm_3pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		sal_12pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "sal_3pm"){
    		sat_3pm_6pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		sal_3pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "sal_6pm"){
    		sat_6pm_9pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		sal_6pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "sal_9pm"){
    		sat_9pm_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		sal_9pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    }
  }, false);

sat_12am_3am.addEventListener("click", (e) => {
    e.preventDefault(); 


    if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){

	    	alert("Appointment Successful");
	    	sat_12am_3am.innerHTML = user; 
	  		logged = true;
	  		sal_12am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "sal_12am")

	    } else if (logged == true && sal_12am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	sat_12am_3am.innerHTML = "Available!"; 
			    	logged = false;
			    	sal_12am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }




	    } else if (logged == true && sal_12am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

sat_3am_6am.addEventListener("click", (e) => {
    e.preventDefault(); 

 if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sat_3am_6am.innerHTML = user; 
	  		logged = true;
	  		sal_3am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "sal_3am")

	    } else if (logged == true && sal_3am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	sat_3am_6am.innerHTML = "Available!"; 
			    	logged = false;
			    	sal_3am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && sal_3am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


sat_6am_9am.addEventListener("click", (e) => {
    e.preventDefault(); 


 if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sat_6am_9am.innerHTML = user; 
	  		logged = true;
	  		sal_6am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "sal_6am")

	    } else if (logged == true && sal_6am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	sat_6am_9am.innerHTML = "Available!"; 
			    	logged = false;
			    	sal_6am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && sal_6am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

sat_9am_12pm.addEventListener("click", (e) => {
    e.preventDefault(); 
 
 if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sat_9am_12pm.innerHTML = user; 
	  		logged = true;
	  		sal_9am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "sal_9am")

	    } else if (logged == true && sal_9am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	sat_9am_12pm.innerHTML = "Available!"; 
			    	logged = false;
			    	sal_9am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && sal_9am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


sat_12pm_3pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sat_12pm_3pm.innerHTML = user; 
	  		logged = true;
	  		sal_12pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "sal_12pm")

	    } else if (logged == true && sal_12pm == true ){
 	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	sat_12pm_3pm.innerHTML = "Available!"; 
			    	logged = false;
			    	sal_12pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && sal_12pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})




sat_3pm_6pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sat_3pm_6pm.innerHTML = user; 
	  		logged = true;
	  		sal_3pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "sal_3pm")

	    } else if (logged == true && sal_3pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	sat_3pm_6pm.innerHTML = "Available!"; 
			    	logged = false;
			    	sal_3pm = false;
				
			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && sal_3pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

sat_6pm_9pm.addEventListener("click", (e) => {
    e.preventDefault(); 

     if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sat_6pm_9pm.innerHTML = user; 
	  		logged = true;
	  		sal_6pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "sal_6pm")

	    } else if (logged == true && sal_6pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	sat_6pm_9pm.innerHTML = "Available!"; 
			    	logged = false;
			    	sal_6pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && sal_6pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

sat_9pm_12am.addEventListener("click", (e) => {
    e.preventDefault(); 

       if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sat_9pm_12am.innerHTML = user; 
	  		logged = true;
	  		sal_9pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "sal_9pm")

	    } else if (logged == true && sal_9pm == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	sat_9pm_12am.innerHTML = "Available!"; 
			    	logged = false;
			    	sal_9pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && sal_9pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

