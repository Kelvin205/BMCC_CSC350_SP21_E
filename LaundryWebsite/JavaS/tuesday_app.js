const tue_12am_3am = document.getElementById("tue12am");
const tue_3am_6am = document.getElementById("tue3am");
const tue_6am_9am = document.getElementById("tue6am");
const tue_9am_12pm = document.getElementById("tue9am");
const tue_12pm_3pm = document.getElementById("tue12pm");
const tue_3pm_6pm = document.getElementById("tue3pm");
const tue_6pm_9pm = document.getElementById("tue6pm");
const tue_9pm_12am = document.getElementById("tue9pm");

tl_12am = false;
tl_3am = false;
tl_6am = false;
tl_9am = false;
tl_12pm = false;
tl_3pm = false;
tl_6pm = false;
tl_9pm = false;

logged = false;

var day = "Tuesday";

//sessions
var user = sessionStorage.getItem("user"); 
var alreadylogged = sessionStorage.getItem("log"); 
var logday = sessionStorage.getItem("Appointment_Day"); 
var signupdate = sessionStorage.getItem("Signup_Date");


window.addEventListener('load', 
  function() { 
    if (signupdate != null){
    	if (signupdate == "tl_12am"){
    		tue_12am_3am.innerHTML = user;
	  		logged = true;
	  		tl_12am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "tl_3am"){
    		tue_3am_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_3am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	 else if (signupdate == "tl_6am"){
    		tue_6am_9am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_6am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "tl_9am"){
    		tue_9am_12pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_9am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}


    	else if (signupdate == "tl_12pm"){
    		tue_12pm_3pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_12pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "tl_3pm"){
    		tue_3pm_6pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_3pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "tl_6pm"){
    		tue_6pm_9pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_6pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "tl_9pm"){
    		tue_9pm_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_9pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    }
  }, false);

tue_12am_3am.addEventListener("click", (e) => {
    e.preventDefault(); 


    if (  alreadylogged === null || logday == "Tuesday" || logday === null || alreadylogged == false){
	    if (logged == false){

	    	alert("Appointment Successful");
	    	tue_12am_3am.innerHTML = user; 
	  		logged = true;
	  		tl_12am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_12am")

	    } else if (logged == true && tl_12am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	tue_12am_3am.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_12am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }




	    } else if (logged == true && tl_12am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

tue_3am_6am.addEventListener("click", (e) => {
    e.preventDefault(); 

 if (  alreadylogged === null || logday == "Tuesday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_3am_6am.innerHTML = user; 
	  		logged = true;
	  		tl_3am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_3am")

	    } else if (logged == true && tl_3am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	tue_3am_6am.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_3am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && tl_3am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


tue_6am_9am.addEventListener("click", (e) => {
    e.preventDefault(); 


 if (  alreadylogged === null || logday == "Tuesday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_6am_9am.innerHTML = user; 
	  		logged = true;
	  		tl_6am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_6am")

	    } else if (logged == true && tl_6am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_6am_9am.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_6am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && tl_6am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

tue_9am_12pm.addEventListener("click", (e) => {
    e.preventDefault(); 
 
 if (  alreadylogged === null || logday == "Tuesday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_9am_12pm.innerHTML = user; 
	  		logged = true;
	  		tl_9am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_9am")

	    } else if (logged == true && tl_9am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_9am_12pm.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_9am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && tl_9am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


tue_12pm_3pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "Tuesday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_12pm_3pm.innerHTML = user; 
	  		logged = true;
	  		tl_12pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_12pm")

	    } else if (logged == true && tl_12pm == true ){
 	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_12pm_3pm.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_12pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && tl_12pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})




tue_3pm_6pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "Tuesday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_3pm_6pm.innerHTML = user; 
	  		logged = true;
	  		tl_3pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_3pm")

	    } else if (logged == true && tl_3pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_3pm_6pm.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_3pm = false;
				
			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && tl_3pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

tue_6pm_9pm.addEventListener("click", (e) => {
    e.preventDefault(); 

     if (  alreadylogged === null || logday == "Tuesday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_6pm_9pm.innerHTML = user; 
	  		logged = true;
	  		tl_6pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_6pm")

	    } else if (logged == true && tl_6pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_6pm_9pm.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_6pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && tl_6pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

tue_9pm_12am.addEventListener("click", (e) => {
    e.preventDefault(); 

       if (  alreadylogged === null || logday == "Tuesday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_9pm_12am.innerHTML = user; 
	  		logged = true;
	  		tl_9pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_9pm")

	    } else if (logged == true && tl_9pm == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_9pm_12am.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_9pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && tl_9pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

