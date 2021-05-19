const mon_12am_3am = document.getElementById("sat12am");
const mon_3am_6am = document.getElementById("sat3am");
const mon_6am_9am = document.getElementById("sat6am");
const mon_9am_12pm = document.getElementById("sat9am");
const mon_12pm_3pm = document.getElementById("sat12pm");
const mon_3pm_6pm = document.getElementById("sat3pm");
const mon_6pm_9pm = document.getElementById("sat6pm");
const mon_9pm_12am = document.getElementById("sat9pm");

ml_12am = false;
ml_3am = false;
ml_6am = false;
ml_9am = false;
ml_12pm = false;
ml_3pm = false;
ml_6pm = false;
ml_9pm = false;

logged = false;

var day = "Monday";

//sessions
var user = sessionStorage.getItem("user"); 
var alreadylogged = sessionStorage.getItem("log"); 
var logday = sessionStorage.getItem("Appointment_Day"); 
var signupdate = sessionStorage.getItem("Signup_Date");


window.addEventListener('load', 
  function() { 
    if (signupdate != null){
    	if (signupdate == "ml_12am"){
    		mon_12am_3am.innerHTML = user;
	  		logged = true;
	  		ml_12am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "ml_3am"){
    		mon_3am_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		ml_3am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	 else if (signupdate == "ml_6am"){
    		mon_6am_9am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		ml_6am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "ml_9am"){
    		mon_9am_12pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		ml_9am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}


    	else if (signupdate == "ml_12pm"){
    		mon_12pm_3pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		ml_12pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "ml_3pm"){
    		mon_3pm_6pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		ml_3pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "ml_6pm"){
    		mon_6pm_9pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		ml_6pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "ml_9pm"){
    		mon_9pm_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		ml_9pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    }
  }, false);

mon_12am_3am.addEventListener("click", (e) => {
    e.preventDefault(); 


    if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){

	    	alert("Appointment Successful");
	    	mon_12am_3am.innerHTML = user; 
	  		logged = true;
	  		ml_12am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "ml_12am")

	    } else if (logged == true && ml_12am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	mon_12am_3am.innerHTML = "Available!"; 
			    	logged = false;
			    	ml_12am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }




	    } else if (logged == true && ml_12am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

mon_3am_6am.addEventListener("click", (e) => {
    e.preventDefault(); 

 if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	mon_3am_6am.innerHTML = user; 
	  		logged = true;
	  		ml_3am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "ml_3am")

	    } else if (logged == true && ml_3am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	mon_3am_6am.innerHTML = "Available!"; 
			    	logged = false;
			    	ml_3am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && ml_3am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


mon_6am_9am.addEventListener("click", (e) => {
    e.preventDefault(); 


 if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	mon_6am_9am.innerHTML = user; 
	  		logged = true;
	  		ml_6am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "ml_6am")

	    } else if (logged == true && ml_6am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	mon_6am_9am.innerHTML = "Available!"; 
			    	logged = false;
			    	ml_6am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && ml_6am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

mon_9am_12pm.addEventListener("click", (e) => {
    e.preventDefault(); 
 
 if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	mon_9am_12pm.innerHTML = user; 
	  		logged = true;
	  		ml_9am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "ml_9am")

	    } else if (logged == true && ml_9am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	mon_9am_12pm.innerHTML = "Available!"; 
			    	logged = false;
			    	ml_9am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && ml_9am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


mon_12pm_3pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	mon_12pm_3pm.innerHTML = user; 
	  		logged = true;
	  		ml_12pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "ml_12pm")

	    } else if (logged == true && ml_12pm == true ){
 	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	mon_12pm_3pm.innerHTML = "Available!"; 
			    	logged = false;
			    	ml_12pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && ml_12pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})




mon_3pm_6pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	mon_3pm_6pm.innerHTML = user; 
	  		logged = true;
	  		ml_3pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "ml_3pm")

	    } else if (logged == true && ml_3pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	mon_3pm_6pm.innerHTML = "Available!"; 
			    	logged = false;
			    	ml_3pm = false;
				
			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && ml_3pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

mon_6pm_9pm.addEventListener("click", (e) => {
    e.preventDefault(); 

     if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	mon_6pm_9pm.innerHTML = user; 
	  		logged = true;
	  		ml_6pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "ml_6pm")

	    } else if (logged == true && ml_6pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	mon_6pm_9pm.innerHTML = "Available!"; 
			    	logged = false;
			    	ml_6pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && ml_6pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

mon_9pm_12am.addEventListener("click", (e) => {
    e.preventDefault(); 

       if (  alreadylogged === null || logday == "satday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	mon_9pm_12am.innerHTML = user; 
	  		logged = true;
	  		ml_9pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "ml_9pm")

	    } else if (logged == true && ml_9pm == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	mon_9pm_12am.innerHTML = "Available!"; 
			    	logged = false;
			    	ml_9pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && ml_9pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

